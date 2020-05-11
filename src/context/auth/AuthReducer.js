import { LOGIN_SUCCESS, LOGIN_ERROR, SESSION_DESTROY } from '../Types';

export default (state, action) => {
  switch (action.type) {
  case LOGIN_SUCCESS:
    return {
      ...state,
      ...action.payload
    };
  case LOGIN_ERROR:
    return {
      ...state,
      message: action.payload
    };

  case SESSION_DESTROY:
    return {
      ...state,
      ...action.payload
    };
  default:
    return state;
  }
};
