//react
import React from 'react';
import { connect } from 'react-redux';

//react native
import { StyleSheet, Text,  View } from 'react-native';



export class CurrentConditions extends React.Component {  
  render() {
    // console.log(this.props.forecastData.simpleforecast, 'props experiment')
    return (
    <View>
        <Text>test</Text>
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