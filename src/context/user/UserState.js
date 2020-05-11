import React, { useReducer } from 'react';
import {
  GET_USERS,
  USER_NOTIFY,
  DELETE_USER,
  SHOW_USER,
  EDIT_USER
} from '../Types';
import UserContext from './UserContext';
import UserReducer from './UserReducer';
import clientAxios from '../../config/axios';

/**
 * User storage
 * @param {Object} props
 */
const UserState = (props) => {

  const initialState = {
    users: [],
    currentUser: null,
    message: null
  };

  const [state, dispatch] = useReducer(UserReducer, initialState);

  /**
   * Active alert on store with redux
   * @param {String} message
   * @param {String} type
   */
  const userNotify = (message, type) => ({
    type: USER_NOTIFY,
    payload: { message, type }
  });

  /**
   * Call user from api
   * Trigger alert based on response
   */
  const getUsers = async () => {
    await clientAxios.get('/users').then(
      (res) => {
        dispatch({
          type: GET_USERS,
          payload: res.data
        });
      },
      (error) => {
        dispatch(
          userNotify(
            error.error ? error.error : 'Error laading data',
            'error-alert'
          )
        )
      }
    );
  };

  /**
   * Call user from api
   * @param {Object} user
   */
  const showUser = async (user) => {
    dispatch({
      type: SHOW_USER,
      payload: user
    });
  };

  /**
   * update user on api
  * Trigger alert based on response
   * @param {Object} user
   */
  const editUser = async (user) => {
    await clientAxios.put(`/users/${user.id}`, user).then(
      (res) => {
        dispatch({
          type: EDIT_USER,
          payload: res.data
        });
      },
      (error) => {
        dispatch(
          userNotify(
            error.error ? error.error : 'Error loading user',
            'error-alert'
          )
        );
      }
    );
  };

  /**
   * delete user on api
   * Trigger alert based on response
   * @param {String} userId
   */
  const deleteUser = async (userId) => {
    await clientAxios.delete(`/users/${userId}`).then(
      () => {
        dispatch({
          type: DELETE_USER,
          payload: userId
        });
        dispatch(userNotify('User delete', 'success-alert'));
      },
      (error) => {
        dispatch(
          userNotify(
            error.error ? error.error : 'Error delete user',
            'error-alert'
          )
        );
      }
    );
  };

  return (
    <UserContext.Provider
      value={{
        users: state.users,
        message: state.message,
        currentUser: state.currentUser,
        getUsers,
        showUser,
        editUser,
        deleteUser
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};
export default UserState;
