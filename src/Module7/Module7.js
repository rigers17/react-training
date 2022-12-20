
import NavBar from '../Navbar/NavBar';
import UserFinder from './Users/UserFinder';
import UsersContext from './Stores/User-context';

const DUMMY_USERS = [
    { id: 'u1', name: 'Max' },
    { id: 'u2', name: 'Manuel' },
    { id: 'u3', name: 'Julie' },
  ];

function Module7 () {
  const usersContext = {
    users: DUMMY_USERS
  }

  return (
    <div>
        <NavBar />
    <UsersContext.Provider value={usersContext}>
      <UserFinder />
    </UsersContext.Provider>
    </div>
  );
};

export default Module7;
