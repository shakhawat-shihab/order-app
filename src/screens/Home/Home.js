import React from 'react';
import { StyleSheet, View, Image, Button, Alert, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import Text from '../../components/Text/Text';
import { color } from '../../theme/color';
import { spacing } from '../../theme/spacing';
import { StatusBar } from 'expo-status-bar';
const Home = ({ navigation }) => {
    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}  style={styles.container}>
            <View style={[styles.upperSection, {}]}>
                <View  >
                    <Image style={styles.userImage} source={require('../../../src/images/LOGO.png')}  ></Image>
                </View>

            </View>
            <View style={styles.lowerSection}>
                <View style={[styles.imageContainer, {}]}>
                    <View style={styles.imageDesign} >
                        <Image source={require('../../../assets/favicon.png')} />
                    </View>
                </View>
                <Text preset='h1' style={{ color: color.headingColor, fontWeight: 'bold', textAlign: 'center',marginTop:spacing[4] }}> Non-Contact  Deliveries</Text>
                <Text preset='small' style={{ color: color.paragraphColor, textAlign: 'center', marginVertical: spacing[6] }}>
                    Whe placing an order, select the option “Contactless delivery” and the courier will leave your order at the door.
                </Text>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        style={styles.buttonDesign}
                        backgroundColor={color.green}
                        onPress={() => {
                            navigation.navigate("Item Screen", { planet: "item" })
                        }}
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
        </ScrollView >
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    upperSection: {
        height: 350,
        paddingHorizontal: spacing[7],
        backgroundColor:color.purple
    },
    userImage: {
        marginTop: spacing[10],
        width: 100,
    },
    lowerSection: {
        backgroundColor: color.white,
        marginTop:-50,
        flex: 1,
        paddingHorizontal: spacing[7],
        paddingVertical: spacing[8],
        borderTopRightRadius: 50,
        borderTopLeftRadius: 50,
        // backgroundColor: 'red',
    },
    imageContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: spacing[1],
        // backgroundColor: 'red',
        // height: '30%'
    },
    imageDesign: {
        backgroundColor: 'white',
        padding: 30,
        borderRadius: 60
    },
    buttonContainer: {
        marginVertical: spacing[7],
        // flex: 1,
        flexDirection: 'column',
        // justifyContent: 'flex-end'
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
export default Home;