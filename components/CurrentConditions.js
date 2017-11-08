//react
import React from 'react';
import { connect } from 'react-redux';

//react native
import { Image, StyleSheet, Text, View } from 'react-native';



export class CurrentConditions extends React.Component {
  // {<Text>{current.display_location.full}</Text>}
  render() {
    const current = this.props.currentData;
    console.log(this.props.currentData, 'PROPS FROM CURRENT CONDITIONS')

    return (
      <View style={styles.currentconditions}>
        <Text style={styles.currenttext}>Current weather:</Text>
        <View style={{ flex: 1, flexDirection: 'row' }}>
          <View style={styles.currentflex}>
            <Text>{current.weather}</Text>
            <Image style={{ height: 75, width: 75 }} source={{ uri: `${current.icon_url}` }} />
          </View>
          <View style={styles.currentflex}>
            <Text>Feels like: {current.feelslike_f}° F</Text>
            <Text>Precipitation: {current.precip_1hr_in}</Text>
            <Text>Humidity: {current.relative_humidity}</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  currentconditions: {
    alignItems: 'center',
    alignSelf: 'stretch',
    backgroundColor: 'white',
    marginBottom: 15,
    padding: 10,
  },
  currenttext: {
    fontWeight: 'bold',
  },
  currentflex: {
    padding: 10,
  },
});

const mapStateToProps = function (state) {
  return {
    currentData: state.currentData
  }
};

export default connect(mapStateToProps)(CurrentConditions);