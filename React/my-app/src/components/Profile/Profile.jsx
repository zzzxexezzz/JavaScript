import React from 'react';
import classes from'./Profile.module.css';
import Post from './Posts/Posts';

const Profile =()=>{
    return(
        <div className={classes.content}>
        <div>
            <img src="https://www.nastol.com.ua/pic/201209/1920x1200/nastol.com.ua-32997.jpg" alt=''/></div>
        <div>
          ava+discripteon
        </div>
        <Post/>
      </div>
    )
}

export default Profile;