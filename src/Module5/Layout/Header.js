import { Fragment } from "react";
import mealsImage from '../Assets/meals.jpg';
import classes from './Header.module.css';
import HeaderCartButton from "./HeaderCartButton";
import NavBar from "../../NavBar";

const Header = props => {
   return <Fragment>
    <header className={classes.header}>
        <h1>ReactMeals</h1>
        <NavBar />
        <HeaderCartButton />
    </header>
    <div className={classes['main-image']}>
        <img src={mealsImage} alt="Full of delicious food!" />

    </div>
    </Fragment>
};

export default Header;