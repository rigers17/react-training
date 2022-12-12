import React, { useContext } from 'react';

import Card2 from '../UI/Card2';
import classes from './Home.module.css';
import AuthContext from '../Store/Auth-context';
import Buttoni from '../UI/Buttoni';

const Home = (props) => {
  const authCtx = useContext(AuthContext);

  return (
    <Card2 className={classes.home}>
      <h1>Welcome back!</h1>
      <Buttoni onClick={authCtx.onLogout}>Logout</Buttoni>
    </Card2>
  );
};

export default Home;
