import React from 'react';
import { AppLoading } from 'expo';

import { Scene, Router, Stack } from 'react-native-router-flux';

import Home from '../modules/headlinesPage/scenes/headlines.js';
import Article from '../modules/headlinesPage/scenes/article.js';
import Source from '../modules/headlinesPage/scenes/newsSource.js';

import { color, navTitleStyle } from "../styles/theme";

export default class extends React.Component {
    render() {
        return (
            <Router>
                <Stack key="root"
                       navigationBarStyle={{backgroundColor: "#eaeaea"}}
                       titleStyle={navTitleStyle}
                       backButtonTintColor={color.black}>
                    <Scene key="Home" component={Home} title="Headlines" initial/>
                    <Scene key="Article" component={Article} title="Article"/>
                    <Scene key="Source" component={Source} title="Source"/>
                </Stack>
            </Router>
        )
    }
}


// const Router = StackNavigator({
//     Home: { screen: Home },
//     Article: { screen: Article }, 
//     Source: { screen: Source }
//     }, 
//     {initialRouteName: sd
//     });