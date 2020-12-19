import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import Card from '../components/Card';
import ListItem from '../components/ListItem';

import Screen from '../components/Screen';
import colors from '../config/colors';

const listings = [
    {
        id: 1,
        title: 'Pinup skilt til salgs',
        price: 300,
        image: require('../assets/pinup.jpg')
    },
    {
        id: 2,
        title: 'Rød jakke - Nesten ny',
        price: 100,
        image: require('../assets/redjacket2.jpg')
    },
    {
        id: 3,
        title: 'Couch in good condition',
        price: 250,
        image: require('../assets/couch.jpg')
    }
]

function ListingsScreen(props) {
    return (
        <Screen style={styles.screen}>
            <FlatList
                data={listings}
                keyExtractor = {listing => listing.id.toString()}
                renderItem = {( {item} ) => {
                    return (
                        <Card 
                        title={item.title}
                        subTitle = {`NOK ${item.price}`}
                        image = {item.image}
                        />
                    )
                }}
            />
        </Screen>
    );
}

export default ListingsScreen;

const styles = StyleSheet.create({
    screen: {
        paddingHorizontal: 20,
        backgroundColor: colors.light
    }
})