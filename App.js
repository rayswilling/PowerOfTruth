// * Description: App Entry Point

import React, { Component } from 'react';

// import Router from './app/config/routes'
import store from './app/redux/store';
import WelcomePage from './app/modules/welcomePage/scenes/welcomePage.js';
import AboutPage from './app/modules/aboutPage/scenes/aboutPage.js';
import Router from './app/config/routes.js';

import {
  StyleSheet,
} from 'react-native';

// import { Provider } from 'react-redux'
import CustomComponents from 'react-native-deprecated-custom-components';

import { createAppContainer, createBottomTabNavigator, createStackNavigator } from 'react-navigation';

// export default class App extends Component {
//     render() {
//         return (
//           <CustomComponents.Navigator initialRoute = {{ id: 'WelcomePage'}}
//           renderScene = {this.navigatorRenderScene} />
//           );
//         }

//         navigatorRenderScene(route, navigator) {
//           switch (route.id) {
//             case 'HeadlinesPage': 
//               return ( <HeadlinesPage navigator = {navigator} /> );
//             case 'WelcomePage': 
//               return ( <WelcomePage navigator = {navigator} /> );
//           }
//         }
//   }
        
//   class HeadlinesPage extends Component {
//     render () {
//       return (
//         <Provider store={store}>
//           <Router />
//       </Provider>
//       );
//     }
// }



export default createAppContainer(
  createBottomTabNavigator(
    {
      Home: { screen: WelcomePage},
      Headlines: { screen: Router },
      About: { screen: AboutPage},
    }
  )
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

