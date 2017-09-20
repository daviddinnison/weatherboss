import {
    GET_WEATHER_REQUEST,
    GET_WEATHER_SUCCESS,
    GET_WEATHER_ERROR
} from '../actions';

const initialState = {
    currentUser: 'David Dinnison'
};

export const mainReducer = (state = initialState, action) => {
    if (action.type === GET_WEATHER_REQUEST) {
        return Object.assign({}, state, { loading: true });
    } else if (action.type === GET_WEATHER_SUCCESS) {
        return Object.assign({}, state, {
            currentUser: action.userId,
            loading: false // does this need to be here? update all depending on joe's response
        });
    } else if (action.type === GET_WEATHER_ERROR) {
        return Object.assign({}, state, {
            loading: false,
            error: action.message
        });
    } 
    return state;
};
