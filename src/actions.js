import { LOGIN_REQUEST, SIGNUP_REQUEST } from './constants';

export const signupRequesting = function (fullName, username, email, password) {
  return {
    type: SIGNUP_REQUEST,
    fullName,
    username,
    email,
    password
  }
};

export const loginRequest = function (username, password) {
  return {
    type: LOGIN_REQUEST,
    username,
    password
  };
}
