import { Actions } from 'react-native-router-flux';
import axios from 'axios';

export const createUser = (usernameInput, passwordInput) => dispatch => {
    dispatch(createUserRequest());
    axios.post('http://192.168.1.203:3001/api/users/', {
        username: usernameInput,
        password: passwordInput
    })
    .then(function (response) {
        console.log(response, 'RESPONSE');
        Actions.dashboard();
    })
    .catch(error => {
        const {reason, message, location} = error;
        if (reason === 'ValidationError') {
            // Convert ValidationErrors into SubmissionErrors for Redux Form
            return Promise.reject(
                new SubmissionError({
                    [location]: message
                })
            );
        }
    })
}

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