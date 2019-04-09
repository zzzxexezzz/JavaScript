import React from 'react'
import classes from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogsItem = (props) =>{
    let path="/dialogs/"+ props.id;
    return<div className={classes.dialog + ' ' + classes.active}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
}

const Dialogs =(props)=>{
    return <div className={classes.dialogs}>
                <div className={classes.dialogsItems}>

                    <DialogsItem name="Dmitriy" id="1"/>
                    <DialogsItem name="Misha" id="2"/>
                    <DialogsItem name="Sasha" id="3"/>
                    <DialogsItem name="Andrey" id="4"/>
                    <DialogsItem name="Sergey" id="5"/>
                    <DialogsItem name="Anton" id="6"/>

                {/*

                    <div className={classes.dialog}>
                        <NavLink to="/dialogs/1">Dmitriy</NavLink>
                    </div>


                    <div className={classes.dialog}>
                        <NavLink to="/dialogs/2">Misha</NavLink>
                    </div>
                    <div className={classes.dialog}><NavLink to="/dialogs/3">Sasha</NavLink></div>
                    <div className={classes.dialog}><NavLink to="/dialogs/4">Andrey</NavLink></div>
                    <div className={classes.dialog}><NavLink to="/dialogs/5">Sergey</NavLink></div>
                    <div className={classes.dialog}><NavLink to="/dialogs/6">Anton</NavLink></div>*/}

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
