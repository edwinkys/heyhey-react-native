/*

Main app stylesheet

*/

// Import libraries
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 20
    },

    containerWithImage: {
        flex: 1,
        backgroundColor: '#ffffff95',
        paddingHorizontal: 20
    },

    bgImage: {
        flex: 1
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

    input: {
        fontFamily: 'Montserrat',
        fontSize: 18,
        color: '#333',
        letterSpacing: 1,
        borderWidth: 1,
        borderColor: '#33E1FF',
        borderRadius: 50,
        paddingVertical: 16,
        paddingHorizontal: 16,
        marginVertical: 25,
        alignSelf: 'stretch',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%'

    },

    justifyContentCenter: {
        justifyContent: 'center'
    }
});

export default styles;
