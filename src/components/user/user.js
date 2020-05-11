import React, { useContext, useEffect } from 'react';
import { Button, ItemUser } from 'components/common';
import { useHistory } from 'react-router-dom';
import AlertContext from 'context/alert/AlertContext';
import UserContext from 'context/user/UserContext';

/**
 * each user
 * @param {Object} { user }
 * @return seach user returns
 */
const User = ({ user }) => {

  /**
   * Get context from user
   * deconstruct the store of user
   */
  const userContext = useContext(UserContext);
  const { deleteUser, message, showUser } = userContext;

  /**
   * Get context from Alert
   * deconstruct the store of user
   */
  const alertContext = useContext(AlertContext);
  const { showAlert } = alertContext;

  const history = useHistory();

  /**
   * Delete user
   * show alert "User detee"
   * @param {Object} user
   */
  const userDelete = (user) => {
    deleteUser(user);
    showAlert({ message: 'User delete', type: 'success-alert' });
  };

  /**
   * at an object to show the alert
   */
  useEffect(() => {
    if (message) {
      showAlert(message);
    }
  }, [message]);

  /**
   * redirect the user and call to new user from api
   * @param {Object} user
   * @param {string} type
   */
  const getUser = (user, type) => {
    type === 'show' ? history.push(`user-detail/${user.id}`): history.push(`user-edit/${user.id}`);
    showUser(user);
  };

  return (
    <ItemUser>
      <div className="item_left">
        <div className="avatar" onClick={() => getUser(user, 'show')}>
          <img src={user.avatar} alt="" />
        </div>
        <div className="name">{user.first_name}</div>
      </div>
      <div className="detatil">
        <Button
          primary
          cursor="true"
          onClick={() => getUser( user, 'edit')}
          type="button"
        > Edit </Button>
        <Button
          secondary
          cursor="true"
          onClick={() => userDelete(user)}
          type="button"
        >
          Delete
        </Button>
      </div>
    </ItemUser>
  );
};

export default User;
