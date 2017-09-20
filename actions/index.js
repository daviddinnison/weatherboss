//make get requests//make get requests
import { Actions } from 'react-native-router-flux';

export const GET_WEATHER_REQUEST = 'GET_WEATHER_REQUEST';
export const getWeatherRequest = () => ({
    type: GET_WEATHER_REQUEST
});

export const GET_WEATHER_SUCCESS = 'GET_WEATHER_SUCCESS';
export const getWeatherSuccess = weather => ({
    type: GET_WEATHER_SUCCESS,
    weather
});

export const GET_WEATHER_ERROR = 'GET_WEATHER_ERROR';
export const getWeatherError = message => ({
    type: GET_WEATHER_ERROR,
    message
});

export const getWeather = accessToken => dispatch => {
    console.log('you dispatched getWeather');
    dispatch(getWeatherRequest());
    fetch('http://api.wunderground.com/api/b20a7be72cb0b77a/forecast/q/WA/Seattle.json', {})
        .then(res => {
            if (!res.ok) {
                throw new Error(res.statusText);
            }
            return res.json();
        })
        .then(questions => {
            console.log(questions);
            Actions.results();
            dispatch(getWeatherSuccess(weather));
        })
        .catch(err => {
            dispatch(getWeatherError(err));
        });
};