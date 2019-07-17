import React, { Component } from 'react';
import { Text, View, Stylesheet } from 'react-native';

class TopicPage extends Component {
    render () {
      return (
        <View style={styles.container}>
          <Text style={styles.welcome}>Topic Page</Text>
          <Text>
          {this.props.navigation.state.params.JSON_ListView_Clicked_Item}
        </Text>
      </View>
      );
    }
  }


  const styles = {
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
  };

  export default TopicPage
