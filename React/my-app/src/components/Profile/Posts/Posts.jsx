import React, {Component} from 'react';
import classes from './Posts.module.css';
import './item/Post';
import Post from "./item/Post";

const Posts = () => {
    return(
    <div className={classes.posts}>
        <h2>Post</h2>
        <div>
            <textarea></textarea>
        </div>
        <div>
            <button>Add post</button>
        </div>
        <div>
            <Post message='Message for You' likeCounts='32' number='1'/>
            <Post message='Test' likeCounts='4' number='2'/>
        </div>
    </div>
    );
}

export default Posts;
