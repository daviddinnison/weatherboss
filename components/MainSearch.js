//react
import React from 'react';
import { connect } from 'react-redux';

//react native
import { Alert, AppRegistry, StyleSheet, Text, TextInput, TouchableHighlight, View } from 'react-native';
import {Router, Route, Schema, Animations, TabBar, Actions, Stack, Scene} from 'react-native-router-flux';
import { Button, SearchBar } from 'react-native-elements';

//components
import Header from './Header';
import SearchResults from './SearchResults';

import { getWeather } from '../actions';


export class MainSearch extends React.Component {
  makeSearch() {
    //grab usa state and usa city values

    const userInputState = 'VA';
    const userInputCity= 'Springfield'
    this.props.dispatch(getWeather(userInputState, userInputCity));
  }

  render() {
    return (
      <View style={styles.container}>
        {/* <Header/> */}
        {/* <Text>{this.props.currentUser}</Text> */}
        <Text>USA City</Text>
        <TextInput style={styles.input} textAlign="center" onSubmitEditing={this.makeSearch} value ="city"/>

        <Text>USA State</Text>
        <TextInput style={styles.input} textAlign="center" onSubmitEditing={this.makeSearch} value ="state"/>

        <Button onPress={() => {this.makeSearch()}} title='search' />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: '#f2f2f2',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  input: {
    backgroundColor: 'black',
    color: 'white',
  }
  // searchbar: {
  //   width: 100%,
  // },
});

// AppRegistry.registerComponent('MainSearch', () => MainSearch)
const mapStateToProps = function(state){
    return {
        currentUser: state.currentUser,
        forecastData: state.forecastData,
        navigationState: state.tabBar
    }
};

export default connect(mapStateToProps)(MainSearch);