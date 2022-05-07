import { View } from 'react-native';

import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium,
} from '@expo-google-fonts/inter';

import AppLoading from 'expo-app-loading';
import { StatusBar } from 'expo-status-bar';

import { Widget } from '@/components/Widget';

import { theme } from '@/theme';

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: theme.colors.background,
      }}
    >
      <Widget />
      <StatusBar backgroundColor="transparent" style="light" translucent />
    </View>
  );
}
