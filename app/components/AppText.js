import React from 'react';
import { Platform, StyleSheet } from 'react-native'

function AppText({children}) {
    return (
        <Text style={styles.text}>{children}</Text>
    );
}

export default AppText;

const styles = StyleSheet.create({
    text: {
        fontSize: 18,
        fontFamily: Platform.OS === 'android' ? "Roboto"  : "Avenir"
    }
})