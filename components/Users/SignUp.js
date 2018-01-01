//react
import React from 'react';
import { connect } from 'react-redux';


//react native
import { Alert, Keyboard, StyleSheet, Text, TextInput, TouchableHighlight, View } from 'react-native';



//actions
import { createUser } from '../../actions';


export class SignUp extends React.Component {
    state = {
        usernameInput: '',
        passwordInput: ''
    }

    submitData() {
        Keyboard.dismiss();
        this.props.dispatch(createUser(this.state.usernameInput, this.state.passwordInput))
        // return this.props
        //     .dispatch(registerUser(this.state.usernameInput, this.state.passwordInput))
        //     .then(() => this.props.dispatch(login(username, password)));
    }



    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.heading}>Become a WeatherBoss</Text>
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
                <TouchableHighlight style={styles.button} onPress={() => { this.submitData() }}>
                    <Text style={styles.buttonText}>Submit</Text>
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
    inputContainer: {
        width: '90%',
    },
    heading: {
        fontSize: 20,
        marginBottom: 10,
    },
    textInput: {
        backgroundColor: 'white',
        fontSize: 17,
        marginBottom: 15,
        textAlign: 'center',
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
    }
});

const mapStateToProps = function (state) {
    return {
        currentUser: state.currentUser,
    }
};

export default connect(mapStateToProps)(SignUp);