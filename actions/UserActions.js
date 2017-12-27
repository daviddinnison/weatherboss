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
      .catch(function (error) {
        console.log(error);
      });

    //front end rendering
};