
//redux
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//reducer imports
import mainReducer from './reducers/main';
// import protectedDataReducer from './reducers/protectedData';
// import authReducer from './reducers/auth';
import { reducer as formReducer } from 'redux-form'

// console.log(store.getState());

export const store = createStore(
    mainReducer,
    // formReducer
    // auth: authReducer,
    // protectedData: protectedDataReducer

    composeEnhancers(applyMiddleware(thunk))
);


// export function rootReducer(state, action) {
//     return {
//         main: mainReducer(state.mainReducer, action),
//         // form: formReducer(state.formReducer, action),
//         // protectedData: protectedDataReducer(state.protectedData, action)
//     }
// }


export default store;