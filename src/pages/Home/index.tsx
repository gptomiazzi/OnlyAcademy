import { Button, Image, StyleSheet, TextInput, View } from "react-native";
import { useEffect, useState } from "react";
import { supabase } from "../../utils/supabase";
import * as ImagePicker from 'expo-image-picker';

export default function Home() {
  const [images, setImages] = useState<string[]>([]);
  const [newImageUrl, setNewImageUrl] = useState('');

  useEffect(() => {
    const fetchImages = async () =>{
      const { data, error } = await supabase
      .from('posts')
      .select('image_url')
      .order('created_at');
      
      if (error) {
        console.error('Error fetching images:', error);
        return;
      }

      setImages(data.map((post) => post.image_url));
    };

    fetchImages();
  }, [])

  async function handleImageUpload() {
    if (!newImageUrl) {
      return;
    }

    try {
      //Upload pro storage do supabase
      const { error } = await supabase.storage.from('images').upload(newImageUrl, {
        contentType: 'image/jpeg'
      });
      if (error) {
        console.error('Error uploading image1: ', error);
        return;
      }

      const uploadedImageUrl = newImageUrl;

      //Update no state das imagens
      setImages((prevImages) => [...prevImages, uploadedImageUrl]);

      setNewImageUrl('');

    } catch (error) {
      console.error('Error uploading image2 : ', error)
    }
  }


  return(
    <View style={styles.container}>
      <View style={styles.imageGrid}>
        {images.map((imageUrl) => (
          <Image key={imageUrl} source={{ uri: imageUrl }} style={styles.image} />
        ))}
      </View>

      <View style={styles.uploadForm}>
        <TextInput
          style={styles.inputField}
          value={newImageUrl}
          onChangeText={(text) => setNewImageUrl(text)}
          placeholder="Enter image URL"
        />
        <Button title="Upload Image" style={styles.submitButton} onPress={handleImageUpload} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  imageGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  image: {
    width: 150,
    height: 150,
    margin: 10,
  },
  uploadForm: {
    marginTop: 20,
  },
  inputField: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 10,
  },
  submitButton: {
    padding: 10,
    backgroundColor: '#007bff',
    color: '#fff',
  },
});