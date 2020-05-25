import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container : {
        flexDirection : 'row',
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 4,
        marginHorizontal: 8,
        marginVertical: 2,
        backgroundColor: '#FA5858',
        borderRadius: 5
    },
    reception: {
        color:'#ffffff',
         marginVertical:18,
         marginTop:0, 
         fontSize: 18, 
         fontWeight: "bold", 
         paddingLeft:12,
         paddingTop:15
    },
    icon : {
        width: 90,
        height: 90,
        marginTop: -10,
        marginLeft: 16,
        marginRight: 10
    },
    title: {
        color: '#feffff',
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: -15,
        textTransform: 'uppercase'
    },
    info : {
        color: '#feffff',  
        fontSize: 15,   
        marginRight:100 
    },
    data: {
        color: '#feffff',
        fontSize: 14,
        paddingLeft: 100
    },
    valor: {
        color: '#feffff',
        fontWeight: 'bold',
        fontSize: 18,
        paddingLeft: 175
    }
});

export default styles;