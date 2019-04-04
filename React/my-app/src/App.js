import React from 'react'
import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Dialogs from "./components/Dialogs/Dialogs";
import Profile from './components/Profile/Profile';


const App = () => {
    return (
        < div
            className="app-wrapper">
            < Header/>
            < Nav/>
            <div className='app-wrapper-content'>
                <Dialogs/>
                {/*<Profile />*/}
            </div>
            {/*< Profile/>*/}
        </div>
    );
}
export default App;
