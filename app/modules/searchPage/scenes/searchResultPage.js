import React from 'react';
import {FlatList, RefreshControl, ActivityIndicator} from 'react-native';


import NewsItem from "../../headlinesPage/components/NewsItem/index"

import axios from 'axios';

class SearchResult extends React.Component {
    constructor() {
        super();
        this.state = {
            refreshing: false,
            isFetching: true,
            articles:[],
            hasError:false,
            errorMsg: "No articles available"
        }
    }

    componentDidMount() {
      axios.get(`https://power-of-truth-server.herokuapp.com/search?q=${this.props.navigation.state.params.JSON_ListView_Clicked_Item}`)
      .then(response => {
        this.state.articles = response.data.articles
        this.state.isFetching = false
        this.state.refreshing = true
      })
      .catch(error => {
        alert(error.message)
      })
      .finally(() => this.setState({refreshing: false, isFetching:false}));

    }

    renderItem = ({item, index}) => {
        return <NewsItem article={item}/>
    }

    render() {
        const {articles, isFetching, hasError, errorMsg} = this.state;

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
                            onRefresh={this.getHeadlinesBySearch}
                        />
                    }/>
            );
        }
    }
}

export default SearchResult;
