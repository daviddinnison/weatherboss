//react
import React from 'react';
import { connect } from 'react-redux';

//react native
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import { Actions } from 'react-native-router-flux';


export class LogIn extends React.Component {
    testFunc() {
        console.log('something')
    }

    render() {
        return (
            <View>
                <View style={styles.container}>
                        <Text style={styles.text}>Login</Text>
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
        color: 'red',
    }
});

const mapStateToProps = function (state) {
    return {
        currentUser: state.currentUser,
    }
};

export default connect(mapStateToProps)(LogIn);