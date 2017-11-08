//react
import React from 'react';
import { connect } from 'react-redux';

//react native
import { Image, StyleSheet, Text,  View } from 'react-native';



export class CurrentConditions extends React.Component {  
  // {<Text>{current.display_location.full}</Text>}
  render() {
    const current = this.props.currentData;
    console.log(this.props.currentData, 'PROPS FROM CURRENT CONDITIONS')
    
    return (
      <View style={styles.currentconditions}>
        <Text>Current weather:</Text>
        <Text>{current.weather}</Text>
        <Text>Feels like: {current.feelslike_f}° F</Text>
        <Image style={{ height: 50, width: 50 }} source={{ uri: `${current.icon_url}` }} />
        <Text>Precipitation: {current.precip_1hr_in}</Text>
        <Text>Humidity: {current.relative_humidity}</Text> 
        <Text style={styles.lastupdated}>{current.observation_time}</Text>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  currentconditions: {
    alignItems: 'center',
    backgroundColor: 'white',
    marginBottom: 15,
    padding: 10,
  },
  lastupdated: {
    fontStyle: 'italic',
  }
});

const mapStateToProps = function(state){
    return {
      currentData: state.currentData
    }
};

export default connect(mapStateToProps)(CurrentConditions);