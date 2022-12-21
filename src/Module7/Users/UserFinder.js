import { Fragment, useState, useEffect, Component } from 'react';

import Users from './Users';
import classes from './UserFinder.module.css';
import UsersContext from '../Stores/User-context';
import ErrorBoundary from './ErrorBoundary';

class UserFinder extends Component {
  static contextType = UsersContext;

  constructor() {
    super();
    console.log('inside UserFinder')
    this.state = {
      filteredUsers: [],
      searchTerm: '',
    };
  }

  componentDidMount() {
    console.log('New filterUsers to render:', this.context.users)
    // Send http request...
    var newUsers = { filteredUsers: this.context.users }
    this.setState(newUsers);
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('prevState:', prevState)
    console.log('prevprops:', prevProps)
    if (prevState.searchTerm !== this.state.searchTerm) {
      let filteredUsersCal = this.filterUsers() 
      console.log('filteredUsersCal:', filteredUsersCal)
      this.setState({
        filteredUsers: filteredUsersCal,
      });
    }
  }

  filterUsers() {
    return this.context.users.filter((user) => user.name.includes(this.state.searchTerm))
   //return this.context.users[0]
    ;
  }

  searchChangeHandler(event) {
    console.log('inside searchChangeHandler.key Inserted:', event.target.value)
    this.setState({ searchTerm: event.target.value });
  }

  render() {
    return (
      <Fragment>
        <div className={classes.finder}>
          <input type='search' onChange={this.searchChangeHandler.bind(this)} />
        </div>
        <ErrorBoundary>
          <Users users={this.state.filteredUsers} />
        </ErrorBoundary>
      </Fragment>
    );
  }
}

// const UserFinder = () => {
//   const [filteredUsers, setFilteredUsers] = useState(DUMMY_USERS);
//   const [searchTerm, setSearchTerm] = useState('');

//   useEffect(() => {
//     setFilteredUsers(
//       DUMMY_USERS.filter((user) => user.name.includes(searchTerm))
//     );
//   }, [searchTerm]);

//   const searchChangeHandler = (event) => {
//     setSearchTerm(event.target.value);
//   };

//   return (
//     <Fragment>
//       <div className={classes.finder}>
//         <input type='search' onChange={searchChangeHandler} />
//       </div>
//       <Users users={filteredUsers} />
//     </Fragment>
//   );
// };

export default UserFinder;