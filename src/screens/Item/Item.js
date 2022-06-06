import React from 'react';
import { View, StyleSheet, SafeAreaView, ImageBackground, Image, TouchableOpacity, ScrollView } from 'react-native';
import Text from '../../components/Text/Text';
import { color } from '../../theme/color';
import { spacing } from '../../theme/spacing';
import Icon from 'react-native-vector-icons/Feather';

const Item = () => {
    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }} style={styles.container} >
            <View style={styles.upperSection}>
                <ImageBackground
                    // source={{ uri: 'https://images5.alphacoders.com/105/thumb-1920-1050319.jpg' }}
                    source={{ uri: 'https://i.ibb.co/4mk8Q7t/Media.png' }}
                    style={styles.image}
                    resizeMode='stretch'
                ></ImageBackground>
            </View>
            
            <View style={styles.lowerSection}>
                <Text preset={'h2'} style={{ marginVertical: spacing[7], color: color.headingColor, fontWeight: '700' }}>Boston Lettuce</Text>

                <View style={{ flexDirection:'row' }}>
                    <Text preset='h3' style={{ color: color.headingColor, fontWeight: 'bold' }} >1.10 </Text>
                    <Text preset='h4' style={{ color: color.paragraphColor }}>$/piece</Text>
                </View>
                <Text preset='small' style={{ color: color.green }}>~ 150 gr / piece</Text>
                <Text preset='h4' style={{ marginVertical: spacing[5], color: color.headingColor, fontWeight: '700' }}>Spain</Text>

                <Text preset='small' style={{ color: color.paragraphColor, lineHeight: 25.5 }}>
                    Lettuce is an annual plant of the daisy family, Asteraceae. It is most often grown as a leaf vegetable, but sometimes for its stem and seeds. Lettuce is most often used for salads, although it is also seen in other kinds of food, such as soups, sandwiches and wraps; it can also be grilled.
                </Text>
               

                {/* <View style={{ flex: 1, flexDirection: 'column' }}> */}
                <View style={{ flex: 1, flexDirection: 'row', alignItems:'flex-end', justifyContent:'space-between', marginVertical: spacing[4] }}>
                    <TouchableOpacity
                        style={[styles.buttonDesign, { width: '20%', backgroundColor: color.white, flexDirection: 'row',  justifyContent: 'center', borderWidth: 1 }]}
                    // onPress={onPress}
                    >
                        <Icon name="heart" size={spacing[4]} style={{ color: color.paragraphColor,  fontWeight: 'bold' }} />
                        <Text preset='small'></Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.buttonDesign, {  width: '75%',borderColor: color.green, flexDirection: 'row', justifyContent: 'center', borderWidth: 1  }]}
                    // onPress={onPress}
                    >
                        <Icon name="shopping-cart" size={spacing[4]} style={{ color: color.white, fontWeight: 'bold', paddingRight: spacing[3] }} />
                        <Text preset='small' style={[styles.buttonText, { color: color.white }]}>Add To cart</Text>
                    </TouchableOpacity>
                </View>

                {/* </View> */}
            </View>
        </ScrollView >
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: color.white,
        // height: '100%',
        // width: null
        flexDirection: 'column',
    },
    upperSection: {
        height: 400,
        backgroundColor: '#A259FF10',
    }, 
    image: {
        flex: 1,
        // justifyContent: "center"
    },
    lowerSection: {
        flex: 1,
        // position: 'absolute',
        // top: -40,
        marginTop:-40,
        backgroundColor: color.white,
        paddingHorizontal: spacing[7],
        borderTopRightRadius: 50,
        borderTopLeftRadius: 50
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
        letterSpacing: 0.4
    }

});

export default Item;