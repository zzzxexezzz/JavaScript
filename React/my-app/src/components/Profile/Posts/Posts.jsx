import React, {Component} from 'react';
import classes from './Posts.module.css';
import './item/Post';
import Post from "./item/Post";

const Posts = () => {
    return <div>Post
        <Post message='Message for You' likeCounts='32' number='1'/>
        <Post message='Test' likeCounts='4' number='2'/>

    </div>
}

export default Posts;
