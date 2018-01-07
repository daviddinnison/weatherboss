//react
import React from 'react';
import { connect } from 'react-redux';

//react native
import { Alert, Keyboard, StyleSheet, Text, TextInput, TouchableHighlight, View } from 'react-native';

//actions
import { logoutUser, getCurrentConditions, getWeather } from '../actions';



export class Dashboard extends React.Component {
    state = {
        userSelection: '',
      }
    
    makeSearch(selection) {
        console.log('SELECTION....', selection)
        this.props.dispatch(getCurrentConditions(selection));
        this.props.dispatch(getWeather(selection));
    }

    addLocation() {
        console.log('this will be the addLocation action')
    }
    logout() {
        this.props.dispatch(logoutUser())
    }


    renderResults() {
        if (this.props.currentUser.locations.length > 0) {
            const locationData = this.props.currentUser.locations.map((item, index) =>
                <View key={item.id} style={styles.locationItem}>
                    <TouchableHighlight onPress={() => {  this.makeSearch(item.name) }}>
                        <Text>{item.name}</Text>
                    </TouchableHighlight>
                </View>
            );
            return (
                <View>
                    {locationData}
                </View>
            );
        }
        else {
            return (
                <View>
                    <Text>No locations saved.</Text>

                </View>
            )
        }
    }


    render() {
        console.log('this.props is.....', this.props)
        return (
            <View style={styles.container}>
                <Text style={styles.heading}>Welcome, {this.props.currentUser.username}</Text>
                <View>
                    {this.renderResults()}
                </View>
                <TouchableHighlight style={styles.button} onPress={() => { this.addLocation() }}>
                    <Text style={styles.buttonText}>Add location</Text>
                </TouchableHighlight>
                <TouchableHighlight style={styles.button} onPress={() => { this.logout() }}>
                    <Text style={styles.buttonText}>Logout</Text>
                </TouchableHighlight>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flex: 1,
        marginTop: 20,
    },
    heading: {
        fontSize: 20,
        marginBottom: 20,
    },
    locationContainer: {
        flex: 1,
    },
    locationItem: {
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 10,
        padding: 20,
        width: '90%',
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#12CC94',
        height: 40,
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 10,
        padding: 20,
        width: '95%',
    },
    buttonText: {
        fontSize: 16,
        color: 'white',
    },
});

const mapStateToProps = function (state) {
    return {
        currentUser: state.currentUser,
    }
};

export default connect(mapStateToProps)(Dashboard);