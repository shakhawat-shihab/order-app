import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image, Button, Alert, TouchableOpacity, SafeAreaView } from 'react-native';
import { useFonts } from 'expo-font';
import Text from './src/components/Text/Text';
import { color } from './src/theme/color';
import { spacing } from './src/theme/spacing';
import Home from './src/screens/Home/Home';
import Item from './src/screens/Item/Item';
import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
export default function App() {
  const [loaded] = useFonts({
    SFPro_Regular: require("./src/fonts/SFPro_Regular.ttf"),
    AntonioMedium: require("./src/fonts/AntonioMedium.ttf")
  });

  return (

    < NavigationContainer theme={DarkTheme} >
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home Screen" component={Home} />
        <Stack.Screen name="Item Screen" component={Item} />
      </Stack.Navigator>
      <StatusBar style='dark' />
    </NavigationContainer >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.purple,
  }
});
