import { SIGNUP_REQUEST, LOGIN_REQUEST } from './../constants';
import { pushUser, authenticateUser } from '../database/index';

let initialState = {
  username:'',
  email:'',
  fullName:'',
  sessionTime: 60000,
  isLogin: false
};

const reducer = function (state = initialState, action) {
  console.log("State:: ", JSON.stringify(state));
  switch (action.type) {
    case SIGNUP_REQUEST: {
      console.log("action:: ", action);
      const {fullName, username, email, password } = action;
      if(fullName && username && email && password) {
      pushUser(fullName, username, email, password);
      return {
        ...state,
        username,
        email,
        fullName,
        isLogin: true
      };
      }
      return state;
    }
    case LOGIN_REQUEST: {
    const users = state.users;
    console.log("action:: ", action);
    if(authenticateUser(action.username, action.password) == true)
    return {...state, isLogin: true};
    return {...state, isLogin: false };
    }
    default: return state;
  }

}

export default reducer;