//react
import React from 'react';
import { connect } from 'react-redux';


//react native
import { Alert, Keyboard, StyleSheet, Text, TextInput, TouchableHighlight, View } from 'react-native';

export class SignUpSuccess extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>You made a user</Text>
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

    text: {
        fontSize: 16,
    }
});

const mapStateToProps = function (state) {
    return {
        currentUser: state.currentUser,
    }
};

export default connect(mapStateToProps)(SignUpSuccess);