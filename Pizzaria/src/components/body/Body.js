import React from 'react';
import { View, Text, ImageBackground, Image, TouchableOpacity } from 'react-native';
import styles from './styles';
import { BG, Pizza } from '../../assets/images/images';


export default class Body extends React.Component {

     render(){
        return (

            <View>
          <ImageBackground source={ BG } style={{ resizeMode: "cover", height: '100%'}} >
              
              <View><Text style={styles.reception}>Hello, Marwen Kheder</Text></View>
              
              <TouchableOpacity delayPressIn={80} onPress={() => console.warn('Clicked!')}>
              <View style={styles.container}>
              <View>
                <Image source={Pizza} style={styles.icon} />
                </View>
                <View>
                 <Text style={styles.valor}>30.24</Text>
                 <Text style={styles.title}>TETA</Text>
                 <Text style={styles.info}>Cheese(Extra), Olive, Mushroom, Tomato(Extra), Basil, Onion, Chili, Pepperoni.</Text>       
                 <Text style={styles.data}>2017-05-10 21:44:35</Text>
                </View>
              </View>
              </TouchableOpacity>
              
              <TouchableOpacity delayPressIn={80} onPress={() => console.warn('Clicked!')}>
              <View style={styles.container}>
              <View>
                <Image source={Pizza} style={styles.icon} />
                </View>
                <View>
                 <Text style={styles.valor}>31.04</Text>
                 <Text style={styles.title}>TETA</Text>
                 <Text style={styles.info}>Cheese(Extra), Olive, Mushroom, Tomato(Extra), Basil, Onion, Green pepper, Chilli, Pepperoni.</Text>
                 <Text style={styles.data}>2017-05-10 21:40:28</Text>
                </View>
              </View>
              </TouchableOpacity>

              <TouchableOpacity delayPressIn={80} onPress={() => console.warn('Clicked!')}>
              <View style={styles.container}>
              <View>
                <Image source={Pizza} style={styles.icon} />
                </View>
                <View>
                 <Text style={styles.valor}>19.75</Text>
                 <Text style={styles.title}>GIGA</Text>
                 <Text style={styles.info}>Cheese(Extra), Mushroom, Tomato(Extra), Basil, Onion, Green pepper(Extra).</Text>
                 <Text style={styles.data}>2017-05-10 21:08:55</Text>
                </View>
              </View>
              </TouchableOpacity>

              <TouchableOpacity delayPressIn={80} onPress={() => console.warn('Clicked!')}> 
              <View style={styles.container}>
              <View>
                <Image source={Pizza} style={styles.icon} />
                </View>
                <View>
                 <Text style={styles.valor}>18.24</Text>
                 <Text style={styles.title}>TETA</Text>
                 <Text style={styles.info}>Cheese(Extra), Olive, Mushroom, Tomato(Extra), Basil, Onion, Chili, Mussarela.</Text>
                 <Text style={styles.data}>2017-05-10 20:45:25</Text>
                </View>
              </View>
              </TouchableOpacity>

              <TouchableOpacity delayPressIn={80} onPress={() => console.warn('Clicked!')}>
              <View style={styles.container}>
              <View>
                <Image source={Pizza} style={styles.icon} />
                </View>
                <View>
                 <Text style={styles.valor}>15.24</Text>
                 <Text style={styles.title}>GIGA</Text>
                 <Text style={styles.info}>Cheese(Extra), Olive, Tomato(Extra), Basil, Onion Rings, Chili, Cheddar.</Text>
                 <Text style={styles.data}>2017-05-10 20:31:15</Text>
                </View>
              </View>
              </TouchableOpacity>

              </ImageBackground>
            </View>
        );
    }
}
