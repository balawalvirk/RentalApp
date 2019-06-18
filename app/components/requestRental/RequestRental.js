
import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TouchableOpacity, Image, ScrollView, TouchableHighlight } from 'react-native';
import { Header, Left, Right, Button, Title, Body } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';




export default class RequestRental extends Component {
    static navigationOptions = {
        title: 'Request Rental',
        headerTintColor: 'white',
        headerStyle: {
            textAlign: 'center',
            backgroundColor: '#1b96fe',


        },
        headerTitleStyle: { textAlign: 'center', alignSelf: 'center', color: 'white' },
    };
    render() {
        return (
            <View style={styles.container} >

                <View>
                    <Text style={styles.welcome}>Tap "Place Order" to submit your rental request once approved, your card will be charged and you will be notified via email</Text>
                </View>
                <View>
                    <Text style={styles.heading}>
                        Order Summary
</Text>
                </View>
                <View style={styles.boxSummary}>
                    <View style={{ flexDirection: 'row', marginTop: 3, marginLeft: 5 }}>
                        <View >
                            <Text style={{ color: 'black', fontSize: 13 }}>Services:</Text>
                        </View>
                        <View style={{ flex: 1 }}>
                            <Text style={{ textAlign: 'right', marginRight: 5, color: 'black', fontSize: 13 }}>$40.00</Text>
                        </View>

                    </View>
                    <View style={{ flexDirection: 'row', marginLeft: 5, marginTop: 3 }}>
                        <View >
                            <Text style={{ color: 'black', fontSize: 13 }}>Delivery Fees:</Text>
                        </View>
                        <View style={{ flex: 1 }}>
                            <Text style={{ textAlign: 'right', marginRight: 5, color: 'black', fontSize: 13 }}>$10.00</Text>
                        </View>

                    </View>
                    <View style={{ flexDirection: 'row', marginLeft: 5, marginTop: 3 }}>
                        <View >
                            <Text style={{ color: 'black', fontSize: 13 }}>Deposit(Refundable):</Text>
                        </View>
                        <View style={{ flex: 1 }}>
                            <Text style={{ textAlign: 'right', marginRight: 5, color: 'black', fontSize: 13 }}>$70.00</Text>
                        </View>

                    </View>
                    <View style={{ flexDirection: 'row', marginLeft: 5, marginTop: 9 }}>
                        <View >
                            <Text style={{ color: 'black', fontSize: 16 }}>Total:</Text>
                        </View>
                        <View style={{ flex: 1 }}>

                            <Text style={{ textAlign: 'right', marginRight: 5, color: 'black', fontSize: 16 }}>$120.00</Text>
                        </View>

                    </View>
                </View>
                <View>
                    <Text style={styles.heading}>
                        Login Or Create Account
</Text>
                </View>
                <View style={styles.boxAccount}>
                    <View style={{ flexDirection: 'row', marginLeft: 5 }}>
                        <View >
                            <Text style={{ color: 'black', fontSize: 16 }}>Login or Sign up to checkout</Text>
                        </View>
                        <View style={{ flex: 1, justifyContent: 'center' }}>
                            <Icon name="chevron-right" size={26} color='white' style={{ textAlign: 'right', marginRight: 5, color: 'black', fontSize: 18 }} />
                        </View>

                    </View>
                </View>
                <View>
                    <Text style={styles.heading}>
                        Comments
</Text>
                </View>
                <View style={styles.boxAccount}>
                    <View style={{ flexDirection: 'row', marginLeft: 5 }}>
                        <View >
                            <Text style={{ color: 'black', fontSize: 18 }}></Text>
                        </View>
                        <View style={{ flex: 1, justifyContent: 'center' }}>
                            <Icon name="chevron-right" size={32} color='white' style={{ textAlign: 'right', marginRight: 5, color: 'black', fontSize: 18 }} />
                        </View>

                    </View>
                </View>
                <View>
                    <Text style={styles.heading}>
                        Rental Details
</Text>

                    <View style={styles.boxDetails}>
                        <TouchableHighlight onPress={() => this.props.navigation.navigate('DetailTabs')}>
                            <View style={{ flexDirection: 'row', marginLeft: 5 }}>
                                <View style={{ marginLeft: 6 }}>
                                    <Image source={require('../../assets/Gen.jpg')} style={{ width: 60, height: 60, borderRadius: 10 }} />
                                </View>
                                <View style={{ flex: 1, }}>
                                    <Text style={{ marginLeft: 15, color: 'black', fontSize: 16 }}>1500 Amp Generator</Text>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Text style={{ marginLeft: 15, color: 'black', fontSize: 13 }}>Dates: </Text>
                                        <Text style={{ color: 'black', fontSize: 13 }}>May 24 - May 25</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Text style={{ marginLeft: 15, color: 'black', fontSize: 13 }}>Rental Price: </Text>
                                        <Text style={{ color: 'black', fontSize: 13 }}>$200</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Text style={{ marginLeft: 15, color: 'black', fontSize: 13 }}>Timing: </Text>
                                        <Text style={{ color: 'black', fontSize: 13 }}>10 Am to 11 Am</Text>
                                    </View>
                                </View>

                            </View>
                        </TouchableHighlight>
                    </View>

                    <TouchableOpacity style={styles.Submitbtn}>
                        <Text style={{color: 'white', textAlign: 'center', fontSize: 18, fontWeight: 'bold' }} >Place Order</Text></TouchableOpacity>

                </View>






            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#eaeaea',
    },
    welcome: {
        fontSize: 13,
        marginTop: 5,
        marginLeft: 5,
        color: 'black'
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    heading: {
        fontSize: 18,
        color: 'black',
        marginTop: 12,
        marginLeft: 5
    },
    boxSummary: {
        backgroundColor: 'white',
        width: '96%',
        height: '18%',
        alignSelf: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 1,
        elevation: 5,

    },
    boxAccount: {
        backgroundColor: 'white',
        width: '96%',
        height: '7%',
        alignSelf: 'center',
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 1,
        elevation: 5,
    },
    boxDetails: {
        backgroundColor: 'white',
        width: '96%',
        height: '35%',
        alignSelf: 'center',
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 1,
        elevation: 5,

    },
    Submitbtn: {

        width: '60%',
        height:35,
        marginTop: 10,
        backgroundColor: '#1b96fe',
        color: 'white',
        alignSelf: 'center',
        justifyContent: 'center',

    }


});