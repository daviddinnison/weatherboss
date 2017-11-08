//react
import React from 'react';
import { connect } from 'react-redux';

//react native
import { Alert, Button, Image, ScrollView, StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import { Router, Route, Schema, Animations, TabBar, Actions } from 'react-native-router-flux';
import Collapsible from 'react-native-collapsible';

//components
import CurrentConditions from './CurrentConditions';

//actions
import { getWeather, getCurrentConditions } from '../actions';

export class SearchResults extends React.Component {
  constructor(props) {
    super(props);
  }

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
    // const current = this.props.currentData.current_observation;
    //   console.log(this.props.currentData, 'CURRENT DATA IN SEARCH SERULTS')
    //   const currentConditions = (
    //     <View>
    //       <Text>test</Text>
    //       <Text>{this.props.currentData.current_observation.wind_dir}</Text>
    //      <Text>{this.props.currentData.current_observation.wind_dir}</Text>
    //     </View>
    // );

    const dailyForecast = this.props.forecastData.simpleforecast.forecastday.map((item) =>

      <TouchableHighlight key={item.period} onPress={() => this.expandResult()}>
        <View style={styles.dailyresult}>
          <Text style={styles.date}>{item.date.pretty}</Text>
          <Image style={{ height: 50, width: 50 }} source={{ uri: `${item.icon_url}` }} />
          <Text style={styles.conditions}>{item.conditions}</Text>
          <Text style={styles.high}>High: {item.high.fahrenheit}°F</Text>
          <Text style={styles.low}>Low: {item.low.fahrenheit}°F</Text>
          <Collapsible collapsed={this.state.collapsed} align="center">
            <View style={styles.detailcontainer}>
              <Text style={styles.detail}>Precipitation:{item.qpf_allday.mm} mm</Text>
              <Text style={styles.detail}>Avg humidity:{item.avehumidity} %</Text>
              <Text style={styles.detail}>Avg wind:{item.avewind.mph} mph</Text>
            </View>
          </Collapsible>
        </View>
      </TouchableHighlight>

    );
    console.log(this.props.currentData, 'props experiment')
    return (
      <ScrollView>
        <View style={styles.searchheading}>
          <Text style={styles.yourlocalforecast}>{this.props.currentData.current_observation.display_location.full}</Text>
        </View>
        <View style={styles.container}>
          <CurrentConditions/>
          {dailyForecast}
          <Text>test</Text>
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
  date: {
    fontWeight: 'bold',
  },
  conditions: {
    fontStyle: 'italic',
  },
  high: {
    color: '#CC7685',
  },
  low: {
    color: '#1643A8',
    marginBottom: 10,
  },
  detailcontainer: {
    marginTop: 10,

  },
  detail: {
    color: 'gray',
    fontStyle: 'italic',
    marginTop: 1,
  },
});

const mapStateToProps = function (state) {
  return {
    currentData: state.currentData,
    currentUser: state.currentUser,
    forecastData: state.forecastData.forecast
  }
};

export default connect(mapStateToProps)(SearchResults);