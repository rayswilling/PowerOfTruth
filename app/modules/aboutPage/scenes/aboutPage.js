import React, { Component } from 'react';
import { Text, View, Stylesheet, Image } from 'react-native';


class AboutPage extends Component {
    render () {
      return (
        <View style={styles.container}>
          <Text style={styles.welcome}>
          <Image style={image.logo}

          source={require('../../../../assets/images/PowerOfTruthLogo.png')} />

          {`

          About/info Page!

          Most of us only read news from one side of the political spectrum.  The mission of Power of Truth is to encourage readers to break out of the echo chamber and consider alternative ideas and views.

          The political bias and image were provided by the website https://mediabiasfactcheck.com.  It is a website that looks at political bias, how factual the information is and if links to credible and verifiable sources have been provided.`}
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

  const image = {
    logo: {
      width: 150,
      height: 150,
      justifyContent: 'center',
      alignItems: 'center'
    }
  }


  export default AboutPage
