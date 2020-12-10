import React from 'react'
import { View, Text, ImageBackground, StyleSheet, Image } from 'react-native'

import colors from '../config/colors'


const WelcomeScreen = () => {
    const backgroundImage = require('../assets/background.jpg')
    const logoImage = require('../assets/logo-red.png')

    return (
        <View style={styles.container}>
            <ImageBackground source = {backgroundImage} style={styles.imgBackground}>
                <View style={styles.logoContainer} >
                    <Image source={logoImage} style={styles.logo} />
                    <Text>Sell what you don't need</Text>
                </View>
                <View style={styles.loginButton}></View>
                <View style={styles.registerButton}></View>
            </ImageBackground>
        </View>
    )
}

export default WelcomeScreen

const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            width: '100%',
        },
        imgBackground: {
            flex: 1,
            justifyContent: "flex-end",
            alignItems: 'center'
        },
        logoContainer: {
            position: 'absolute',
            top: 70,
            alignItems: 'center'
        },
        logo: {
            width: 100,
            height: 100,
        },
        loginButton: {
            width: '100%',
            height: 70,
            backgroundColor: colors.primary
        },
        registerButton: {
            width: '100%',
            height: 70,
            backgroundColor: colors.secondary
        }
    }
)