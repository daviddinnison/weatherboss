import React from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';

import { connect } from 'react-redux';

import Header from './Header';


export class MainSearch extends React.Component {
  
  render() {
    return (
      <View style={styles.container}>
        <Header/>
        <Text>some text</Text>
        <Text>{this.props.currentUser}</Text>
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

// AppRegistry.registerComponent('MainSearch', () => MainSearch)
const mapStateToProps = function(state){
    return {
        currentUser: state.currentUser
    }
};

export default connect(mapStateToProps)(MainSearch);