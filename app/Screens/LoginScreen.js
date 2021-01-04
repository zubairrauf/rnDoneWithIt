import React, { useState } from 'react';
import { Image, StyleSheet, View } from 'react-native'
import AppButton from '../components/AppButton';
import AppTextInput from '../components/AppTextInput';
import Screen from '../components/Screen';

function LoginScreen(props) {
    const [ email, setEmail ] = useState('')
    const [ password, setsetPassword ] = useState('')
    return (
        <Screen style={styles.container}>
            <Image 
                source={require('../assets/logo-red.png')} 
                style={styles.logo}
            />
            <AppTextInput 
                autoCapitalize='none'
                autoCorrect={false}
                icon='email'
                keyboardType='email-address'
                onChangeText = {text => setEmail(text)}
                placeholder='Email'
                textContentType='emailAddress'
                value={email}
            />
            <AppTextInput 
                autoCapitalize='none'
                autoCorrect={false}
                icon='lock'
                keyboardType='default'
                placeholder='Password'
                onChangeText={text => setsetPassword(text)}
                secureTextEntry
                textContentType='password'
                value={password}
            />
            <AppButton
                title='Login'
                onPress={() => { console.log( 'Email: ' + email + ' Password: ' + password )}}
            />
        </Screen>
    );
}

export default LoginScreen;
const styles = StyleSheet.create({
    container: {
        padding: 10
    },
    logo: {
        width: 80,
        height: 80,
        alignSelf: 'center',
        marginTop: 30
    }
})