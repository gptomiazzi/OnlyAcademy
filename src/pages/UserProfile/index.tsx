import React from "react";
import { Image, Text } from "react-native";
import { RoundedFooter } from "../../components/RoundedFooter/style";
import { Header, UserData, DataContainer, UserDataContainer, DescriptionCotainer, ButtonWrapper, SafeButtonsWrapper, CategoriesContainer, BlackBoldText, BlackText, MediaCard, CardImage} from "./styles"
import {CircleContainer, CircleImage} from "../../components/CircleContainer/style";
import { Button } from "../../components/Button";
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

const img = require('../../assets/background.png');

export default function UserProfile() {
  return(
    <>
      <Header source={img}>

        <SafeButtonsWrapper>
          <CircleContainer size={44} color="#E6EEFA">
            <AntDesign name="arrowleft" size={24} color="black" />
          </CircleContainer>
          <CircleContainer size={44} color="#E6EEFA">
            <Entypo name="message" size={24} color="black" />
          </CircleContainer>
        </SafeButtonsWrapper>
      </Header>
      
      <RoundedFooter>
        <CircleContainer size={100} color="#FEFEFE" 
          style={{
            position: "absolute",
            top: -50
          }}
        >
          <CircleImage source={require('../../assets/profile.png')} />
        </CircleContainer>
        
        <UserDataContainer>
          <DataContainer>
            <UserData>
              <BlackBoldText>1K</BlackBoldText>
              <BlackText>Followers</BlackText>
            </UserData>
            <UserData>
              <BlackBoldText>342</BlackBoldText>
              <BlackText>Following</BlackText>
            </UserData>
          </DataContainer>

        <DescriptionCotainer>
          <BlackBoldText>@gabtomiazzi</BlackBoldText>
          <Text style={{ fontSize: 16, color: '#6C7A9C' }}>
            Hello! I'm Gabriel. I like programming and I know how to play some percussion stuff =D
          </Text>
        </DescriptionCotainer>  
        </UserDataContainer>
        <ButtonWrapper>
          <Button title="Follow" textColor="#FFFFFF"/>
          <Button title="Message" color="#FFFFFF"/>
        </ButtonWrapper>
        <CategoriesContainer>
          <BlackText style={{ textDecorationLine: 'underline', textDecorationColor: '#6C7A9C' }}>All</BlackText>
          <BlackText>Photo</BlackText>
          <BlackText>Video</BlackText>
        </CategoriesContainer>
        <MediaCard>
          <CardImage source={require('../../assets/lindo.jpg')} />
        </MediaCard>
      </RoundedFooter>
    </> 
  );
};