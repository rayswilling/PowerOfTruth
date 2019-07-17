import React from 'react';
import { createBottomTabNavigator, 
         createStackNavigator,
          } from 'react-navigation';
         
import WelcomePage from './app/modules/welcomePage/scenes/welcomePage.js';
import AboutPage from './app/modules/aboutPage/scenes/aboutPage.js';

import WelcomePage from './app/modules/welcomePage/scenes/welcomePage.js';
import AboutPage from './app/modules/aboutPage/scenes/aboutPage.js';


import { createAppContainer, createBottomTabNavigator, createStackNavigator } from 'react-navigation';

export default class NavigatorFeature extends React.Component {
   render() {
      return(<AppTabNavigator />);
   }
}

// const HomeNavigator = createStackNavigator({
//     Home: CatalogueScreen,
//     Category: CategoryScreen,
//      Product: ProductScreen
// }, {
//     //configuration options...
// });


// const SearchNavigator = createStackNavigator({
//       SearchHome: SearchScreen,
//    SearchResults: SearchResultsScreen
// }, {
//     //configuration options...
// });

const AppTabNavigator = new createAppContainer(
  createBottomTabNavigator({
      Headlines: { screen: HeadlinesPage },
      Home: { screen: WelcomePage},
      About: { screen: AboutPage},
   },{
   
     navigationOptions: ({ navigation }) => ({
        //define the icon for each tab here...
       tabBarIcon: ({ focused, tintColor }) => {
      const { routeName } = navigation.state;
      
      let icon;
      switch(routeName) {
         case 'WelcomePage':
            icon = `:)`;
          break;
          case 'Headlines':
            icon = `:)`;
          break;
          case 'AboutPage':
            icon = `:)`;
          break;
        }

        return <Ionicons 
                 name={icon} 
                 size={25} 
                 color={tintColor} />;
       },
     }),
     tabBarOptions: {
       initialRouteName: 'Catalogue',
       activeTintColor: '#fff',
       inactiveTintColor: '#ddd',
       style: {
         backgroundColor: '#4d535e',
      }
   }
}));

export default NavigatorFeature