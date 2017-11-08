//react
import React from 'react';
import { connect } from 'react-redux';

//react native
import { StyleSheet, Text, View } from 'react-native';

//router
// import {Router, Route, Schema, Animations, TabBar, Actions, Stack, Scene} from 'react-native-router-flux';



export class LogIn extends React.Component {
    render() {
        return (
            <View style={styles.logincontainer}>
                <Text>hello</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    logincontainer: {
        alignItems: 'center',
    },
});

const mapStateToProps = function (state) {
    return {
        currentUser: state.currentUser,
    }
};

export default connect(mapStateToProps)(LogIn);