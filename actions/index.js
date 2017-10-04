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

export const getWeather = (uSstate, city) => dispatch => {
    dispatch(getWeatherRequest());
    fetch(`http://api.wunderground.com/api/b20a7be72cb0b77a/forecast/q/${uSstate}/${city}.json`, {})
        .then(res => {
            if (!res.ok) {
                throw new Error(res.statusText);
                // Actions.error();
            }
            return res.json();
        })
        .then(forecastData => {
            // console.log('usState in action', uSstate);
            // console.log('city in action', city);
            const userCity = city;
            const userState = uSstate;
            // console.log('DISPATCH',dispatch(getWeatherSuccess(forecastData, userState, userCity)))

            dispatch(getWeatherSuccess(forecastData));
            // dispatch(getWeatherSuccess(forecastData, userState, userCity));
            Actions.results();
        })

        .catch(err => {
            dispatch(getWeatherError(err));
            // Actions.error();
        });
};