//react
import React from 'react';
import { connect } from 'react-redux';

//react native
import { Button, StyleSheet, Text, View } from 'react-native';

//router
// import {Router, Route, Schema, Animations, TabBar, Actions, Stack, Scene} from 'react-native-router-flux';



export class UsersIntro extends React.Component {
    testFunc() {
        // console.log('something')
      }
    
    render() {
        return (
            <View style={styles.logincontainer}>
                <Text>WeatherBoss</Text>
                <Button title='login' onPress={() => {this.testFunc()}}/>
                <Button title='signup' onPress={() => {this.testFunc()}}/>
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

export default connect(mapStateToProps)(UsersIntro);