import React, { Component } from 'react';
import { View, Text, FlatList, ActivityIndicator, StyleSheet } from 'react-native';
import { ListItem, SearchBar } from 'react-native-elements';
import {Header, Left, Right, Icon,Button,Title,Body} from 'native-base';

export default class Notification extends Component {
  static navigationOptions = {
    title: 'Notification',
  };
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      data: [],
      error: null,
    };

    this.arrayholder = [];
  }

  componentDidMount() {
    this.makeRemoteRequest();
  }

  makeRemoteRequest = () => {
    const url = `https://randomuser.me/api/?&results=20`;
    this.setState({ loading: true });

    fetch(url)
      .then(res => res.json())
      .then(res => {
        this.setState({
          data: res.results,
          error: res.error || null,
          loading: false,
        });
        this.arrayholder = res.results;
      })
      .catch(error => {
        this.setState({ error, loading: false });
      });
  };



  renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: '100%',
          backgroundColor: 'grey',
          
        }}
      />
    );
  };

  render() {
    if (this.state.loading) {
      return (
        
        <View style={{ flex: 1 }}>
        <View style={{  alignItems: 'center', justifyContent: 'center' }}>
          <ActivityIndicator />
          </View>
        </View>
      );
    }
    return (
      <View >
      
       
        <FlatList
          data={this.state.data}
          renderItem={({ item }) => (
            <ListItem
            leftAvatar={{ source: { uri: item.picture.thumbnail } }}
              title = {<View><Text>New Booking Request
                </Text></View>}
              subtitle={
                  <View style={styles.subtitleView}>
                      <Text>A new booking request requires your Review</Text>
                      <Text>10 mins ago</Text>
                  </View>
              }
            />
          )}
          ItemSeparatorComponent={this.renderSeparator}
          
        />
      </View>
    );
  }
}

styles = StyleSheet.create({
    subtitleView: {
      
    },
    
    menu:{
      alignItems:'flex-start',
      justifyContent:'flex-start',
      marginTop:'5%',
      marginLeft:'3%',
      position:'absolute'}
  })
