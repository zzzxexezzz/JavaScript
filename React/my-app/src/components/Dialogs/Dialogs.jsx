import React from 'react'
import classes from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogsItem = (props) =>{
    return<div>
        <NavLink to="/dialogs/1">{props.name}</NavLink>
    </div>
}

const Dialogs =(props)=>{
    return <div className={classes.dialogs}>
                <div className={classes.dialogsItems}>
                    <div className={classes.dialog}>
                        <NavLink to="/dialogs/1">Dmitriy</NavLink>
                    </div>
                    <div className={classes.dialog}>
                        <NavLink to="/dialogs/2">Misha</NavLink>
                    </div>
                    <div className={classes.dialog}><NavLink to="/dialogs/3">Sasha</NavLink></div>
                    <div className={classes.dialog}><NavLink to="/dialogs/4">Andrey</NavLink></div>
                    <div className={classes.dialog}><NavLink to="/dialogs/5">Sergey</NavLink></div>
                    <div className={classes.dialog}><NavLink to="/dialogs/6">Anton</NavLink></div>

                </div>
                <div className={classes.messages}>
                    <div className="message">Hi</div>
                    <div className="message">Yuo</div>
                    <div className="message">Br-r-r-r-r-</div>
                    <div className="message">No</div>
                </div>
            </div>
}

export default Dialogs;
