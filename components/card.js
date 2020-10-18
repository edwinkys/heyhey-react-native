/*

Component: Card Image

*/

// Import libraries
import React from 'react';
import { StyleSheet, Image } from "react-native";

const CardImage = ({ image }) => (
        <Image
            source={ image } 
            style={ styles.cardImg } 
        />
);

const styles = StyleSheet.create({
    cardImg: {
        flex: 1,
        width: 'auto',
        resizeMode: 'contain'
    }
});

export default CardImage;
