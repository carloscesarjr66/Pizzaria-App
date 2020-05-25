import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from './styles';
import {  Dots } from '../../assets/images/images';

export default class Header extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}> You Commands</Text>
                <TouchableOpacity onPress={() => console.warn('More Options Clicked!')}>
                    <Image style={styles.icon} source={Dots} />
                </TouchableOpacity>                
            </View>
        )
    }
}