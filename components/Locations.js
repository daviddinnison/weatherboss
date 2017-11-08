//react
import React from 'react';
import { connect } from 'react-redux';

//react native
import { Alert, Keyboard, StyleSheet, Text, TextInput, TouchableHighlight, View } from 'react-native';
import { Button, SearchBar } from 'react-native-elements';
import { Router, Route, Schema, Animations, TabBar, Actions, Stack, Scene } from 'react-native-router-flux';

//components
import SearchResults from './SearchResults';

//actions
import { getWeather, getCurrentConditions } from '../actions';


export class Locations extends React.Component {
  
  
    render() {
        const savedLocations = this.props.currentUser.locations.map((item) =>
        <View>
            <Text>{item.name}</Text>
        </View>
        
            );
    return (
      <View>
          <Text>Welcome, {this.props.currentUser.name}</Text>
          {savedLocations}
      </View>
    );
  }
}

const styles = StyleSheet.create({

});

const mapStateToProps = function(state){
    return {
      currentUser: state.currentUser,
    }
};

export default connect(mapStateToProps)(Locations);