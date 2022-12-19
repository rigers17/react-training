import React from 'react';

import Navigation from './Navigation';
import classes from './MainHeader.module.css';
import NavBar from '../../Navbar/NavBar';

const MainHeader = (props) => {
  return (
    <header className={classes['main-header']}>
      <h1>A Typical Page</h1>
      <NavBar />
      <Navigation isLoggedIn={props.isAuthenticated} onLogout={props.onLogout} />
    </header>
  );
};

export default MainHeader;
