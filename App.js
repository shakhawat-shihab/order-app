import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image, Button, Alert, TouchableOpacity } from 'react-native';
import { useFonts } from 'expo-font';
import Text from './src/components/Text/Text';
import { color } from './src/theme/color';
import { spacing } from './src/theme/spacing';
export default function App() {
  const [loaded] = useFonts({
    SFPro_Regular: require("./src/fonts/SFPro_Regular.ttf"),
    AntonioMedium: require("./src/fonts/AntonioMedium.ttf")
  });

  return (
    <View style={styles.container}>
      <View style={styles.upperSection}>
      </View>
      <View style={styles.lowerSection}>
        <View style={styles.imageContainer}>
          <View style={styles.imageDesign} >
            <Image source={require('./assets/favicon.png')} />
          </View>
        </View>

        <Text preset='h1' style={{ color: color.headingColor, fontWeight: 'bold', textAlign: 'center' }}> Non-Contact  Deliveries</Text>
        <Text preset='small' style={{ color: color.paragraphColor, textAlign: 'center', marginVertical: spacing[6] }}>
          Whe placing an order, select the option “Contactless delivery” and the courier will leave your order at the door.
        </Text>
        <View style={{ marginVertical: spacing[8], }}>
          <TouchableOpacity
            style={styles.buttonDesign}
            backgroundColor={color.green}
          // onPress={onPress}
          >
            <Text preset='small' style={styles.buttonText}>Order Now</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.buttonDesign, { backgroundColor: color.white, marginTop: spacing[4] }]}
          // onPress={onPress}
          >
            <Text preset='small' style={[styles.buttonText, { color: color.paragraphColor }]}>Dismiss</Text>
          </TouchableOpacity>
        </View>


      </View>
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.purple,
  },
  upperSection: {
    height: '40%'
  },
  lowerSection: {
    backgroundColor: color.white,
    height: '60%',
    paddingHorizontal: spacing[7],
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: spacing[1],
    // backgroundColor: 'red',
    height: '30%'
  },
  imageDesign: {
    // alignItems: 'center',
    // justifyContent: 'center',
    // backgroundColor: 'white',
    // padding: spacing[2]
    backgroundColor: 'white',
    padding: 30,
    borderRadius: 60
  },
  buttonDesign: {
    paddingVertical: spacing[4],
    backgroundColor: color.green,
    alignItems: 'center',

    borderRadius: spacing[2]
  },
  buttonText: {
    color: color.white,
    textTransform: 'uppercase',
    fontWeight: '700',
    letterSpacing: 1
  }


});
