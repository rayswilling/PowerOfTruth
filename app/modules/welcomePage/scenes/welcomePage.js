import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

class WelcomePage extends Component {
    render () {
      return (
        <View style={styles.container}>
          <Text style={styles.welcome}>Welcome to the Power of Truth!</Text>
          <Text onPress={ () => this.props.navigator.push({ id: 'HeadlinesPage' }) }>View today's headlines</Text>
      </View>
      );
    }
  }

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
  
  export default WelcomePage