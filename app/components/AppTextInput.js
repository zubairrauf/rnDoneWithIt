import React from 'react';
import { TextInput, View, StyleSheet, Platform } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'

import colors from '../config/colors';
import defaultStyles from '../config/styles'

function AppTextInput({ icon, ...otherProps }) {
    return (
        <View style={styles.inputContainer}>
            {icon && <MaterialCommunityIcons style={styles.icon} name={icon} size={20} color={colors.medium} />}
            <TextInput style={defaultStyles.text} {...otherProps} />
        </View>
    );
}

export default AppTextInput;

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 25,
        backgroundColor: colors.light,
        margin: 10,
        padding: 10
    },
    icon: {
        marginRight: 10
    }
})