//react
import React from 'react';
import { connect } from 'react-redux';

//react native
import { StyleSheet, Text,  View } from 'react-native';



export class CurrentConditions extends React.Component {  
  // {<Text>{current.display_location.full}</Text>}
  render() {
    const current = this.props.currentData;
    console.log(this.props.currentData, 'PROPS FROM CURRENT CONDITIONS')
    
    return (
      <View>
        <Text>Current weather:</Text>
        <Text>{current.weather}</Text>
        <Text>Precipitation: {current.precip_1hr_in}</Text>
        <Text>Feels like: {current.feelslike_f}</Text>
        <Text>Humidity: {current.relative_humidity}</Text> 
        <Text>{current.observation_time}</Text>
    </View>
    );
  }
}

const styles = StyleSheet.create({
 
});

const mapStateToProps = function(state){
    return {
      currentData: state.currentData
    }
};

export default connect(mapStateToProps)(CurrentConditions);