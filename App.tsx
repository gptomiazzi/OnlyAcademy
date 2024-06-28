import { useFonts } from 'expo-font';
import { Poppins_400Regular, Poppins_700Bold } from '@expo-google-fonts/poppins';
import { ThemeProvider } from 'styled-components/native';
import theme from './src/global/theme';
import Routes from './src/routes';

export default function App() {

  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold
  });

  return (
      <ThemeProvider theme={theme}>
        <Routes />
      </ThemeProvider>
  );
}