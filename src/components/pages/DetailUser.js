import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { PageLayout, Section } from '../common';
import UserContext from '../../context/user/UserContext';

/**
 * Show detail the user
 */
const DetailUser = () => {

  /**
   * Get context from user
   */
  const userContext = useContext(UserContext);
  /**
  * deconstruct the store of user
  * */
  const { currentUser } = userContext;


  return (
    <PageLayout>
      <div className="section_view">
        <h2>User Detail</h2>
        <Section className="image_center"> <img src={currentUser.avatar} /> </Section>
        <Section>First Name: {currentUser.first_name}</Section>
        <Section>Last Name:  {currentUser.last_name}</Section> <br/>
        <Link to="/">Back</Link>
      </div>
    </PageLayout>
  );
};
export default DetailUser;
