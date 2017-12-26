//react
import React from 'react';
import { connect } from 'react-redux';

//react native
import { Button, StyleSheet, Text, TouchableHighlight, View } from 'react-native';

// components
import Head from '../Reusable/Head';


//router
// import {Router, Route, Schema, Animations, TabBar, Actions, Stack, Scene} from 'react-native-router-flux';



export class UsersIntro extends React.Component {
    testFunc() {
        console.log('something')
    }

    render() {
        return (
            <View>
                <Head />
                <View style={styles.container}>
                    <TouchableHighlight style={[styles.button, styles.signupButton]} onPress={() => { this.testFunc() }}>
                        <Text style={styles.text}>Signup</Text>
                    </TouchableHighlight>
                    <TouchableHighlight style={[styles.button, styles.loginButton]} onPress={() => { this.testFunc() }}>
                        <Text style={styles.text}>Login</Text>
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
    }
};

export default connect(mapStateToProps)(UsersIntro);