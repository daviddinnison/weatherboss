
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';

// import { reducer as formReducer } from 'redux-form'

import protectedDataReducer from './reducers/protectedData';
import mainReducer from './reducers/main';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export function rootReducer(state, action) {
    return {
        main: mainReducer(state.mainReducer, action),
        protectedData: protectedDataReducer(state.protectedData, action)
    }
}

export const store = createStore(
    mainReducer,
    composeEnhancers(applyMiddleware(thunk))
);

export default store;