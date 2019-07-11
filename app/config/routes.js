import React from 'react';
import { AppLoading } from 'expo';

import { Scene, Router, Stack } from 'react-native-router-flux';

import Home from '../modules/home/scenes/Home/index.js';
import Article from '../modules/home/scenes/Article/index.js';
import Source from '../modules/home/scenes/Source/';

import { color, navTitleStyle } from "../styles/theme";

export default class extends React.Component {
    render() {
        return (
            <Router>
                <Stack key="root"
                       navigationBarStyle={{backgroundColor: "#fff"}}
                       titleStyle={navTitleStyle}
                       backButtonTintColor={color.black}>
                    <Scene key="Home" component={Home} title="Headlines" initial/>
                    {/* <View><Text>The Power Of Truth</Text></View> */}
                    <Scene key="Article" component={Article} title=""/>
                    <Scene key="Source" component={Source} title=""/>
                </Stack>
            </Router>
        )
    }
}