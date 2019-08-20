
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, ScrollView,TouchableHighlight,ImageBackground} from 'react-native';

import {Header, Left, Right, Icon, Button, Title, Body} from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { FlatGrid } from 'react-native-super-grid';
import * as theme from '../catalog/theme'

export default class SellerProfile extends Component{
 
  render() {
    const items = [
      { name: 'TURQUOISE', code: '$200'  }, { name: 'EMERALD', code: '$60' },
      { name: 'PETER RIVER', code: '$600' }, { name: 'AMETHYST', code: '$20' },
      { name: 'WET ASPHALT', code: '#34495e' }, { name: 'GREEN SEA', code: '#16a085' },
      { name: 'NEPHRITIS', code: '#27ae60' }, { name: 'BELIZE HOLE', code: '#2980b9' },
      { name: 'WISTERIA', code: '#8e44ad' }, { name: 'MIDNIGHT BLUE', code: '#2c3e50' },
      { name: 'SUN FLOWER', code: '#f1c40f' }, { name: 'CARROT', code: '#e67e22' },
      { name: 'ALIZARIN', code: '#e74c3c' }, { name: 'CLOUDS', code: '#ecf0f1' },
      { name: 'CONCRETE', code: '#95a5a6' }, { name: 'ORANGE', code: '#f39c12' },
      { name: 'PUMPKIN', code: '#d35400' }, { name: 'POMEGRANATE', code: '#c0392b' },
      { name: 'SILVER', code: '#bdc3c7' }, { name: 'ASBESTOS', code: '#7f8c8d' },
    ];
    
    return (
      <View style={styles.container}>
      
        <View style={styles.boxSummary}>
        <View style={{ alignItems:'center',marginTop:5}}>
              <Image source={require('../../assets/avatar.png')} style={{ width: 110, height: 110, borderRadius: 110 }} />
        </View>
        <View style={{marginTop:3}}>
          <Text style = {{justifyContent:'center',textAlign:'center', color:'black'}}>
            John
          </Text>
        </View>
        <View style={{ flexDirection: 'row',textAlign:'center',justifyContent:'center' }}>
                                    <Text style = {styles.avatarRating}>4.5<Ionicons name={'ios-star'} size={14}
                                      color={'#000'}  /></Text>
                                      <Text> (1)</Text>
                                    </View>
        
                                    <View>
          <Text style = {{justifyContent:'center',textAlign:'center', color:'black'}}>
            Member Science : March 2018
          </Text>
        </View>
        <View>
          <Text style = {{justifyContent:'center',textAlign:'center', color:'black'}}>
            Location : Charlotte, NC
          </Text>
        </View>
        </View>
        <View>
                    <Text style={styles.heading}>
                        Items List
                    </Text>
                    </View>
        <ScrollView scrollEventThrottle={16} showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: theme.sizes.padding }}>
                <View style={{flex:1, backgroundColor:'white',paddingTop:5}}>
                    
                   
                   
               
              

          
           
           <FlatGrid
        itemDimension={100}
        items={items}
        style={styles.gridView}
        // staticDimension={300}
        // fixed
        // spacing={20}
        renderItem={({ item, index }) => (
          <TouchableHighlight>
          <View style={[styles.itemContainer]}>
            <ImageBackground source={require('../../assets/Gen.jpg')} style={{width: '100%', height: '100%'}} >
            <View style = {styles.priceTag}>
            <Text style={styles.itemName}>{item.name}</Text>
            <Text style={styles.itemCode}>{item.code}</Text>
            </View>
            </ImageBackground>
          </View>
          </TouchableHighlight>
        )}
      />
       </View>
            </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
  },
  boxSummary: {
    backgroundColor: 'white',
    width: '96%',
    height: 210,
    alignSelf: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 1,
    elevation: 5,
    marginBottom:10,
    marginTop:5
    

},
heading: {
  fontSize: 18,
  color: 'black',
  marginTop: 12,
  textAlign:'center'
},
gridView: {
  marginTop: 5,
  flex: 1,
},
itemContainer: {
  justifyContent: 'flex-end',
  borderRadius: 5,
  padding: 6,
  height: 100,
},
priceTag:{
  backgroundColor:'grey',
  opacity:0.8, 
  marginRight:'25%',
  borderTopRightRadius:15,
  borderBottomRightRadius:15
},
itemName: {
  fontSize: 12,
  color: '#fff',
  fontWeight: '400',
},
itemCode: {
  fontSize: 12,
  color: '#fff',
},
});
