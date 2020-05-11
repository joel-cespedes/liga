import React, { useContext, useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { PageLayout, Section, Input, Button } from '../common';
import UserContext from '../../context/user/UserContext';

const EditUser = () => {

  const history = useHistory();

  /**
   * Get context from user
   * deconstruct the store of user
   */
  const userContext = useContext(UserContext);
  const { currentUser, editUser } = userContext;

  /**
   * generats the state USER for the function
   */
  const [user, setUser] = useState({
    first_name: '',
    last_name: ''
  });

  /**
  * deconstruct the of user
  */
  const { first_name, last_name } = user;

  /**
   * update the curren use on status
   */
  useEffect(() => {
    setUser(currentUser);
  }, [currentUser]);

  /**
   * set user modify
   * @param {*} e
   */
  const onChangeFormulario = e => {
    setUser({
      ...user,
      [e.target.name] : e.target.value
    });
  };

  /**
   * Send user update
   * Redirec the user
   * @param {Object} event mouse
   */
  const handleSubmit = e => {
    e.preventDefault();
    editUser(user);
    history.push('/');
  };

  return (
    <PageLayout>
      <div className="section_view">
        <h2>User Edit</h2>
        <form onSubmit={handleSubmit} >
          <Section className="flex_direction">
            <label> First Name: </label>
            <Input
              name="first_name"
              type="text"
              placeholder="First Name"
              value={first_name}
              onChange={onChangeFormulario} />
            <label> Last Name: </label>
            <Input
              name="last_name"
              type="text"
              placeholder="First Name"
              value={last_name}
              onChange={onChangeFormulario} />

            <Button type="submit" primary>Save</Button>
          </Section>
        </form>
        <Link to="/">Back</Link>
      </div>
    </PageLayout>
  );
};
export default EditUser;