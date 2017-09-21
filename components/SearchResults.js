//will route from App
//search will go to server endpoint, save to state, be passed to props here
//component did mount: make get request
//get returns simpleforecast/forecastday/


import React from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';

import { connect } from 'react-redux';

import {Router, Route, Schema, Animations, TabBar, Actions} from 'react-native-router-flux';


console.log(this.props, 'PROPS FROM SEARCH RESULTS')
export class SearchResults extends React.Component {
  //render
  //for each day wrap in View:
    //date
    //high
    //low
    //conditions
    //icon url built in

  render() {
    return (
      <View style={styles.container}>
        {/* <Header/> */}
        <Text>this is the search results component</Text>
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

//map state to props: the search that was made on app
const mapStateToProps = function(state){
    return {
        forecastData: state.forecastData
    }
};

export default connect(mapStateToProps)(SearchResults);