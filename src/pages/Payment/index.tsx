import { StripeProvider, useStripe } from '@stripe/stripe-react-native';
import { useState } from 'react';
import { Button, Platform, SafeAreaView, Text } from 'react-native';

export default function Payment() {
  const stripeKey = 'pk_test_51PIb3w046m3vjyit5zcqiV3NuE2JLJItfvCZpi6V63LpVUyW1S6JRwpGhTmrAlFf7HH2ydCQeIJ0gRPJN96Bkfuu00BibGcQuK';
  const { initPaymentSheet, presentPaymentSheet } = useStripe();
  const [ loading, setLoading ] = useState(false);

  const API_URL = Platform.OS == 'ios' ? "http://localhost:3000" : "http://127.0.0.1:3000";

  const fetchPaymentSheetParams = async () => {
    const res = await fetch(`${API_URL}/payment-test`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const { paymentIntent, customer } = await res.json();

    return {
      paymentIntent, 
      customer
    }
  }

  const initializePaymentSheet = async () => {
    const { paymentIntent, customer } = await fetchPaymentSheetParams();

    const { error } = await initPaymentSheet({
      merchantDisplayName: 'Xanaia',
      customerId: customer,
      paymentIntentClientSecret: paymentIntent,
      defaultBillingDetails: {
        name: 'Hanana'
      }
    });
    if (!error) {
      setLoading(true);
    }
  }

  return (
    <StripeProvider
      publishableKey={stripeKey}
    >
      <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Hanana</Text>
        <Button 
          title='Teste'
          onPress={initializePaymentSheet}
        />
      </SafeAreaView>
      </StripeProvider>
  );
}