//react
import React from 'react';
import { connect } from 'react-redux';

//react native
import { StyleSheet, Text,  View } from 'react-native';



export class CurrentConditions extends React.Component {  
  // <Text>{this.props.currentData.current_observation.display_location.full}</Text>
  render() {
    console.log(this.props.currentData, 'PROPS FROM CURRENT CONDITIONS')
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