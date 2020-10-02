/*

Main app stylesheet

*/

// Import libraries
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        paddingHorizontal: 20,
    },

    jumbo: {
        fontFamily: 'Montserrat-Bold',
        fontSize: 36,
        color: '#333',
        letterSpacing: 2,
        lineHeight: 54,
        marginBottom: 36,
        textAlign: 'left'
    },

    text: {
        fontFamily: 'Montserrat',
        fontSize: 18,
        color: '#666',
        letterSpacing: 1,
        lineHeight: 27,
        marginBottom: 27,
        textAlign: 'left'
    },
});

export default styles