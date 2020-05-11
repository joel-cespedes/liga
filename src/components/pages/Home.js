import React from 'react';
import { PageLayout } from '../common';
import ListUser from '../user/ListUser';

/**
 * Displays the list of user
 */
const Home = () => {
  return (
    <PageLayout>
      <h2>User list</h2>
      <ListUser />
    </PageLayout>
  );
};
export default Home;
