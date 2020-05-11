import React, { useReducer } from 'react';
import AuthContext from './AuthContext';
import AuthReducer from './AuthReducer';
import { LOGIN_SUCCESS, LOGIN_ERROR, SESSION_DESTROY } from '../Types';
import clientAxios from '../../config/axios';


/**
 * Auth storage
 * @param {Object} props
 */
const AuthState = (props) => {

  /**
   * Init state
   */
  const initialState = {
    token: localStorage.getItem('laliga-token'),
    log: null,
    user: null,
    message: null
  };

  /**
   * deconstruct the store
   */
  const [state, dispatch] = useReducer(AuthReducer, initialState);

  /**
   * Start session on login
   * Trigger alert based on response
   * Get or set the local store
   * @param {Object} data
   */
  const startSession = async (data) => {
    await clientAxios.post('/login', data).then(
      (res) => {
        localStorage.getItem('laliga-token');
        dispatch({
          type: LOGIN_SUCCESS,
          payload: {
            user: data.email,
            log: true,
            token: res.data.token,
            message: { message: 'Login success', type: 'success-alert' }
          }
        });
      },
      (error) => {
        localStorage.removeItem('laliga-token');
        dispatch({
          type: LOGIN_ERROR,
          payload: {
            message: error.error ? error.error : 'resource not found',
            type: 'error-alert'
          }
        });
      }
    );
  };

  /**
   * Destroyed the sessión
   * Clear the local store
   */
  const destroySession = () => {
    localStorage.removeItem('laliga-token');
    dispatch({
      type: SESSION_DESTROY,
      payload: {
        user: null,
        log: null,
        token: null
      }
    });
  };

  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        log: state.log,
        user: state.user,
        message: state.message,
        startSession,
        destroySession
      }}
    >
      { props.children }
    </AuthContext.Provider>
  );
};

export default AuthState;
