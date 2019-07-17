import React from 'react';
import { AppLoading } from 'expo';

import { Scene, Router, Stack } from 'react-native-router-flux';

import Home from '../modules/headlinesPage/scenes/headlines.js';
import Article from '../modules/headlinesPage/scenes/article.js';
import Source from '../modules/headlinesPage/scenes/newsSource.js';
import Bias from '../modules/headlinesPage/scenes/politicalBias.js';

import { color, navTitleStyle } from "../styles/theme";
// import { createStackNavigator } from 'react-navigation'

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
                    <Scene key="Bias" component={Bias} title="Bias"/>
                </Stack>
            </Router>
        )
    }
}

// const Router = createStackNavigator({
//     Home: { screen: Home },
//     Article: { screen: Article },
//     Source: { screen: Source },
// },
// {
//     initialRouteName: Home,
// });

// export default Router

//   class HeadlinesPage extends Component {
//     render () {
//       return (
//         <Provider store={store}>
//           <Router />
//       </Provider>
//       );
//     }
// }


// const Router = StackNavigator({
//     Home: { screen: Home },
//     Article: { screen: Article },
//     Source: { screen: Source }
//     },
//     {initialRouteName: sd
//     });
