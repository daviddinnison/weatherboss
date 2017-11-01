import { Actions } from 'react-native-router-flux';

export const GET_WEATHER_REQUEST = 'GET_WEATHER_REQUEST';
export const getWeatherRequest = () => ({
    type: GET_WEATHER_REQUEST
});

export const GET_WEATHER_SUCCESS = 'GET_WEATHER_SUCCESS';
// export const getWeatherSuccess = (forecastData, userState, userCity) => ({
export const getWeatherSuccess = (forecastData) => ({
    type: GET_WEATHER_SUCCESS,
    forecastData
    // userState,
    // userCity
});

export const GET_WEATHER_ERROR = 'GET_WEATHER_ERROR';
export const getWeatherError = message => ({
    type: GET_WEATHER_ERROR,
    message
});

export const getWeather = (userInput) => dispatch => {
    dispatch(getWeatherRequest());
    fetch(`http://api.wunderground.com/api/b20a7be72cb0b77a/forecast/q/${userInput}.json`, {})
        .then(res => {
            if (!res.ok) {
                throw new Error(res.statusText);
                // Actions.error();
            }
            return res.json();
        })
        .then(forecastData => {

            dispatch(getWeatherSuccess(forecastData));
            Actions.results();
        })

        .catch(err => {
            dispatch(getWeatherError(err));
            // Actions.error();
        });
};