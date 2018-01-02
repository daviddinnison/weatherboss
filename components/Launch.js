//react
import React from 'react';
import { connect } from 'react-redux';

//react native
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import { Actions } from 'react-native-router-flux';

// components
import Head from './Reusable/Head';

export class Launch extends React.Component {
    render() {
        if(this.props.isLoggedIn === true) {
            Actions.dashboard();
        }
        return (
            <View>
                <Head />
                <View style={styles.container}>
                    <TouchableHighlight style={[styles.button, styles.signupButton]} onPress={() => { Actions.signup() }}>
                        <Text style={styles.text}>Signup</Text>
                    </TouchableHighlight>
                    <TouchableHighlight style={[styles.button, styles.loginButton]} onPress={() => {  Actions.loginpage() }}>
                        <Text style={styles.text}>Login</Text>
                    </TouchableHighlight>
                    <TouchableHighlight style={[styles.button, styles.searchButton]} onPress={() => {  Actions.mainsearch() }}>
                        <Text style={styles.text}>Search</Text>
                    </TouchableHighlight>
                </View>
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
    button: {
        alignItems: 'center',
        height: 40,
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 10,
        padding: 20,
        width: '95%',
    },
    loginButton: {
        backgroundColor: 'blue',
    },
    searchButton: {
        backgroundColor: 'green',
    },
    signupButton: {
        backgroundColor: 'red',
    },
    text: {
        fontSize: 16,
        color: 'white',
    }
});

const mapStateToProps = function (state) {
    return {
        currentUser: state.currentUser,
        isLoggedIn: state.isLoggedIn,
    }
};

export default connect(mapStateToProps)(Launch);