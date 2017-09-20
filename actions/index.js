//make get requests//make get requests

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