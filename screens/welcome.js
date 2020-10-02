/*

Welcome screen

*/

// Import libraries
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';

// Import stylesheet
import styles from '../styles/style';

// Import button
import AppButtonBottom from '../components/button';


function WelcomeScreen ({ navigation }) {
    return (
        <View style={styles.container}>
            <StatusBar />
            <Text style={styles.jumbo}>Welcome to HeyHey!</Text>
            <Text style={styles.text}>A simple app to cure your boredom 👋</Text>
            <AppButtonBottom
                onPress={() => navigation.navigate('Joking')}
                title='Learn More'
            />
        </View>
    )
}

export default WelcomeScreen;
