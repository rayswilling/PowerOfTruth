import React, { Component } from 'react';
import {
    Dimensions,
    AppRegistry,
    StyleSheet,
    View,
    Text,
    Button,
    StatusBar
} from 'react-native';
import SearchHeader from 'react-native-search-header';
import {Actions} from 'react-native-router-flux'

const DEVICE_WIDTH = Dimensions.get(`window`).width;



export default class SearchPage extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
          topic: '',
        };
    }
    render () {
        return (
            <View style = { styles.container }>
                <StatusBar barStyle = 'light-content' />
                <View style = { styles.status }/>
                <View style = { styles.header }>
                    <Button
                        title = 'Search'
                        color = '#f5fcff'
                        onPress = {() => this.searchHeader.show()}
                    />
                </View>
                <SearchHeader
                    ref = {(searchHeader) => {
                        this.searchHeader = searchHeader;
                    }}
                    placeholder = 'Search...'
                    placeholderColor = 'gray'
                    onClear = {() => {
                        console.log(`Clearing input!`);
                    }}
                    onGetAutocompletions = {async (text) => {
                        if (text) {
                            const response = await fetch(`http://suggestqueries.google.com/complete/search?client=firefox&q=${text}`, {
                                method: `get`
                            });
                            const data = await response.json();
                            return data[1];
                        } else {
                            return [];
                        }
                    }}
                    onEnteringSearch={topic => this.setState({ topic })}
                    onSearch={() =>
                      this.props.navigation.navigate('SearchResult', {
                      JSON_ListView_Clicked_Item: this.state.topic.nativeEvent.text,
                    })}

                />
                <Button
                    title='Trump'
                    onPress={() => this.props.navigation.navigate('Topic', {
                    JSON_ListView_Clicked_Item: 'Trump',
                  })}
                />

                <Button
                    title='Brexit'
                    onPress={() => this.props.navigation.navigate('Topic', {
                    JSON_ListView_Clicked_Item: 'Brexit',
                  })}
                />

                <Button
                    title='UK'
                    onPress={() => this.props.navigation.navigate('Topic', {
                    JSON_ListView_Clicked_Item: 'UK',
                  })}
                />

                <Button
                    title='EU'
                    onPress={() => this.props.navigation.navigate('Topic', {
                    JSON_ListView_Clicked_Item: 'EU',
                  })}
                />


            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#f5fcff'
    },
    status: {
        zIndex: 10,
        elevation: 2,
        width: DEVICE_WIDTH,
        height: 21,
        backgroundColor: '#0097a7'
    },
    header: {
        justifyContent: 'center',
        alignItems: 'center',
        width: DEVICE_WIDTH,
        height: 56,
        marginBottom: 6,
        backgroundColor: '#00bcd4'
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 130,
        height: 40,
        marginTop: 40,
        borderRadius: 2,
        backgroundColor: `#ff5722`
    }
});
