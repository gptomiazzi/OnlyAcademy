import { StripeProvider } from "@stripe/stripe-react-native";
import { View } from "react-native";
import { Button } from "../../components/Button";


export function ChoicePlan({navigation} :any) {
  return (
    <StripeProvider publishableKey="pk_test_51PIb3w046m3vjyit5zcqiV3NuE2JLJItfvCZpi6V63LpVUyW1S6JRwpGhTmrAlFf7HH2ydCQeIJ0gRPJN96Bkfuu00BibGcQuK">
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', gap: 10 }}>
            <Button title="Free" onPress={() => {navigation.navigate('UserProfile')}} color="green"></Button>
            <Button title="Monthly" onPress={() => {navigation.navigate('Payment', { plan: 'month', amount: 2500 })}} color="yellow"></Button>
            <Button title="Annually" onPress={() => {navigation.navigate('Payment', {plan: 'year', amount: 15000})}} color="orange"></Button>
          </View>
    </StripeProvider>
  )
}