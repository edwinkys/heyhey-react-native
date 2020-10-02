/*

Main app source code

*/

// Import libraries
import { AppLoading } from 'expo';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Import screens
import WelcomeScreen from './screens/welcome';
import JokingScreen from './screens/joking';

// Create stack navigator
const Stack = createStackNavigator();


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
            <NavigationContainer>
                <Stack.Navigator 
                    initialRouteName="Welcome"
                    screenOptions={{
                        headerShown: false
                    }}>
                    <Stack.Screen name="Welcome" component={WelcomeScreen} />
                    <Stack.Screen name="Joking" component={JokingScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        )
    }
}
