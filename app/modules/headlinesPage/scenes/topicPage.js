import React from 'react';
import {FlatList, RefreshControl, ActivityIndicator} from 'react-native';


import NewsItem from "../../headlinesPage/components/NewsItem/index"

import {actions as home} from "../../headlinesPage/index.js"
const { getHeadlinesByBiasGroup } = home;

class Topic extends React.Component {
    constructor() {
        super();
        this.state = {
            refreshing: false,
            isFetching: true,
            articles:[],
            hasError:false,
            errorMsg: ""
        }
    }

    componentDidMount() {
      console.error('0000000000000000');
        console.error(home)
        home.getHeadlinesByTopic(false, true)
    }

    getHeadlinesByTopic = (refreshing = true, isFetching=false) => {
        let article = this.props.article;

        this.setState({refreshing, isFetching});
        console.log('Hello!!!!!!!!!!!!!!')
        console.log(this.props.getHeadlinesByTopic)
        // this.props.getHeadlinesByTopic()
        //     .then(({articles}) => this.setState({articles}))
        //     .catch((error) => alert(error.message))
        //     .finally(() => this.setState({refreshing: false, isFetching:false}));
    }

    renderItem = ({item, index}) => {
        return <NewsItem article={item}/>
    }

    render() {
        const {articles, isFetching, hasError,errorMsg} = this.state;

        if (isFetching) return <ActivityIndicator/>
        else {
            return (
                <FlatList
                    style={{backgroundColor:'#eaeaea'}}
                    contentContainerStyle={{paddingVertical:5,}}
                    ref='listRef'
                    data={articles}
                    extraData={this.state}
                    renderItem={this.renderItem}
                    initialNumToRender={5}
                    keyExtractor={(item, index) => index.toString()+"_source"}
                    refreshControl={
                        <RefreshControl
                            refreshing={this.state.refreshing}
                            onRefresh={this.getHeadlinesByTopic}
                        />
                    }/>
            );
        }
    }
}

export default Topic;
