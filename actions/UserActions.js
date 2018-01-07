import { Actions } from 'react-native-router-flux';
import axios from 'axios';
import {normalizeResponseErrors} from './utils';
import {SubmissionError} from 'redux-form';
const API_BASE_URL = 'http://192.168.1.203:3001';

export const CREATE_USER_REQUEST = 'CREATE_USER_REQUEST';
export const createUserRequest = (username, password) => ({
    type: CREATE_USER_REQUEST,
    username,
    password
})

export const CREATE_USER_SUCCESS = 'CREATE_USER_SUCCESS';
export const createUserSuccess = (currentUser) => ({
    type: CREATE_USER_SUCCESS,
    currentUser
});

export const CREATE_USER_ERROR = 'CREATE_USER_ERROR';
export const createUserError = message => ({
    type: CREATE_USER_ERROR,
    message
})

export const createUser = (usernameInput, passwordInput) => dispatch => {
    dispatch(createUserRequest());
    axios.post(`${API_BASE_URL}/api/users/`, {
        username: usernameInput,
        password: passwordInput
    })
        .then(function (response) {
            const STORAGE_KEY = 'id_token';
            console.log(response, 'CREATE USER RESPONSE')
            dispatch(createUserSuccess(response))
            Actions.dashboard();
        })
        .catch(function (error) {
            console.log(error);
            dispatch(createUserError());
        });
};


//LOGIN
export const LOGIN_USER_REQUEST = 'LOGIN_USER_REQUEST';
export const loginUserRequest = (username, password) => ({
    type: LOGIN_USER_REQUEST,
    username,
    password
})

export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS';
export const loginUserSuccess = () => ({
    type: LOGIN_USER_SUCCESS,
});

export const LOGIN_USER_ERROR = 'LOGIN_USER_ERROR';
export const loginUserError = message => ({
    type: LOGIN_USER_ERROR,
    message
});



export const loginUser = (username, password) => dispatch => {
    dispatch(loginUserRequest());
    return (
        fetch(`${API_BASE_URL}/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username,
                password
            })
        })

            // Reject any requests which don't return a 200 status, creating
            // errors which follow a consistent format
            .then(res => normalizeResponseErrors(res))
            .then(res => res.json())
            .then(({ authToken }) => storeAuthInfo(authToken, dispatch))
            .catch(err => {
                console.log('YOU ARE HERE....THE ERROR IS>>>>', err)
                const { code } = err;
                const message =
                    code === 401
                        ? 'Incorrect username or password'
                        : 'Unable to login, please try again';
                dispatch(loginUserError(err));
                // Could not authenticate, so return a SubmissionError for Redux
                // Form
                return Promise.reject(
                    new SubmissionError({
                        _error: message
                    })
                );
            })
    );
};

const storeAuthInfo = (authToken, dispatch) => {
    console.log('AUTH TOKEN...sdf')
    const decodedToken = jwtDecode(authToken);
    dispatch(setAuthToken(authToken));
    dispatch(loginUserSuccess(decodedToken.user));
    saveAuthToken(authToken);
};


//LOGOUT USER
export const LOGOUT_USER_REQUEST = 'LOGOUT_USER_REQUEST';
export const logoutUserRequest = () => ({
    type: LOGOUT_USER_REQUEST,
})

export const LOGOUT_USER_SUCCESS = 'LOGOUT_USER_SUCCESS';
export const logoutUserSuccess = () => ({
    type: LOGOUT_USER_SUCCESS,
});

export const LOGOUT_USER_ERROR = 'LOGOUT_USER_ERROR';
export const logoutUserError = message => ({
    type: LOGOUT_USER_ERROR,
    message
});


export const logoutUser = () => dispatch => {
    dispatch(logoutUserRequest());
    dispatch(logoutUserSuccess());
    Actions.launch();
};