import React, { useState } from 'react';
import { TextInput, View, StyleSheet, Platform, Modal, Button, FlatList } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'

import colors from '../config/colors';
import defaultStyles from '../config/styles'
import AppText from './AppText';
import { TouchableWithoutFeedback } from 'react-native';
import Screen from './Screen';
import ListItem from './ListItem';
import PickerItem from './PickerItem';

function AppPicker({ icon, items, placeholder, selectedItem, onSelectItem }) {
    const [ modalVisible, setModalVisible ] = useState(false)
    return (
        <>
            <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
                <View style={styles.inputContainer}>
                    {icon && <MaterialCommunityIcons style={styles.icon} name={icon} size={20} color={colors.medium} />}
                    <AppText style={styles.text}>{selectedItem ? selectedItem.label : placeholder}</AppText>
                    {icon && <MaterialCommunityIcons name={'chevron-down'} size={20} color={colors.medium} />}
                </View>
            </TouchableWithoutFeedback>
            <Modal visible={modalVisible} animationType="slide">
                <Screen>
                    <Button 
                        title='Close'
                        onPress={() => setModalVisible(false)}
                    />
                    <FlatList 
                        data={items}
                        keyExtractor={item => item.value.toString()}
                        renderItem={({item}) => (
                            <PickerItem 
                                label={item.label}
                                onPress={() => {
                                    setModalVisible(false)
                                    onSelectItem(item)
                                }}
                            />
                        )}
                    />
                </Screen>
            </Modal>
        </>
    );
}

export default AppPicker;

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
    },
    text: {
        flex: 1
    }
})