import React from 'react';
import classes from './Nav.module.css';
import {NavLink} from "react-router-dom";

const Nav = () =>{
    return (
        <nav className={classes.nav}>
            <div className={classes.item}><NavLink to="/profile">Profile</NavLink></div>
            <div className={classes.item}><NavLink to="/dialogs">Message</NavLink></div>
            <div className={classes.item}><NavLink to="/news">News</NavLink></div>
            <div className={classes.item}><NavLink to="/musick">Music</NavLink></div>
            <div className={classes.item}><NavLink to="/seting">Seting</NavLink></div>
        </nav>
    )
}

export default Nav;