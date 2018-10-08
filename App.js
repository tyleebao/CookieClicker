import * as React from 'react';
import { Text, View, StyleSheet, Button, TouchableOpacity, Image } from 'react-native';
import { Constants } from 'expo';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-elements'; // 0.19.1

export default class App extends React.Component {

  render() {
    return (
      <View style={styles.container}>

        <Text style={styles.paragraph}>
          Cookie Clicker App
        </Text>

        <Button
       //   onPress={this.onPressButton}
          title="Button"
          color="#841584"
        />

    <TouchableOpacity>
      <Image
          style={{width: 70, height: 70}}
          source={{uri: 'https://ubisafe.org/images/transparent-cookie-cartoon.png'}}
      />

    </TouchableOpacity>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
});
