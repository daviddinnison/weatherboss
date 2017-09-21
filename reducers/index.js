import {
    GET_WEATHER_REQUEST,
    GET_WEATHER_SUCCESS,
    GET_WEATHER_ERROR
} from '../actions';

const initialState = {
    currentUser: 'David Dinnison',
    forecastData: {}
};

export const mainReducer = (state = initialState, action) => {
    if (action.type === GET_WEATHER_REQUEST) {
        return Object.assign({}, state, { loading: true });
    } else if (action.type === GET_WEATHER_SUCCESS) {
        // console.log('GET WEATHER SUCCESS ACTION TRIGGERED IN REDUCER', action)
        return Object.assign({}, state, {
            forecastData: action.forecastData,
            loading: false
        });
    } else if (action.type === GET_WEATHER_ERROR) {
        return Object.assign({}, state, {
            loading: false,
            error: action.message
        });
    } 
    // console.log(state, 'the state in reducer after actions')
    return state;
};
