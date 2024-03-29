
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {Header, Left, Right, Icon} from 'native-base';


export default class UserSettings extends Component{
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to User Settings</Text>
       
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
