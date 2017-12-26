//react
import React from 'react';
import { connect } from 'react-redux';

//react native
import { Alert, Button, Keyboard, StyleSheet, Text, TextInput, TouchableHighlight, View } from 'react-native';

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
    }



    render() {
        return (
            <View>
                <Text>SignUp for user</Text>
                <View style={styles.inputcontainer}>
                    <TextInput
                        onChangeText={(input) => this.setState({ usernameInput: input })}
                        placeholder="username" />
                    <TextInput
                        onChangeText={(input) => this.setState({ passwordInput: input })}
                        secureTextEntry={true} 
                        placeholder="password" />
                </View>
                <Button backgroundColor='#12CC94' onPress={() => { this.submitData() }} title='submit' />
            </View>
        );
    }
}

const styles = StyleSheet.create({

});

const mapStateToProps = function (state) {
    return {
        currentUser: state.currentUser,
    }
};

export default connect(mapStateToProps)(SignUp);