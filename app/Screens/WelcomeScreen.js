import React from 'react'
import { View, Text, ImageBackground, StyleSheet, Image } from 'react-native'

import colors from '../config/colors'
import AppButton from '../components/AppButton'

const WelcomeScreen = () => {
    const backgroundImage = require('../assets/background.jpg')
    const logoImage = require('../assets/logo-red.png')

    return (
        <View style={styles.container}>
            <ImageBackground source = {backgroundImage} style={styles.imgBackground} blurRadius={2}>
                <View style={styles.logoContainer} >
                    <Image source={logoImage} style={styles.logo} />
                    <Text style={styles.tagline}>Sell what you don't need</Text>
                </View>
                <View style={styles.buttonContainer}>
                    <AppButton title='Login' onPress={()=> console.log('Pressed')}/>
                    <AppButton title='Register' bgColor={'secondary'} onPress={()=> console.log('Pressed')}/>
                </View>
            </ImageBackground>
        </View>
    )
}

export default WelcomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
    },
    imgBackground: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: 'center',
    },
    logoContainer: {
        position: 'absolute',
        top: 70,
        alignItems: 'center'
    },
    buttonContainer: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10
    },
    logo: {
        width: 100,
        height: 100,
    },
    tagline: {
        fontSize: 25,
        fontWeight: "600",
        marginVertical: 10
    } 
})