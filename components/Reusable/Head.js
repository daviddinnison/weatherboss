//react
import React from 'react';

//react native
import { StyleSheet, Text, View } from 'react-native';

export default class Head extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.mainText}>Weatherboss</Text>
                <Text style={styles.secondaryText}>Be the boss of your own weather</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        paddingLeft: 10,
    },
    mainText: {
        fontWeight: 'bold',
        fontSize: 30,
    },
    secondaryText: {
        fontSize: 10,
    },
});

