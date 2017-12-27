import { Actions } from 'react-native-router-flux';
import axios from 'axios';

export const CREATE_USER_REQUEST = 'CREATE_USER_REQUEST';
export const createUserRequest = (username, password) => ({
    type: CREATE_USER_REQUEST,
    username,
    password
})

export const CREATE_USER_ERROR = 'CREATE_USER_ERROR';
export const createUserError = message => ({
    type: CREATE_USER_ERROR,
    message
})

export const GET_WEATHER_REQUEST = 'GET_WEATHER_REQUEST';
export const getWeatherRequest = () => ({
    type: GET_WEATHER_REQUEST
});

export const GET_WEATHER_SUCCESS = 'GET_WEATHER_SUCCESS';
export const getWeatherSuccess = (forecastData) => ({
    type: GET_WEATHER_SUCCESS,
    forecastData
});

export const GET_WEATHER_ERROR = 'GET_WEATHER_ERROR';
export const getWeatherError = message => ({
    type: GET_WEATHER_ERROR,
    message
});

export const GET_CURRENTCONDITION_REQUEST = 'GET_CURRENTCONDITION_REQUEST';
export const getCurrentConditionRequest = () => ({
    type: GET_CURRENTCONDITION_REQUEST
});

export const GET_CURRENTCONDITION_SUCCESS = 'GET_CURRENTCONDITION_SUCCESS';
export const getCurrentConditionSuccess = currentData => ({
    type: GET_CURRENTCONDITION_SUCCESS,
    currentData
});

export const GET_CURRENTCONDITION_ERROR = 'GET_CURRENTCONDITION_ERROR';
export const getCurrentConditionError = message => ({
    type: GET_CURRENTCONDITION_ERROR,
    message
});


export const createUser = (usernameInput, passwordInput) => dispatch => {
    function _handleError(errorMessage) {
        console.log(errorMessage);
    }

    dispatch(createUserRequest());

    console.log(JSON.stringify({
        username: usernameInput,
        password: passwordInput,
    }))
    // http://localhost:3001/api/users/
    // http://httpbin.org/post
    axios.post('http://192.168.1.203:3001/api/users/', {
        username: usernameInput,
        password: passwordInput
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });




        // method: 'POST',
        // headers: {
        //     // 'Accept': 'application/json',
        //     'Content-Type': 'application/json',
        // },
        // body: `{
        //     "username": "sdddsdddf3dfdfd1",
        //     "password": "tessdfdf"
        // }`
        // JSON.stringify({
        //     username: usernameInput,
        //     password: passwordInput,
        // })
    // })
        // .then(res => {
        //     if (res.ok) {
        //         return res.json();
        //     } else {
        //         _handleError(`Oops, something went wrong: ${res.status}, ${res.statusText}`);
        //     }
        // }).then(function (data) {
        //     if (data) {
        //         console.log('success', data);
        //     }
        // })
        // //error handling
        // .catch(error => {
        //     // ADD THIS THROW error
        //     console.log(error)
        //     _handleError(`There has been a problem with your fetch operation: ${error.message}`)
        // });
    //front end rendering


};

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
export const getCurrentConditions = (userInput) => dispatch => {
    dispatch(getCurrentConditionRequest());
    fetch(`http://api.wunderground.com/api/b20a7be72cb0b77a/conditions/q/${userInput}.json`, {})
        .then(res => {
            // console.log('INSIDE FIRST .THEN')
            if (!res.ok) {
                throw new Error(res.statusText);
                // Actions.error();
            }
            return res.json();
        })
        .then(currentForecastData => {
            // console.log(currentForecastData, 'CURRENT FORCAST DATA')
            dispatch(getCurrentConditionSuccess(currentForecastData));
            Actions.results();
        })

        .catch(err => {
            dispatch(getCurrentConditionError(err));
            // Actions.error();
        });
}