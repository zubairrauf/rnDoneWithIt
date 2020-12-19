import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';

import Screen from '../components/Screen'
import ListItem from '../components/ListItem'
import colors from '../config/colors';
import Icon from '../components/Icon';
import ItemSeparator from '../components/ItemSeparator';

const menuItems = [
    {
        title: "My Listings",
        icon: {
            name: "format-list-bulleted",
            backgroundColor: colors.primary
        }
    },
    {
        title: "My Messages",
        icon: {
            name: "email",
            backgroundColor: colors.secondary
        }
    }
]

function AccountScreen(props) {
    return (
        <Screen style={styles.screen}>
            <View style={styles.container}>
                <ListItem 
                    title='Zubair Rauf'
                    subTitle='zubair@zubairrauf.com'
                    image={require('../assets/zubair.jpg')}
                /> 
            </View>
            <View style={styles.container}>
                <FlatList 
                    data={menuItems}
                    keyExtractor={menuItem => menuItem.title}
                    ItemSeparatorComponent={ItemSeparator}
                    renderItem={({ item }) => {
                        return (
                            <ListItem 
                                title={item.title}
                                IconComponent = {
                                    <Icon name={item.icon.name} backgroundColor={item.icon.backgroundColor}/>
                                }
                            />
                        )
                    }}
                />
            </View>
            <ListItem 
                    title='Log Out'
                    IconComponent={<Icon name='logout' backgroundColor="#ffe66d" />}
            />
        </Screen>
    );
}

export default AccountScreen;

const styles = StyleSheet.create({
    screen: {
        backgroundColor: colors.light
    },
    container: {
        marginVertical: 20
    }
})