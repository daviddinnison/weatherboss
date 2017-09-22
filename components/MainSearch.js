//react
import React from 'react';
import { connect } from 'react-redux';

//react native
import { Alert, AppRegistry, Keyboard, StyleSheet, Text, TextInput, TouchableHighlight, View } from 'react-native';
import { Button, SearchBar } from 'react-native-elements';
import {Router, Route, Schema, Animations, TabBar, Actions, Stack, Scene} from 'react-native-router-flux';

//components
import SearchResults from './SearchResults';

import { getWeather } from '../actions';


export class MainSearch extends React.Component {
  //state constructor
  state = {
    userInputState: '',
    userInputCity: ''
  }
  
  
  makeSearch() {

    Keyboard.dismiss();
    this.props.dispatch(getWeather(this.state.userInputState, this.state.userInputCity));
  }

  render() {
    return (
      <View style={styles.container}>
        {/* <Header/> */}
        <View style={styles.heading}>
          <Text style={styles.weatherbossheading}>WeatherBoss</Text>
          <Text style={styles.weatherbosssubheading}>Be your own weatherboss</Text>
        </View>
        <View style={styles.inputcontainer}>
          <TextInput style={styles.input} 
          textAlign="center"
          underlineColorAndroid='rgba(0,0,0,0)'
          onChangeText={(city) => this.setState({userInputCity: city})} 
          placeholder="city"/>

          <TextInput style={styles.input} 
          textAlign="center" 
          underlineColorAndroid='rgba(0,0,0,0)'
          maxLength = {2}
          onChangeText={(usState) => this.setState({userInputState: usState})}  
          placeholder="state abbrev"/>
        </View>
        <Button backgroundColor='#12CC94' onPress={() => {this.makeSearch()}} title='search' />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: '#f2f2f2',
    // alignItems: 'center',
  },
  heading: {
    alignItems: 'center',
    backgroundColor: '#6088BB',
    marginBottom: 15,
    padding: 50,
  },
  weatherbossheading: {
    color: 'white',
    fontSize: 30,
  },
  weatherbosssubheading: {
    color: 'white',
    fontSize: 10,
  },
  inputcontainer: {
    alignItems: 'center',
  },
  input: {
    backgroundColor: 'white',
    borderColor: 'gray', 
    borderWidth: 1,
    color: 'gray',
    height: 30,
    marginBottom: 10,
    width: '95%',
  },

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