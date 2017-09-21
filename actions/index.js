//make get requests//make get requests
import { Actions } from 'react-native-router-flux';

export const GET_WEATHER_REQUEST = 'GET_WEATHER_REQUEST';
export const getWeatherRequest = () => ({
    type: GET_WEATHER_REQUEST
});

export const GET_WEATHER_SUCCESS = 'GET_WEATHER_SUCCESS';
export const getWeatherSuccess = forecastData => ({
    type: GET_WEATHER_SUCCESS,
    forecastData
});

export const GET_WEATHER_ERROR = 'GET_WEATHER_ERROR';
export const getWeatherError = message => ({
    type: GET_WEATHER_ERROR,
    message
});

export const getWeather = (userInputState, userInputCity) => dispatch => {

    dispatch(getWeatherRequest());

    fetch(`http://api.wunderground.com/api/b20a7be72cb0b77a/forecast/q/${userInputState}/${userInputCity}.json`, {})
        .then(res => {
            if (!res.ok) {
                throw new Error(res.statusText);
            }
            return res.json();
        })
        .then(forecastData => {
            console.log(forecastData, 'DATA RETURNED FROM FETCH PRIOR TO GETWEATHERSUCCESS');
            Actions.results();
            dispatch(getWeatherSuccess(forecastData));
        })
        .catch(err => {
            dispatch(getWeatherError(err));
        });
};