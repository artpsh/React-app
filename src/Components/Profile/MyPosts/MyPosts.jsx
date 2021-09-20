import React from "react";
import classes from './MyPosts.module.css'
import './Post/Post'
import Post from "./Post/Post";

const MyPosts = (props) => {

    let posts = props.postData.map(el => (
        <Post message={el.text} like_counts={el.like_counts} dislike_counts={el.dislike_counts}/>))

    let NewPostElement = React.createRef();

    let addPost = () => {
        props.dispatch({type: 'ADD-POST'})
    }

    let onPostChange = () => {
        let text = NewPostElement.current.value;
        props.dispatch({type: 'UPDATE-NEW-POST-TEXT', newText: text});
    }


    return <div className={classes.item}>
        <h3>My posts</h3>
        <div>
            <div>
                <textarea onChange={onPostChange} ref={NewPostElement} value={props.newPostText}/>
            </div>
            <div>
                <button onClick={addPost}>AddPost</button>
            </div>
            <div>
                <button>Remove</button>
            </div>
        </div>

        <div className={classes.posts}>
            {posts}
        </div>

    </div>

}

export default MyPosts