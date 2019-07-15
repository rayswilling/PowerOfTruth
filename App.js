import React, { Component } from 'react';

import store from './app/redux/store';
import WelcomePage from './app/modules/welcomePage/scenes/welcomePage.js';
import AboutPage from './app/modules/aboutPage/scenes/aboutPage.js';
import Router from './app/config/routes.js';

import {
  StyleSheet,
} from 'react-native';

import { Provider } from 'react-redux'
import CustomComponents from 'react-native-deprecated-custom-components';

import { createAppContainer, createBottomTabNavigator, createStackNavigator } from 'react-navigation';


  class HeadlinesPage extends Component {
    render () {
      return (
        <Provider store={store}>
          <Router />
      </Provider>
      );
    }
}



const AppNav = new createAppContainer(
  createBottomTabNavigator(
    {
      Home: { screen: WelcomePage},
      Headlines: { screen: HeadlinesPage },
      About: { screen: AboutPage},
    }
  )
)

export default AppNav
