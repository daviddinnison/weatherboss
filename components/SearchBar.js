import React from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';


export default class SearchBar extends React.Component {
  
  render() {
    return (
      <View style={styles.container}>
        <Text>some text</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

AppRegistry.registerComponent('SearchBar', () => SearchBar)
