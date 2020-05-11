
import { USER_NOTIFY, GET_USERS, DELETE_USER, EDIT_USER, SHOW_USER } from '../Types';

export default (state, action) => {
  switch (action.type) {
  case GET_USERS:
    return {
      ...state,
      users: action.payload.data
    };
  case EDIT_USER:
    return {
      ...state,
      currentUser: null
    };
  case SHOW_USER:
    return {
      ...state,
      currentUser: action.payload
    };
  case USER_NOTIFY:
    return {
      ...state,
      message: { ...action.payload }
    };
  case DELETE_USER:
    return {
      ...state,
      users: state.users.filter((user) => user.id !== action.payload.id)
    };
  default:
    return state;
  }
};
