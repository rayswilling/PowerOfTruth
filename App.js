import React, { Component } from 'react';

import store from './app/redux/store';
import SearchPage from './app/modules/searchPage/scenes/searchPage.js';
import SearchResult from './app/modules/searchPage/scenes/searchResultPage.js';
import Topic from './app/modules/searchPage/scenes/topicPage.js';
import AboutPage from './app/modules/aboutPage/scenes/aboutPage.js';
import Article from './app/modules/headlinesPage/scenes/article.js'
import Router from './app/config/routes.js';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

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

const Search = createStackNavigator({
  Search: {screen: SearchPage},
  Searchresult: {screen: SearchResult},
  Topic: {screen: Topic},
  Article: {screen: Article},
})

const AppNav = new createAppContainer(
  createMaterialBottomTabNavigator(
    {
      Headlines: { screen: HeadlinesPage},
      Search: { screen: Search},
      About: { screen: AboutPage }
    }, {
      activeColor: '#f0edf6',
      inactiveColor: '#3e2465',
      barStyle: { backgroundColor: '#957E85', paddingBottom: 15 },
      labeled: true,
      // navbarHeight,
      // padding, 
      // windowHeight
    }));

export default AppNav
