import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';

import { View, Image, Text, ScrollView, StyleSheet, Platform, TouchableOpacity, Alert, ActivityIndicator } from "react-native";


import { buscarUserDetails } from '../Actions/UserDetailsActions'

import { connect } from 'react-redux';



class UserDetails extends Component {

    constructor(props) {
        super(props);

        this.state = {

        };
    }

    componentWillMount() {

        this.props.buscarUserDetails(this.props.userId)

    }


    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#fff' }}>

                {this.renderScreen()}

            </View>
        );
    }
    setAddress(address) {
        var addressFull = address.street + ", " + address.suite + " - " + address.city + " - " + address.zipcode
        console.log(addressFull)
        return addressFull
    }

    renderScreen() {

        if (this.props.msg != '') {
            Alert.alert(this.props.msg);
            if (this.props.ListCallWaiting.length === 0) {
                return;
            }
        }

        if (this.props.loading) {

            return (
                <View style={{ flex: 1, justifyContent: 'center' }}>
                    <ActivityIndicator size='large' color='#00823F' />
                </View>
            )
        }

        return (

            <View
                style={styles.sombra} >
                    <Text style={{ fontSize: 25, fontWeight: "bold"}}> {this.props.user.username}</Text>
                 
                <View style={{  }} >
                    <Text style={{ fontSize: 22, fontWeight: "bold"  }}>Nome:    <Text style={{ fontSize: 23, fontWeight: "normal"}}> {this.props.user.name}</Text>
                    </Text>
                    <Text style={{ fontSize: 22, fontWeight: "bold" }}>Email:   <Text style={{ fontSize: 23, fontWeight: "normal" }}>{this.props.user.email}</Text></Text>
                    <Text style={{ fontSize: 22, fontWeight: "bold" }}>Telefone:    <Text style={{ fontSize: 23, fontWeight: "normal"}}>{this.props.user.phone}</Text></Text>
                    <Text style={{ fontSize: 22, fontWeight: "bold" }}>Site:  <Text style={{ fontSize: 23, fontWeight: "normal"}}>{this.props.user.website}</Text></Text>
                    <Text style={{ fontSize: 22, fontWeight: "bold" }}>Endereco:    <Text style={{ fontSize: 23, fontWeight: "normal"}}>{this.setAddress(this.props.user.address)}</Text></Text>
                    <Text style={{ fontSize: 22, fontWeight: "bold"}}>Empresa:   <Text style={{ fontSize: 23, fontWeight: "normal"}}>{this.props.user.company.name}</Text></Text>
                </View>
            </View>
        )

    }

}
const styles = StyleSheet.create({
    sombra: {
        backgroundColor: '#fff',
        flexDirection: 'column', marginHorizontal: 10,
        borderRadius: 10,
        ...Platform.select({
            ios: {
                shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 2,
                },
                shadowOpacity: 0.23,
                shadowRadius: 2.62,


            },
            android: {
                elevation: 4,
            },
        }),
        justifyContent: 'center',
        borderColor: '#ccc', borderWidth: 0.5, alignItems: 'center', padding: 10, marginTop:10
    },

});

const mapStateToProps = state => (
    {
        msg: state.UserDetailsReducer.msg,
        loading: state.UserDetailsReducer.loading,
        user: state.UserDetailsReducer.user,
    }
)

export default connect(mapStateToProps, { buscarUserDetails })(UserDetails)


