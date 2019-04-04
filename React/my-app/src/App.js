import React from 'react'
import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Dialogs from "./components/Dialogs/Dialogs";
import Profile from './components/Profile/Profile';
import {BrowserRouter, Route} from "react-router-dom";


const App = (props) => {
    return(
    <BrowserRouter>
            <div
                className="app-wrapper">
                <Header/>
                <Nav/>
                <div className='app-wrapper-content'>
                    <Route path ='/dialog' component={Dialogs}/>
                    <Route path='/profile' component={Profile}/>
                </div>
            </div>
    </BrowserRouter>
    );
}
export default App;