import {
    GET_WEATHER_REQUEST,
    GET_WEATHER_SUCCESS,
    GET_WEATHER_ERROR
} from '../actions';

const initialState = {
    currentUser: 'David Dinnison',
    forecastData: {},
    forecastCity: '',
    forecastState: ''
};

export const mainReducer = (state = initialState, action) => {
    if (action.type === GET_WEATHER_REQUEST) {
        return Object.assign({}, state, { loading: true });
    } else if (action.type === GET_WEATHER_SUCCESS) {
        console.log(action, 'ACTION')
        return Object.assign({}, state, {
            forecastData: action.forecastData,
            forecastCity: action.userCity,
            forecastState: action.userState,
            loading: false
        });
    } else if (action.type === GET_WEATHER_ERROR) {
        return Object.assign({}, state, {
            loading: false,
            error: action.message
        });
    } 
    console.log(state, 'STATE')
    return state;
};
