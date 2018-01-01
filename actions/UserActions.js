import { Actions } from 'react-native-router-flux';
import axios from 'axios';

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
    axios.post('http://192.168.1.203:3001/api/users/', {
        username: usernameInput,
        password: passwordInput
      })
      .then(function (response) {
        console.log(response, 'RESPONSE');
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



export const loginUser = (usernameInput, passwordInput) => dispatch => {
    dispatch(loginUserRequest());
    dispatch(loginUserSuccess());
    Actions.dashboard();
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
    Actions.usersintro();
};