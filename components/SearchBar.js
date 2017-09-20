import React from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';

import { connect } from 'react-redux';


export class SearchBar extends React.Component {
  
  render() {
    return (
      <View style={styles.container}>
        <Text>some other text</Text>
        <Text>{this.props.currentUser}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

// AppRegistry.registerComponent('SearchBar', () => SearchBar)
const mapStateToProps = function(state){
    return {
        currentUser: state.currentUser
    }
};

export default connect(mapStateToProps)(SearchBar);