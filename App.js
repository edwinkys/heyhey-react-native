/*

Main app source code

*/

// Import libraries
import { StatusBar } from 'expo-status-bar';
import { AppLoading } from 'expo';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';

import React from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';

// Import stylesheet
import styles from './styles/style';


export default class App extends React.Component {
    // Variables
    state = {
        appIsReady: false,
    };

    customFonts = {
        'Montserrat': require('./fonts/Montserrat-Regular.ttf'),
        'Montserrat-Bold': {
            uri: require('./fonts/Montserrat-Bold.ttf')
        }
    };

    async componentDidMount() {
        // Prevent native splash screen from autohiding
        try {
            await SplashScreen.preventAutoHideAsync();
        }
        catch (e) {
            console.warn(e);
        }
        this.prepareResources();
    }

    // Method that serves to load resources
    prepareResources = async () => {
        await Font.loadAsync(this.customFonts);
        this.setState({ appIsReady: true }, async () => {
            await SplashScreen.hideAsync();
        });
    };

    render() {
        if (!this.state.appIsReady) {
            return <AppLoading />;
        }

        return (
            <View style={styles.container}>
                <StatusBar />
                <Text style={styles.jumbo}>Welcome to HeyHey!</Text>
                <Text style={styles.text}>A simple app to cure your boredom 👋</Text>
                <Button
                    onPress={() => Alert.alert('Simple Button pressed')}
                    title='Learn More'
                    color='#000'
                    style={styles.button}
                    accessibilityLabel=''
                />
            </View>
        );
    }
}
