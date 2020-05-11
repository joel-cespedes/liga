import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import AlertContext from '../../context/alert/AlertContext';
import AuthContext from '../../context/auth/AuthContext';
import {
  PageLayout,
  Input,
  PasswordInput,
  Button,
  Spinner
} from '../common';

const Form = styled.form`
  width: 100%;
  max-width: 400px;
  background: white;
  border: 1px solid #eee;
  padding: 16px;
  box-sizing: border-box;
  color: black;
  border-radius: 4px;
  position: relative;
  .alt-text {
    text-align: center;
    margin: 10px 0;
  }
`;
/**
 * Authentication of user
 * @param {Object} props
 * @returns view login
 */
const Login = (props) => {

  /**
   * Get context the autentication
   * deconstruct the store of auth
   */
  const authContext = useContext(AuthContext);
  const { log, startSession, message } = authContext;

  /**
   * Get context from Alert
   * deconstruct the store of user
   */
  const alertContext = useContext(AlertContext);
  const { alert, showAlert } = alertContext;

  /**
   * generates the state USER for the function
   * deconstruct the store of user
   */
  const [formFields, setFormFields] = useState({ username: '', password: '' });
  const [loading, setLoading] = useState(false);

  /**
   * set the user in the satus
   * @param {Object} event mouse
   */
  function handleInputChange(e) {
    e.persist();
    setFormFields((s) => ({
      ...s,
      [e.target.name]: e.target.value
    }));
  }
  /**
   * Send form
   * Show Alert
   * Show the gif loading
   * @param {Object} event mouse
   */
  function handleSubmit(e) {
    e.preventDefault();
    if (formFields.username.trim() === '') {
      showAlert({ message: 'the fields cannot be empty', type: 'error-alert'});
      return;
    }
    startSession({ email: formFields.username, password: formFields.password });
    setLoading(true);
  }

  /**
   * Show Alert
   * Hide the gif loading
   * redirect user
   */
  useEffect(() => {
    if (log) {
      setLoading(false);
      showAlert({ message: 'success', type: 'success-alert' });
      props.history.push('/');
    }
    if (message) {
      setLoading(false);

      if((message || {}).type === 'error-alert' || log) {
        console.log(message);
        showAlert(message);
      }
    }

  }, [message]);

  return (
    <PageLayout>
      {alert ? <div className={alert.type}>{alert.message}</div> : null}
      <h1>Login</h1>
      <Form onSubmit={handleSubmit}>
        {loading ? (
          <Spinner />
        ) : (
          <>
            <Input
              value={formFields.username}
              onChange={handleInputChange}
              name="username"
              type="text"
              placeholder="Username"
            />
            <PasswordInput
              value={formFields.password}
              onChange={handleInputChange}
              name="password"
            />
          </>
        )}
        <Button large type="submit" disabled={loading}>
          {loading ? 'Loading...' : 'Login'}
        </Button>
        {!loading && (
          <>
            <div className="alt-text">or</div>
            <Button secondary type="button">
              Register
            </Button>
          </>
        )}
      </Form>
    </PageLayout>
  );
};

export default Login;
