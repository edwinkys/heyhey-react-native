/*

Component: Button

*/

// Import libraries
import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from "react-native";

const AppButtonBottom = ({ onPress, title }) => (
    <TouchableOpacity onPress={ onPress } style={ styles.buttonContainer }>
        <Text style={styles.buttonText}>{ title }</Text>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    buttonContainer: {
        backgroundColor: '#33E1FF',
        alignSelf: 'stretch',
        borderRadius: 50,
        paddingVertical: 16,
        marginVertical: 25,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%'
    },

    buttonText: {
        fontSize: 18,
        color: '#FFF',
        lineHeight: 27,
        letterSpacing: 1,
        fontFamily: 'Montserrat-Bold',
        textAlign: 'center'
    },
});

export default AppButtonBottom;
