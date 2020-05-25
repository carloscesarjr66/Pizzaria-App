import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container : {
        flexDirection : 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 10,
        marginHorizontal: 0,
        backgroundColor: '#FA5858',
        borderBottomColor: '#FA5858',
        borderBottomWidth:  2,
        elevation: 10
    },
    icon : {
        height: 35,
        width: 35    
    },
    title: {
        fontSize: 24,
        fontFamily: 'Roboto',
        color: '#ffffff'
    }
});

export default styles;