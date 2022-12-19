import React, { useContext } from 'react';

import Login from '../module4/LogIn/LogIn';
import Home from '../module4/Home/Home';
import MainHeader from '../module4/MainHeader/MainHeader'
import AuthContext from '../module4/Store/Auth-context';

function Module4() {
  const ctx = useContext(AuthContext);

  return (
    <React.Fragment>
      <MainHeader />
      <main>
        {!ctx.isLoggedIn && <Login />}
        {ctx.isLoggedIn && <Home />}
      </main>
    </React.Fragment>
  );
}

export default Module4;

