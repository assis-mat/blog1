import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';

import { View, Image, Text, ScrollView, StyleSheet, Platform, TouchableOpacity, Alert, ActivityIndicator } from "react-native";


import { buscarCommentsPosts } from '../Actions/CommentsPostsActions'

import { connect } from 'react-redux';



class CommentsPosts extends Component {

    constructor(props) {
        super(props);

        this.state = {

        };
    }

    componentWillMount() {
        this.props.buscarCommentsPosts(this.props.idPost)
    }


    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#fefefe' }}>

                {this.renderScreen()}


            </View>
        );
    }
    userPost(posts) {
        for (let user of this.props.listUsers) {
            if (user.id === posts.userId) {
                return user.email
            }
        }
    }

    buscarUserDetails(posts) {
        Actions.userDetails({ userId: posts.userId })
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
            <View style={{ flex: 1 }}  >
                <View
                    style={{
                        backgroundColor: '#fefefe', flexDirection: 'row', justifyContent: 'center', flexDirection: 'column',
                        shadowColor: "#000",
                        shadowOffset: {
                            width: 0,
                            height: 1,
                        },
                        shadowOpacity: 0.18,
                        shadowRadius: 1.00,

                        elevation: 1,
                        borderColor: '#ccc', borderWidth: 0.5, alignItems: 'center', margin: 5
                    }} >

                    <View style={{ margin: 5, flexDirection: 'row' }}  >
                        <Text style={{ fontSize: 16, fontWeight: "bold", flex: 1, flexWrap: 'wrap', textAlign: "left" }}>{ this.props.post.title}</Text>
                        <TouchableOpacity
                            style={{ height: 25 }}
                            onPress={() => this.buscarUserDetails( this.props.post)}>
                            <Text style={{ fontSize: 15, fontStyle: "italic", color: "#009BDA", textAlign: "right" }}>{this.userPost( this.props.post)}</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ width: "100%", flexDirection: 'row', padding: 10 }}>
                        <Text style={{ fontSize: 14, color: '#898A8F' }}>{ this.props.post.body}</Text>
                    </View>

                </View>

                <ScrollView style={{ flex: 1 }} >
                    {this.mostrarLista()}
                </ScrollView>
            </View>
        )

    }

    mostrarLista() {
        return (
            this.props.listComments.map((comments) => (

                <View
                    style={styles.sombra}
                >

                    <View style={{ margin: 5, flexDirection: 'row' }}  >
                        <Text style={{ fontSize: 16, fontWeight: "bold", flex: 1, flexWrap: 'wrap', textAlign: "left" }}>{comments.name}</Text>
                        <Text style={{ fontSize: 15, fontStyle: "italic", color: "#009BDA", textAlign: "right" }}>{comments.email}</Text>
                    </View>

                    <Text style={{ width: "100%", flexDirection: 'row', padding: 10, fontSize: 14, color: '#1f1f1f', textAlign: "justify" }}>{comments.body}</Text>


                </View>
            ))
        )
    }

}
const styles = StyleSheet.create({
    sombra: {
        flex: 1, backgroundColor: '#fff',
        flexDirection: 'row', marginHorizontal: 20,
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
        borderColor: '#ccc', borderWidth: 0.5, alignItems: 'center', margin: 1
    },

});

const mapStateToProps = state => (
    {
        msg: state.CommentsPostsReducer.msg,
        loading: state.CommentsPostsReducer.loading,
        listComments: state.CommentsPostsReducer.listComments,
        post: state.PostsReducer.post,
        listUsers: state.PostsReducer.listUsers,
    }
)

export default connect(mapStateToProps, { buscarCommentsPosts })(CommentsPosts)


