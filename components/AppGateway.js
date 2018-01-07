//react
import React from 'react';

//react native
import { Router, Route, Schema, Animations, TabBar, Actions, Stack, Scene } from 'react-native-router-flux';

//components
import Dashboard from './Dashboard';

import Launch from './Launch';
import SignUp from './Users/SignUp';
import LogInPage from './Users/LogInPage';

import Locations from './Results/Locations';
import AddLocation from './AddLocation';
import MainSearch from './Results/MainSearch';
import SearchResults from './Results/SearchResults';


export default class AppGateway extends React.Component {
    render() {
       


        return (
            <Router>
                <Stack key="root">
                    <Scene key="launch" component={Launch} />
                    <Scene key="addlocation" component={AddLocation} />
                    <Scene key="loginpage" component={LogInPage} />
                    <Scene key="search" component={MainSearch} />
                    <Scene key="signup" component={SignUp} />
                    <Scene key="dashboard" component={Dashboard} />
                    <Scene key="mainsearch" component={MainSearch} />
                    <Scene key="locations" component={Locations} /> 
                    <Scene key="results" component={SearchResults} />
                </Stack>
            </Router>
        );
    }
}
// IS LOCATIONS BEIND USED?