import React, { useState } from 'react';
import NavBar from '../Navbar/NavBar'

import AddUser from '../module3/User/AddUser';
import UsersList from '../module3/User/UserList';

function Module3() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };

  return (
    <React.Fragment>
      <NavBar />
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </React.Fragment>
  );
}

export default Module3;