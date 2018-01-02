//react
import React from 'react';
import { connect } from 'react-redux';

//react native
import { StyleSheet, Text,  View } from 'react-native';

//components
import LogInForm from './Forms/LogInForm';

export class LogInPage extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.heading}>Login</Text>
                <LogInForm />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        // flex: 1,
        // marginTop: 20,
    },
    heading: {
        fontSize: 20,
        marginBottom: 10,
    },
});

const mapStateToProps = function (state) {
    return {
        currentUser: state.currentUser,
    }
};

export default connect(mapStateToProps)(LogInPage);