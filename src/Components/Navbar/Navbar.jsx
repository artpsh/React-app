import React from "react";
import classes from './Navbar.module.css'
import {NavLink} from "react-router-dom";
import Friend from './Friends/Friend.jsx'

const Navbar = (props) => {
    let friendNames = props.state.friends.map(el => (<Friend name={el.friend}/>))


    return <nav className={classes.nav}>
        <ul className={`${classes.nav_ul} ${classes.item}`}>
            <li><NavLink to="/profile" activeClassName={classes.active}>Profile</NavLink></li>
            <li><NavLink to="/dialogs" activeClassName={classes.active}>Messages</NavLink></li>
            <li><NavLink to="/news" activeClassName={classes.active}>News</NavLink></li>
            <li><NavLink to="/music" activeClassName={classes.active}>Music</NavLink></li>
            <li><NavLink to="settings" activeClassName={classes.active}>Settings</NavLink></li>
            <li className={classes.friendsMargin}>
                <div className={classes.friends}>Friends</div>
                <div>{friendNames}</div>
            </li>

        </ul>
    </nav>
}

export default Navbar