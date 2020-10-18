/*

Joking screen

*/

// Import libraries
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';

// Import stylesheet
import styles from '../styles/style';

// Import button
import AppButtonBottom from '../components/button';
import CardImage from '../components/card';


function JokingScreen ({ navigation }) {
    return (
        <View style={styles.container}>
            <StatusBar />

            <CardImage 
                image={ require('../assets/joking.png') }
            />

            <Text style={styles.jumbo}>Just joking! 😝</Text>
            <Text style={styles.text}>There is no way I can create that kind of app in several hours 😂</Text>
            <AppButtonBottom
                onPress={() => navigation.navigate('Welcome')}
                title='Take me home!'
            />
        </View>
    )
}

export default JokingScreen;
