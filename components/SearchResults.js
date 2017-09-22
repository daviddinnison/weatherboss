import React from 'react';
import { connect } from 'react-redux';

import { AppRegistry, Image, StyleSheet, Text, View } from 'react-native';
import {Router, Route, Schema, Animations, TabBar, Actions} from 'react-native-router-flux';

export class SearchResults extends React.Component {
  //render
  //.map for every forecast day wrap in View:
  //date
  //high
  //low
  //conditions
  //icon url built in
  
  render() {
    const dailyForecast = this.props.forecastData.simpleforecast.forecastday.map((item) =>
    <View key={item.period} style={styles.dailyresult}>
      <Text style={styles.date}>{item.date.pretty}</Text>
      <Image style= {{ height:50, width: 50 }} source={{uri: `${item.icon_url}`}}/>
      <Text style={styles.conditions}>{item.conditions}</Text>
      <Text style={styles.high}>High: {item.high.fahrenheit}°F</Text>
      <Text style={styles.low}>Low: {item.low.fahrenheit}°F</Text>
    </View>
  );
    // console.log(this.props, 'PROPS FROM SEARCH RESULTS IN COMPONENT')
    console.log(this.props.forecastData.simpleforecast, 'props experiment')
    return (
      <View style={styles.container}>
        {/* <Header/> */}
        {dailyForecast}
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
  dailyresult: {
    alignItems: 'center',
    backgroundColor: 'white',
    borderColor: 'gray', 
    borderWidth: 3,
    marginBottom: 15,
    padding: 10,
  },
  date: {
    fontWeight: 'bold',
  },
  conditions: {
    fontStyle: 'italic',
  },
  high: {
    color: '#C5345F',
  },
  low: {
    color: '#1643A8',
  },
});

//map state to props: the search that was made on app
const mapStateToProps = function(state){
    return {
        forecastData: state.forecastData.forecast,
        currentUser: state.currentUser
    }
};

export default connect(mapStateToProps)(SearchResults);