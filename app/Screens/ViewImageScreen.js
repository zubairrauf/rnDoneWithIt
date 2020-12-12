import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'

import colors from '../config/colors'

function ViewImageScreen(props) {
    return (
        <View style={styles.container}>
            <View style={styles.closeIcon}>
                <MaterialCommunityIcons name='close' color='white' size={35} />
            </View>
            <View style={styles.deleteIcon}>
                <MaterialCommunityIcons name='trash-can-outline' color='white' size={35} />
            </View>
            <Image source={require('../assets/chair.jpg')} style={styles.img} />
        </View>
    );
}

export default ViewImageScreen;

const styles = StyleSheet.create({
    closeIcon: {
        position: 'absolute',
        top: 40,
        left: 30
    },
    deleteIcon: {
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