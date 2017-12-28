//react
import React from 'react';
import { connect } from 'react-redux';

//react native
import { Alert, Keyboard, StyleSheet, Text, TextInput, TouchableHighlight, View } from 'react-native';

//components
import SignUpForm from './SignUpForm';


export class SignUpPage extends React.Component {
    // if (props.loggedIn) {
    //     return <Redirect to="/dashboard" />;
    // }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.heading}>Become a WeatherBoss</Text>
                <SignUpForm />
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
        marginBottom: 10,
    },
});

const mapStateToProps = function (state) {
    return {
        // loggedIn: state.auth.currentUser !== null
    }
};

export default connect(mapStateToProps)(SignUpPage);