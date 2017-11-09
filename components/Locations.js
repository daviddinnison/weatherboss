//react
import React from 'react';
import { connect } from 'react-redux';

//react native
import { Alert, Keyboard, StyleSheet, Text, TextInput, TouchableHighlight, View } from 'react-native';
import { Button, SearchBar } from 'react-native-elements';
import { Router, Route, Schema, Animations, TabBar, Actions, Stack, Scene } from 'react-native-router-flux';

//components
import SearchResults from './SearchResults';

//actions
import { getWeather, getCurrentConditions } from '../actions';


export class Locations extends React.Component {
    makeSearch(input) {
        // console.log(input)
        this.props.dispatch(getCurrentConditions(input));
        this.props.dispatch(getWeather(input));
    }

    makeNewLocation() {
        console.log('MAKE NEW LOCATION')
    }
    render() {
        const savedLocations = this.props.currentUser.locations.map((item) =>
            <TouchableHighlight key={item.id} onPress={() => this.makeSearch(item.name)} style={styles.locationresult}>
                <Text>{item.name}</Text>
            </TouchableHighlight>
        );


        return (
            <View>
                <Text>Hello, {this.props.currentUser.name}</Text>
                {savedLocations}
                <Button backgroundColor='#12CC94' onPress={() => { this.makeNewLocation() }} title='new location' />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    locationresult: {
        alignItems: 'center',
        backgroundColor: 'white',
        borderColor: 'gray',
        borderWidth: 3,
        marginBottom: 15,
        padding: 10,
      },
});

const mapStateToProps = function (state) {
    return {
        currentUser: state.currentUser,
    }
};

export default connect(mapStateToProps)(Locations);