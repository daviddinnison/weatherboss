//react
import React from 'react';

//react native
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import {Router, Route, Schema, Animations, TabBar, Actions, Stack, Scene} from 'react-native-router-flux';

//components


export default class Error extends React.Component {
  render () {  
    return (
        <View>
            <Text>Something went wrong!</Text>
        </View>
      );
  }
}