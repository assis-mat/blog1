import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { View, Image, Text, ScrollView, StyleSheet, Platform, TouchableOpacity } from "react-native";
import { connect } from 'react-redux';

class Main extends Component {

    constructor(props) {
        super(props);

        this.state = {

        };
    }

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#fff', justifyContent: "space-around", alignItems: "center" }}>

                <TouchableOpacity
                 onPress={() => Actions.posts()}
                 style={styles.sombra} >
                    <Text style={{ fontSize: 20, color: "#fff" }} > Posts </Text>
                </TouchableOpacity>
                <TouchableOpacity
                 onPress={() =>Actions.user()}
                    style={styles.sombra} >
                    <Text style={{fontSize: 20, color: "#fff" }} > Usuarios </Text>
                </TouchableOpacity>

            </View>
        );
    }
}
const styles = StyleSheet.create({
    sombra: {
        backgroundColor: '#02A752', height: 100, width: 200,
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
        justifyContent: 'center', borderRadius:20,
        borderColor: '#ccc', borderWidth: 0.5, alignItems: 'center'
    },

});

const mapStateToProps = state => (
    {


    }
)

export default connect(mapStateToProps, {})(Main)


