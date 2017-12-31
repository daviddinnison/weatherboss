import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import {reducer as formReducer} from 'redux-form';
import thunk from 'redux-thunk';
// import {loadAuthToken} from './local-storage';

// import authReducer from './reducers/auth';
// import protectedDataReducer from './reducers/protected-data';
import weatherReducer from './reducers/weather';

// import {setAuthToken, refreshAuthToken} from './actions/auth';

const store = createStore(
    combineReducers({
        form: formReducer,
        // auth: authReducer,
        weather: weatherReducer,
        // protectedData: protectedDataReducer
    }),
    applyMiddleware(thunk)
);

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default store;


//old
// export default createStore(
//     mainReducer,
//     composeEnhancers(applyMiddleware(thunk))
// );
