/*

Joking screen

*/

// Import libraries
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Text, View, StyleSheet} from 'react-native';
import MapView, { Marker } from 'react-native-maps';

// Import stylesheet
import styles from '../styles/style';

// Import button
import AppButtonBottom from '../components/button';

// Marker
const MapScreen = ({ navigation }) => {
    const [region, setRegion] = useState ({
        latitude: 33.377917,
        longitude: -111.976020,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005
    });

    return (
        <MapView 
            style={{ ...StyleSheet.absoluteFillObject }}
            initialRegion={ region }
            onRegionChangeComplete={ region => setRegion(region) }
        > 
            <Marker 
                coordinate={{ latitude:33.377917, longitude:-111.976020 }}
                title='University of Advancing Technology'
                description='This is where our school is :)'
            >
            </Marker>
        </MapView>
    );
};

export default MapScreen;
