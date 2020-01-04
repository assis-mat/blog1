import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';

import Main from './src/Components/Main';
import Posts from './src/Components/Posts';
import CommentsPosts from './src/Components/CommentsPosts';
import UserDetails from './src/Components/UserDetails';

import { Actions } from 'react-native-router-flux';


import { Platform } from "react-native";

class Routes extends Component {
    render() {
        return (
            <Router>

                <Scene key="root" >

                    {/* <Scene key='main' component={Main} title='Principal'  navBarButtonColor='#FFF'
                        titleStyle={{ color: '#FFF', flex: 1, textAlign: 'center', justifyContent: 'center' }}
                        navigationBarStyle={{
                            backgroundColor: '#00823F', hight: 70, elevation: 0, shadowOpacity: 0, borderBottomWidth: 0
                        }} /> */}
                    <Scene key='posts' component={Posts} title='Posts' initial
                        navBarButtonColor='#FFF'
                        titleStyle={{ color: '#FFF', flex: 1, textAlign: 'center', justifyContent: 'center' }}
                        navigationBarStyle={{
                            backgroundColor: '#00823F', hight: 70, elevation: 0, shadowOpacity: 0, borderBottomWidth: 0
                        }} />

                    <Scene key='commentsPosts' component={CommentsPosts} title='Comments Posts'
                        navBarButtonColor='#FFF'
                        titleStyle={{ color: '#FFF', flex: 1, textAlign: 'center', justifyContent: 'center' }}
                        navigationBarStyle={{
                            backgroundColor: '#00823F', hight: 70, elevation: 0, shadowOpacity: 0, borderBottomWidth: 0
                        }} />

                    <Scene key='userDetails' component={UserDetails} title='User Details'
                        navBarButtonColor='#FFF'
                        titleStyle={{ color: '#FFF', flex: 1, textAlign: 'center', justifyContent: 'center' }}
                        navigationBarStyle={{
                            backgroundColor: '#00823F', hight: 70, elevation: 0, shadowOpacity: 0, borderBottomWidth: 0
                        }} />
                </Scene>

                
            </Router>
        );
    };
}

export default Routes