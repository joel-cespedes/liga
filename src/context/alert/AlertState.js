import React, { useReducer } from 'react';
import AlertContext from './AlertContext';
import AlertReducer from './AlertReducer';

import { SHOW_ALERT, HIDE_ALERT } from '../Types';

const AlertState = (props) => {
  const initalState = {
    alert: null
  };
  const [state, dispatch] = useReducer(AlertReducer, initalState);

  const showAlert = (message) => {
    dispatch({
      type: SHOW_ALERT,
      payload: message
    });
    setTimeout(() => {
      dispatch({
        type: HIDE_ALERT
      });
    }, 5000);
  };

  return (
    <AlertContext.Provider
      value={{
        alert: state.alert,
        showAlert
      }}
    >
      {props.children}
    </AlertContext.Provider>
  );
};
export default AlertState;
