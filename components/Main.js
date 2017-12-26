//react
import React from 'react';

//react native
import { Router, Route, Schema, Animations, TabBar, Actions, Stack, Scene } from 'react-native-router-flux';

//components
import UsersIntro from './Users/UsersIntro';
import SignUp from './Users/SignUp';

import Locations from './Results/Locations';
import MainSearch from './Results/MainSearch';
import SearchResults from './Results/SearchResults';
import ErrorPage from './ErrorPage';


export default class Main extends React.Component {
    render() {
        return (
            <Router>
                <Stack key="root">
                {/* unstyled */}
                    <Scene key="usersintro" component={UsersIntro} />
                    <Scene key="signup" component={SignUp} />
                    <Scene key="locations" component={Locations} />
                    <Scene key="search" component={MainSearch} />
                    <Scene key="results" component={SearchResults} />
                    <Scene key="error" component={ErrorPage} />

                {/* styled */}
                </Stack>
            </Router>
        );
    }
}
