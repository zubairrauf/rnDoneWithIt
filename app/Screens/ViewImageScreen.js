import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

import colors from '../config/colors'

function ViewImageScreen(props) {
    return (
        <View style={styles.container}>
            <View style={styles.closeIcon}></View>
            <View style={styles.deleteIcon}></View>
            <Image source={require('../assets/chair.jpg')} style={styles.img} />
        </View>
    );
}

export default ViewImageScreen;

const styles = StyleSheet.create({
    closeIcon: {
        width: 50,
        height: 50,
        backgroundColor: colors.primary,
        position: 'absolute',
        top: 40,
        left: 30
    },
    deleteIcon: {
        width: 50,
        height: 50,
        backgroundColor: colors.secondary,
        position: 'absolute',
        top: 40,
        right: 30
    },
    container: {
        height: '100%',
        width: '100%',
        backgroundColor: colors.black
    },
    img: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain'
    }
})