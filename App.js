import React, { Component } from 'react';

import store from './app/redux/store';
import SearchPage from './app/modules/searchPage/scenes/searchPage.js';
import SearchResult from './app/modules/searchPage/scenes/searchResultPage.js';
import Topic from './app/modules/searchPage/scenes/topicPage.js';
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

const Search = createStackNavigator({
  Search: {screen: SearchPage},
  Searchresult: {screen: SearchResult},
  Topic: {screen: Topic},
})

const AppNav = new createAppContainer(
  createBottomTabNavigator(
    {
      Headlines: { screen: HeadlinesPage },
      Search: { screen: Search},
      About: { screen: AboutPage},
    }
  )
)

export default AppNav
