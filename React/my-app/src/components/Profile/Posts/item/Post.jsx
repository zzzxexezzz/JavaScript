import React, {Component} from 'react';
import classes from './Post.module.css';

const Post = (props) => {
    return <div className={classes.posts}>
        My post{props.number}
        <div><img src="https://w-dog.ru/wallpapers/6/1/318392262078439.jpg"/></div>
        {props.message}
        <div>
            <span className={classes.like}>like </span>{props.likeCounts}
        </div>

    </div>

}
export default Post;
