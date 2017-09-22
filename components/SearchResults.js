//react
import React from 'react';
import { connect } from 'react-redux';

//react native
import { Alert, Button, Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import {Router, Route, Schema, Animations, TabBar, Actions} from 'react-native-router-flux';
import Collapsible from 'react-native-collapsible';

export class SearchResults extends React.Component {
  state = {
    collapsed: true,
    activeSection: false
  }
  

  expandResult() {
    this.setState({ collapsed: !this.state.collapsed });
  }

  _toggleExpanded = () => {
    this.setState({ collapsed: !this.state.collapsed });
  }

  _setSection(section) {
    this.setState({ activeSection: section });
  }

  //prevents Android header overlapping top of screen
  static navigationOptions = {
    header: null
  };
  
  render() {
    console.log(this.props, 'PROPS')
    const dailyForecast = this.props.forecastData.simpleforecast.forecastday.map((item) =>
    <View key={item.period} style={styles.dailyresult}>
      <Text style={styles.date}>{item.date.pretty}</Text>
      <Image style= {{ height:50, width: 50 }} source={{uri: `${item.icon_url}`}}/>
      <Text style={styles.conditions}>{item.conditions}</Text>
      <Text style={styles.high}>High: {item.high.fahrenheit}°F</Text>
      <Text style={styles.low}>Low: {item.low.fahrenheit}°F</Text>
      <Button styles={styles.more} title='more' onPress={() => this.expandResult()}/>
      <Collapsible collapsed={this.state.collapsed} align="center">
        <View>
          <Text>Precipitation:{item.qpf_allday.mm}mm</Text>
          <Text>Avg humidity:{item.avehumidity}%</Text>
          <Text>Avg wind:{item.avewind.mph} mph</Text>
        </View>
      </Collapsible>
    </View>
  );
    // console.log(this.props.forecastData.simpleforecast, 'props experiment')
    return (
    <ScrollView> 
    <View style={styles.searchheading}>
      <Text style={styles.yourlocalforecast}>{this.props.forecastCity}Local forecast</Text>
    </View>
     <View style={styles.container}>
        {dailyForecast}
      </View>
    </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
    flex: 1,
    justifyContent: 'center',
    paddingTop: 50,
  },
  searchheading: {
    alignItems: 'center',
    backgroundColor: '#6088BB',
    marginBottom: 15,
    padding: 30,
  },
  yourlocalforecast: {
    color: 'white',
    fontSize: 20,
  },
  dailyresult: {
    alignItems: 'center',
    backgroundColor: 'white',
    borderColor: 'gray', 
    borderWidth: 3,
    marginBottom: 15,
    padding: 10,
  },
  more: {
    backgroundColor: '#9EF4E6',
  },
  date: {
    fontWeight: 'bold',
  },
  conditions: {
    fontStyle: 'italic',
  },
  high: {
    color: '#C5345F',
  },
  low: {
    color: '#1643A8',
    marginBottom: 10,
  },
});

const mapStateToProps = function(state){
    return {
      currentUser: state.currentUser,
      forecastData: state.forecastData.forecast,
      forecastCity: state.forecastCity,
      forecastState: state.forecastState
    }
};

export default connect(mapStateToProps)(SearchResults);