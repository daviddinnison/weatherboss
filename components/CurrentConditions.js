//react
import React from 'react';
import { connect } from 'react-redux';

//react native
import { StyleSheet, Text,  View } from 'react-native';



export class CurrentConditions extends React.Component {  
  // {<Text>{current.display_location.full}</Text>}
  render() {
    const current = this.props.currentData.current_observation;
    // console.log(current.display_location, 'PROPS FROM CURRENT CONDITIONS')
    
    return (
      <View>
      
      <Text>test2</Text>
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