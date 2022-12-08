import React from 'react';
import {Link} from "react-router-dom";

const NavBar = () => {

  return (
    <>
      <div className="navbar">
        <ul>
          <li><Link to={"/module1"} className="nav-link">Module 1</Link></li>
          <li><Link to={"/module2"} className="nav-link">Module 2</Link></li>
        </ul>
      </div>
    </>
  )
}

export default NavBar;