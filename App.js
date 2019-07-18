import React, { Component } from 'react';

import store from './app/redux/store';
import SearchPage from './app/modules/searchPage/scenes/searchPage.js';
import AboutPage from './app/modules/aboutPage/scenes/aboutPage.js';
import Router from './app/config/routes.js';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';


import {
  StyleSheet, Platform, Dimensions
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
  createMaterialBottomTabNavigator(
    {
      Headlines: { screen: HeadlinesPage},

      Search: { screen: SearchPage},
      About: { screen: AboutPage }
    }, {
      activeColor: '#f0edf6',
      inactiveColor: '#3e2465',
      barStyle: { backgroundColor: '#957E85', paddingBottom: 15 },
      labeled: true,
      navbarHeight,
      padding, 
      windowHeight
    }));

export default AppNav

const padding = 8;
const navbarHeight = (Platform.OS === 'ios') ? 64 : 54;
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

// const tabColor = (Platform.OS === "ios") ? "#fff" : "#fff";
// const selectedTabColor = (Platform.OS === "ios") ? color.main : color.main;

// const tabIconStyle = { size: 21, color: tabColor, selected: selectedTabColor }
// const navTitleStyle = { fontSize: fontSize.regular + 6 , fontFamily: fontFamily.semibold, color: color.black, letterSpacing: 0.4 }
// const navigationBarStyle = { backgroundColor: color.black, borderBottomWidth:0 }
