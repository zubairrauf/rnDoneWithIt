import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

import AppText from '../components/AppText'
import colors from '../config/colors'
import ListItem from '../components/ListItem'

function ListingDetailsScreen(props) {
    return (
        <View>
            <Image style={styles.image} source={require('../assets/jacket.jpg')}/>
            <View style={styles.detailsContainer}>
                <AppText style={styles.title}>Red jacket for sale</AppText>
                <AppText style={styles.price}>Kr 300</AppText>
                <View style={styles.userContainer}>
                    <ListItem 
                        image={require('../assets/mosh.jpg')}
                        title = 'Mosh hamedani'
                        subtitle = '5 Listings'
                    />
                </View>
            </View>
        </View>
    );
}

export default ListingDetailsScreen;

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 300
    },
    detailsContainer: {
        padding: 20
    },
    title: {
        fontSize: 24,
        fontWeight: '700'
    },
    price: {
        color: colors.secondary,
        fontSize: 20,
        fontWeight: '700',
        paddingVertical: 7
    },
    userContainer: {
        paddingVertical: 20
    }
})