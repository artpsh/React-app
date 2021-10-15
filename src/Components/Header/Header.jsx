import React from "react";
import classes from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return <header className={classes.header}>
        <img src="https://logoeps.com/wp-content/uploads/2014/05/21601-news-logo-icon-vector-icon-vector-eps.png" />

        <div className={classes.loginBlock}>
            { props.isAuth ? props.login
            : <NavLink to={'/login'}>Login</NavLink> }
        </div>
    </header>
}

export default Header