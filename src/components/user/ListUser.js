import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import User from './user';
import UserContext from '../../context/user/UserContext';
import AlertContext from '../../context/alert/AlertContext';

const ListUserWrap = styled.ul`
  margin: 2em 0;
  padding: 0;
`;
/**
 * show all users
 * @returns list of all users
 */
const ListUser = () => {

  /**
   * Get context from user
   * deconstruct the store of user
   */
  const userContext = useContext(UserContext);
  const { users, getUsers } = userContext;

  /**
   * Get context from Alert
   * deconstruct the store of user
   */
  const alertContext = useContext(AlertContext);
  const { alert, showAlert } = alertContext;

  /**
   * watch an object to show the alert
   * call user from api
   */
  useEffect(() => {
    if (!users.length) {
      getUsers();
    }
    showAlert(alert);
  }, [alert]);

  return (
    <ListUserWrap>
      {alert ? <div className={alert.type}>{alert.message}</div> : null}
      {users.length === 0 ? (
        <div>Without users</div>
      ) : (
        users.map((user) => <User key={user.id} user={user} />)
      )}
    </ListUserWrap>
  );
};

export default ListUser;
