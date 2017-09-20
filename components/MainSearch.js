//react
import React from 'react';
import { connect } from 'react-redux';

//react native
import { Alert, AppRegistry, StyleSheet, Text, View } from 'react-native';
import {Router, Route, Schema, Animations, TabBar, Actions, Stack, Scene} from 'react-native-router-flux';
import { Button } from 'react-native-elements';

//components
import Header from './Header';
import SearchResults from './SearchResults';

import { getWeather } from '../actions';


export class MainSearch extends React.Component {
  makeSearch() {
    Alert.alert('you clicked it')
    this.props.dispatch(getWeather());
  }

  render() {
    return (
      <View style={styles.container}>
        {/* <Header/> */}
        <Text>text</Text>
        <Text>{this.props.currentUser}</Text>
        <Button
          onPress={this.makeSearch()}
          title='search' />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

// AppRegistry.registerComponent('MainSearch', () => MainSearch)
const mapStateToProps = function(state){
    return {
        currentUser: state.currentUser,
        navigationState: state.tabBar
    }
};

export default connect(mapStateToProps)(MainSearch);