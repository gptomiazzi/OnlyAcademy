import { useFonts } from 'expo-font';
import UserProfile from './src/pages/UserProfile';
import { Poppins_400Regular, Poppins_700Bold } from '@expo-google-fonts/poppins';
import { ThemeProvider } from 'styled-components/native';
import theme from './src/global/theme';
import { StripeProvider } from '@stripe/stripe-react-native';
import PaymentScreen from './src/pages/Payment';

export default function App() {
  const stripeKey = 'pk_test_51PIb3w046m3vjyit5zcqiV3NuE2JLJItfvCZpi6V63LpVUyW1S6JRwpGhTmrAlFf7HH2ydCQeIJ0gRPJN96Bkfuu00BibGcQuK';
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold
  });

  return (
    <StripeProvider publishableKey={stripeKey}>
      <ThemeProvider theme={theme}>
        <PaymentScreen />
      </ThemeProvider>
    </StripeProvider>
  );
}