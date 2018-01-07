//react
import React from 'react';
import { connect } from 'react-redux';

//react native
import { Alert, Keyboard, StyleSheet, Text, TextInput, TouchableHighlight, View } from 'react-native';
import { Button, SearchBar } from 'react-native-elements';
import { Router, Route, Schema, Animations, TabBar, Actions, Stack, Scene } from 'react-native-router-flux';


//actions
import { addLocation } from '../actions';


export class AddLocation extends React.Component {
  state = {
    userInput: '',
  }

  makeSearch() {
    Keyboard.dismiss();
    console.log('USER INPUT IN COMPONENT', this.state.userInput)
    this.props.dispatch(addLocation(this.state.userInput))
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput style={styles.input}
            textAlign="center"
            underlineColorAndroid='rgba(0,0,0,0)'
            onChangeText={(input) => this.setState({ userInput: input })}
            placeholder="Washington DC" />
        </View>
        <Button backgroundColor='#12CC94' onPress={() => { this.makeSearch() }} title='add location' />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {

  },

  inputContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  input: {
    backgroundColor: 'white',
    borderColor: 'gray',
    borderWidth: 1,
    color: 'gray',
    height: 30,
    marginBottom: 10,
    width: '95%',
  },
});

const mapStateToProps = function (state) {
  return {

  }
};

export default connect(mapStateToProps)(AddLocation);