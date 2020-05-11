import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import AuthContex from '../../context/auth/AuthContext';

/**
 * does the function of midleware
 * @param {Object} { component: Component, ...props }
 * @returns route according to logging
 */
const PrivateRoute = ({ component: Component, ...props }) => {
  const authContext = useContext(AuthContex);
  const { log } = authContext;

  return (
    <Route
      { ...props }
      render={(props) =>
        !log ? <Redirect to="/login" /> : <Component {...props} />
      }
    />
  );
};

export default PrivateRoute;
