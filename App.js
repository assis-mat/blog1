import React, { Component } from 'react';
import { View } from 'react-native';
import Routes from './Routes';

import {StatusBar} from 'react-native'; 
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reducers from './src/Reducers'
import ReduxThunk from 'redux-thunk'


class App extends Component {
  

    render(){
      return (
        <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
          <StatusBar  barStyle="light-content"
                backgroundColor='#00823F'/>
          <Routes/>
        </Provider>
      );
    };
}

export default App;