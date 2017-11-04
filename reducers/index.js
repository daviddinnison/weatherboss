import actions from '../actions';

const initialState = {
    currentUser: 'David Dinnison',
    forecastData: {}
};

export const mainReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'GET_WEATHER_REQUEST': {
            return Object.assign({}, state, {
                loading: true
            });
        }

        case 'GET_WEATHER_SUCCESS': {
            return Object.assign({}, state, {
                forecastData: action.forecastData,
                forecastCity: action.userCity,
                forecastState: action.userState,
                loading: false
            });
        }

        case 'GET_WEATHER_ERROR': {
            return Object.assign({}, state, {
                loading: false,
                error: action.message
            });
        }

        case 'GET_CURRENTCONDITION_REQUEST': {
            return Object.assign({}, state, {
                loading: true
            });
        }

        case 'GET_CURRENTCONDITION_SUCCESS': {
            return Object.assign({}, state, {
                currentData: action.currentData,
                loading: false
            });
        }

        case 'GET_CURRENTCONDITION_ERROR': {
            return Object.assign({}, state, {
                loading: false,
                error: action.message
            });
        }


        default: return state;
    }
};
