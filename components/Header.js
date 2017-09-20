import React from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';

import { connect } from 'react-redux';


export default class Header extends React.Component {
  
  render() {
    return (
      <View style={styles.container}>
        <Text>WeatherBoss</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

