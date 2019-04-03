import React from 'react';
import classes from './Nav.module.css';

/* let classes = {
'nav': 'Nav_nav__1ES2V',
'item': 'Nav_item__2t1yq'
}
 */
const Nav = () =>{
    return(
        <nav className={classes.nav}>
            <div className={classes.item}><a>Profile</a></div>
            <div className={classes.item}><a>Message1cs</a></div>
            <div className={classes.item}><a>News</a></div>
            <div className={classes.item}><a>Music</a></div>
      </nav>
    )
}

export default Nav;