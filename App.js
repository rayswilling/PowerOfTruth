// * Description: App Entry Point

import React, { Component } from 'react';

import Router from './app/config/routes'
import store from './app/redux/store';
import Home from './app/modules/home/scenes/Home/index.js'

import { Provider } from 'react-redux'

// import {
//   createAppContainer,
//   createSwitchNavi
// }

import { createAppContainer, createStackNavigator } from 'react-navigation';

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router />
            </Provider>
        );
    }
}



const AppNavigator = createStackNavigator({
  App: {
    screen: App
  }
});
