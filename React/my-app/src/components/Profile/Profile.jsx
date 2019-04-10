import React from 'react';
/*import classes from'./Profile.module.css';*/
import Post from './Posts/Posts';
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile =()=>{
    return(
        <div>
            <ProfileInfo/>
            <Post/>
        </div>
    )
}

export default Profile;