import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';

import { View, Image, Text, ScrollView, StyleSheet, Platform, TouchableOpacity, Alert, ActivityIndicator } from "react-native";


import { buscarPosts, salvarPost } from '../Actions/PostsActions'

import { connect } from 'react-redux';



class Posts extends Component {

    constructor(props) {
        super(props);

        this.state = {

        };
    }

    componentWillMount() {

        this.props.buscarPosts()

    }

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#fff' }}>

                {this.renderScreen()}

            </View>
        );
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

            <ScrollView style={{ flex: 1 }}>
                {this.mostrarLista()}
            </ScrollView>
        )

    }
    userPost(posts) {
        for (let user of this.props.listUsers) {
            if (user.id === posts.userId) {
                return user.email
            }
        }
    }

    buscarCommentPost(posts) {
        this.props.salvarPost(posts)
        Actions.commentsPosts({ idPost: posts.id })
    }
    buscarUserDetails(posts) {
        Actions.userDetails({ userId: posts.userId })
    }
    mostrarLista() {
        return (
            this.props.listPosts.map((posts) => (

                <TouchableOpacity
                    style={styles.sombra}
                    onPress={() => this.buscarCommentPost(posts)}>
                    <View style={{ margin: 5, flexDirection: 'row' }}  >
                        <Text style={{ fontSize: 16, fontWeight: "bold", flex: 1, flexWrap: 'wrap', textAlign: "left" }}>{posts.title}</Text>
                        <TouchableOpacity
                        style={{ height:25 }} 
                            onPress={() => this.buscarUserDetails(posts)}>
                            <Text style={{ fontSize: 15, fontStyle: "italic", color: "#009BDA", textAlign: "right" }}>{this.userPost(posts)}</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ width: "100%", flexDirection: 'row', padding: 10 }}>
                        <Text style={{ fontSize: 14, color: '#898A8F' }}>{posts.body}</Text>
                    </View>

                </TouchableOpacity>
            ))
        )
    }

}
const styles = StyleSheet.create({
    sombra: {
        flex: 1, backgroundColor: '#fff',
        flexDirection: 'row', marginHorizontal: 10,
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
        justifyContent: 'center', flexDirection: 'column',
        borderColor: '#ccc', borderWidth: 0.5, alignItems: 'center', margin: 5
    },

});

const mapStateToProps = state => (
    {
        msg: state.PostsReducer.msg,
        loading: state.PostsReducer.loading,
        listPosts: state.PostsReducer.listPosts,
        listUsers: state.PostsReducer.listUsers,
    }
)

export default connect(mapStateToProps, { buscarPosts, salvarPost })(Posts)


