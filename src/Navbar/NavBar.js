import React from 'react';
import {Link} from "react-router-dom";
import  './Navbar.css';

const NavBar = () => {

  return (
    <>
      <div className="navbar">
        <ul>
          <li><Link to={"/module1"} className="nav-link">Module 1</Link></li>
          <li><Link to={"/module2"} className="nav-link">Module 2</Link></li>
          <li><Link to={"/module3"} className="nav-link">Module 3</Link></li>
          <li><Link to={"/module4"} className="nav-link">Module 4</Link></li>
          <li><Link to={"/module5"} className="nav-link">Module 5</Link></li>
          <li><Link to={"/module6"} className="nav-link">Module 6</Link></li>
          <li><Link to={"/module7"} className="nav-link">Module 7</Link></li>
          <li><Link to={"/module8"} className="nav-link">Module 8</Link></li>
          <li><Link to={"/module9"} className="nav-link">Module 9</Link></li>
        </ul>
      </div>
    </>
  )
}

export default NavBar;