import React from "react";
import classes from './Post.module.css'

const Post = (props) => {

    return (<div className={classes.item}>
            <img alt='avatar'
                 src="https://play-lh.googleusercontent.com/TCnRPIOcjWujX-O2u6A5lKLYlhIBIWEWxtYbinroZPWT-i8WV90AJyiLtYjbVQecOw=w256"/>
            <div>{props.message}</div>
            <div>like: {props.like_counts}</div>
            <div>dislike: {props.dislike_counts}</div>
        </div>
    );
}

export default Post