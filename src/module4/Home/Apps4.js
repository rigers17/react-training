import React, { useContext } from 'react';

import Login from '../LogIn/LogIn';
import Home from './Home';
import MainHeader from '../MainHeader/MainHeader'
import AuthContext from '../Store/Auth-context';

function App4() {
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

export default App4;

