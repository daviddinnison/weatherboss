import actions from '../actions';

const initialState = {
    currentData: {
        display_location: {
            full: undefined
        },
        observation_time: undefined,
        feelslike_f: undefined,
        relative_humidity: undefined,
        precip_1hr_in: undefined,
        icon_url: undefined,
    },
    currentUser: {
        username: 'David',
        locations: [
            {
                id: 1,
                name: 'Washington DC',
            },
            {
                id: 2,
                name: 'Auckland, NZ',
            }
        ],

    },
    forecastData: {},
    isLoggedIn: false,
};

export const mainReducer = (state = initialState, action) => {
//USER DATA
    switch (action.type) {
        case 'CREATE_USER_REQUEST': {
            return Object.assign({}, state, {
                loading: true
            });
        }
        case 'CREATE_USER_SUCCESS': {
            return Object.assign({}, state, {
                currentUser: action.currentUser.data,
                loading: false
            });
        }
        case 'CREATE_USER_ERROR': {
            return Object.assign({}, state, {
                loading: false,
                error: action.message
            });
        }
        case 'LOGIN_USER_REQUEST': {
            return Object.assign({}, state, {
                loading: true
            });
        }
        case 'LOGIN_USER_SUCCESS': {
            return Object.assign({}, state, {
                isLoggedIn: true,
            });
        }
        case 'LOGIN_USER_ERROR': {
            return Object.assign({}, state, {
                loading: false,
                error: action.message
            });
        }
        case 'LOGOUT_USER_REQUEST': {
            return Object.assign({}, state, {
                loading: true
            });
        }
        case 'LOGOUT_USER_SUCCESS': {
            return Object.assign({}, state, {
                isLoggedIn: false
            });
        }
        case 'LOGOUT_USER_ERROR': {
            return Object.assign({}, state, {
                loading: false,
                error: action.message
            });
        }

//WEATHER INFO
        case 'GET_WEATHER_REQUEST': {
            return Object.assign({}, state, {
                loading: true
            });
        }

        case 'GET_WEATHER_SUCCESS': {
            return Object.assign({}, state, {
                forecastData: action.forecastData,
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
                currentData: action.currentData.current_observation,
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
