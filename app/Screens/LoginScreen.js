import React from 'react';
import { Image, StyleSheet } from 'react-native'
import { Formik } from 'formik'
import * as Yup from 'yup'

import AppButton from '../components/AppButton';
import AppTextInput from '../components/AppTextInput';
import AppText from '../components/AppText';
import ErrorMessage from '../components/ErrorMessage'
import Screen from '../components/Screen';

const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password")
})

function LoginScreen(props) {
    return (
        <Screen style={styles.container}>
            <Image 
                source={require('../assets/logo-red.png')} 
                style={styles.logo}
            />
            <Formik
                initialValues={{ email: '', password: '' }}
                onSubmit={values => console.log(values)}
                validationSchema={validationSchema}
            >
                {({ handleChange, handleSubmit, errors, setFieldTouched, touched }) => (
                    <>
                        <AppTextInput 
                            autoCapitalize='none'
                            autoCorrect={false}
                            icon='email'
                            keyboardType='email-address'
                            onBlur={() => setFieldTouched("email")}
                            onChangeText = {handleChange('email')}
                            placeholder='Email'
                            textContentType='emailAddress'
                        />
                        <ErrorMessage error={errors.email} visible={touched.email}/>
                        <AppTextInput 
                        autoCapitalize='none'
                        autoCorrect={false}
                        icon='lock'
                        keyboardType='default'
                        placeholder='Password'
                        onBlur={() => setFieldTouched("password")}
                        onChangeText={handleChange('password')}
                        secureTextEntry
                        textContentType='password'
                        />
                        <ErrorMessage error={errors.password} visible={touched.password}/>
                        <AppButton
                            title='Login'
                            onPress={handleSubmit}
                        />
                    </>
                )}
            </Formik>
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