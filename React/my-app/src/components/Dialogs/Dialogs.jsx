import React from 'react'
import classes from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogsItems =(props)=>{
    return  <div className={classes.dialog}>
        <div className={classes.dialog}>
            <NavLink to={'/dialog/' + props.id}>{props.name}</NavLink>
        </div>
    </div>
}

const Message =(props) =>{
    return<div>
        <div className={classes.message}>{props.msg}</div>
    </div>
}

const Dialogs =(props)=>{

    let dialogsData = [
        {id: 1, name: 'Dmitry'},
        {id: 2, name: 'Misha'},
        {id: 3, name: 'Slava'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Sergey'},
        {id: 6, name: 'Pasha'}
    ];

    let messagesData = [
        {id: 1, msg: 'Hello'},
        {id: 2, msg: 'Test test test'},
        {id: 3, msg: 'No'},
        {id: 4, msg: 'New'},
        {id: 5, msg: 'Post'},
        {id: 6, msg: 'PPpppppppp'}

    ];


    return <div className={classes.dialogs}>
                <div className={classes.dialogsItems}>
                <DialogsItems id={dialogsData[0].id} name={dialogsData[0].name}/>
                <DialogsItems name="Misha" id="2"/>
                <DialogsItems name="Slava" id="3"/>
                <DialogsItems name="Sasha" id="4"/>
                <DialogsItems name="Sergey" id="5"/>
                <DialogsItems name="Pasha" id="6"/>
             {/*           <div className={classes.dialog}>
                            <NavLink to='/dialog/1'>Dmitriy</NavLink>
                        </div>
                        <div className={classes.dialog}>
                            <NavLink to='/dialog/2'>Misha</NavLink>
                        </div>
                        <div className={classes.dialog}>
                            <NavLink to='/dialog/3'>Slava</NavLink>
                        </div>
                        <div className={classes.dialog}>
                            <NavLink to='/dialog/4'>Sasha</NavLink>
                        </div>
                        <div className={classes.dialog}>
                            <NavLink to='/dialog/5'>Sergey</NavLink>
                        </div>
                        <div className={classes.dialog}>
                            <NavLink to="/dialog/6">Pasha</NavLink>
                        </div>*/}
                </div>
                <div className={classes.messages}>
                    <Message  msg={messagesData[0].msg}/>
                    <Message  msg={messagesData[1].msg}/>
                    <Message  msg={messagesData[2].msg}/>
                    <Message  msg={messagesData[3].msg}/>
                    <Message  msg={messagesData[4].msg}/>
                    <Message  msg={messagesData[5].msg}/>
             </div>

            </div>

}

export default Dialogs;