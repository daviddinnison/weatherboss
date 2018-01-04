//react
import React from 'react';
import { connect } from 'react-redux';

//redux
import {Field, reduxForm, focus} from 'redux-form';

//react native
import { Keyboard, StyleSheet, Text, TextInput, TouchableHighlight, View } from 'react-native';
import { Actions } from 'react-native-router-flux';

//actions
import { loginUser } from '../../../actions';

export class LogInForm extends React.Component {
    state = {
        usernameInput: '',
        passwordInput: ''
    }

    submitLoginData() {
        Keyboard.dismiss();
        this.props.dispatch(loginUser(this.state.usernameInput, this.state.passwordInput))
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.inputContainer}>
                
                    <TextInput style={styles.textInput}
                        onChangeText={(input) => this.setState({ usernameInput: input })}
                        underlineColorAndroid={'transparent'}
                        placeholderTextColor={'grey'}
                        placeholder='username' />
                    <TextInput style={styles.textInput}
                        onChangeText={(input) => this.setState({ passwordInput: input })}
                        underlineColorAndroid={'transparent'}
                        secureTextEntry={true}
                        placeholderTextColor={'grey'}
                        placeholder='password' />
                </View>
                <TouchableHighlight style={styles.button} onPress={() => { this.submitLoginData() }}>
                    <Text style={styles.buttonText}>Log in</Text>
                </TouchableHighlight>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginTop: 20,
        width: '100%',
    },
    inputContainer: {
        width: '100%',
    },
    textInput: {
        backgroundColor: 'white',
        width: '100%',
        fontSize: 17,
        marginBottom: 15,
        textAlign: 'center',
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#12CC94',
        height: 40,
        justifyContent: 'center',
        marginBottom: 10,
        padding: 20,
        width: '95%',
    },
    buttonText: {
        fontSize: 16,
        color: 'white',
    }
});

const mapStateToProps = function (state) {
    return {
        currentUser: state.currentUser,
    }
};

export default connect(mapStateToProps)(LogInForm);