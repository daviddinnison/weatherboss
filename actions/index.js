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

export const getQuestions = accessToken => dispatch => {
    dispatch(getQuestionsRequest());
    fetch('/api/questions', {
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    })
        .then(res => {
            if (!res.ok) {
                throw new Error(res.statusText);
            }
            return res.json();
        })
        .then(questions => {
            dispatch(getQuestionsSuccess(questions));
        })
        .catch(err => {
            dispatch(getQuestionsError(err));
        });
};