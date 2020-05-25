import React from 'react';
import {View, ScrollView} from 'react-native';
import Header from './src/components/header/Header';
import Body from './src/components/body/Body';


class App extends React.Component {
  render() {
    return (
     
      <View>
        <Header />
        <ScrollView>
        <Body />
        </ScrollView>
      </View>
    );
  }
}

export default App;