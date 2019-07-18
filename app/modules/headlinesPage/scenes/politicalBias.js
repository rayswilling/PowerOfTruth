import React from 'react';
import {FlatList, RefreshControl, ActivityIndicator} from 'react-native';

import {connect} from 'react-redux';

import NewsItem from "../components/NewsItem"

import {actions as home} from "../index"
const { getHeadlinesByBiasGroup } = home;

class Bias extends React.Component {
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
        this.getHeadlinesByBiasGroup(false, true)
    }

    getHeadlinesByBiasGroup = (refreshing = true, isFetching=false) => {
        let article = this.props.article;

        this.setState({refreshing, isFetching});
        this.props.getHeadlinesByBiasGroup(article.politicalBias)
            .then(({articles}) => this.setState({articles}))
            .catch((error) => alert(error.message))
            .finally(() => this.setState({refreshing: false, isFetching:false}));
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
                            onRefresh={this.getHeadlinesByBiasGroup}
                        />
                    }/>
            );
        }
    }
}

export default connect(null, { getHeadlinesByBiasGroup })(Bias);
