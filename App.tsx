import { useFonts } from 'expo-font';
import Camera from './src/pages/Camera';
import UserProfile from './src/pages/UserProfile';
import { Poppins_400Regular, Poppins_700Bold } from '@expo-google-fonts/poppins';
import { ThemeProvider } from 'styled-components/native';
import theme from './src/global/theme';

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold
  });

  return (
    <ThemeProvider theme={theme}>
      <UserProfile />
    </ThemeProvider>
  );
}