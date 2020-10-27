/*

Login screen

*/

// Import libraries
import { StatusBar } from 'expo-status-bar';
import React, { memo, useState } from 'react';
import { Text, View, TextInput, Alert } from 'react-native';
import { emailValidator } from '../lib/utils';

// Import stylesheet
import styles from '../styles/style';

// Import button
import AppButtonBottom from '../components/button';


const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState({ value: '', error: '' });

    const onLoginPressed = () => {
        const emailError = emailValidator(email.value);
    
        if (emailError) {
            setEmail({ ...email, error: emailError });
            return;
        }
    
        navigation.navigate('Welcome');
    };

    return (
        <View style={ [styles.container, styles.justifyContentCenter] }>
            <StatusBar />

            <Text style={styles.jumbo}>Try login!</Text>
            <Text style={styles.text}>Use your registered email to get into the app.</Text>

            <TextInput
                style={ styles.input }
                value={ email.value }
                onChangeText={ text => setEmail({ value: text, error: '' }) }
                error={!!email.error}
                errorText={email.error}
                autoCapitalize="none"
                autoCompleteType="email"
                textContentType="emailAddress"
                keyboardType="email-address"
                placeholder='Email'
            />
            <AppButtonBottom
                onPress={ onLoginPressed }
                title='Login'
            />
        </View>
    )
}

export default memo(LoginScreen);
