import { CardField, useConfirmPayment } from "@stripe/stripe-react-native";
import { useEffect, useState } from "react";
import { Alert, Button, KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text } from "react-native";

export default function Payment({ route, navigation } :any) {
  const { amount, plan } = route.params;
  const [ clientSecret, setClientSecret ] = useState(null);
  const { confirmPayment, loading } = useConfirmPayment();

  useEffect((() => {
    const fetchPaymentIntent = async () => {
      try {
        const res = await fetch(`http://192.168.1.27:3000/${plan}`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' }
        });
        const data = await res.json();
        console.log(JSON.stringify(data))
        if (res.status !== 200 || !data.clientSecret) {
          throw new Error(`Teste: ${data.error}` || 'Failed to fetch client secret')
        }
        setClientSecret(data.clientSecret);
      } catch (error) {
        console.log(`Erro: ${error}`)
      }
    }
    fetchPaymentIntent();
  }), [plan])

  const handlePayPress = async () => {
    if (!clientSecret) {
      return
    }

    const { error, paymentIntent } = await confirmPayment(clientSecret, {
      paymentMethodType: 'Card',
      paymentMethodData: {
        billingDetails: {
          name: 'OnlyAcademy'
        }
      }
    })
    if (error) {
      Alert.alert(`Erro: ${error.message}`)
    } else if (paymentIntent) {
      Alert.alert('Pagamento realizado com sucesso!')
      navigation.navigate('UserProfile')
    }
  }

  return(
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.container}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text>Valor do plano {plan === 'month' ? 'mensal' : 'anual'}: R${amount / 100}</Text>
        <CardField
          postalCodeEnabled={false}
          placeholders={{ number: '4242 4242 4242 4242' }}
          cardStyle={styles.card}
          style={styles.cardContainer}
        />
        <Button
          onPress={handlePayPress}
          title="Pagar"
        />
      </ScrollView>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
},
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#FFFFFF',
  },
  cardContainer: {
    height: 50,
    marginVertical: 30,
  },
})