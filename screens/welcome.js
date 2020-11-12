/*

Welcome screen

*/

// Import libraries
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, ImageBackground } from 'react-native';

// Import stylesheet
import styles from '../styles/style';

// Import button
import AppButtonBottom from '../components/button';


function WelcomeScreen ({ navigation }) {
    return (
        <ImageBackground
            source={ require('../assets/bg.png') }
            style={ styles.bgImage }>

            <View style={ [styles.containerWithImage, styles.justifyContentCenter] }>
                <StatusBar />

                <Text style={ styles.jumbo }>Welcome to HeyHey!</Text>
                <Text style={ styles.text }>A simple app to cure your boredom 👋</Text>
                <AppButtonBottom
                    onPress={() => navigation.navigate('Map')}
                    title='Our HQ'
                />
            </View>
        </ImageBackground>
    )
}

export default WelcomeScreen;
