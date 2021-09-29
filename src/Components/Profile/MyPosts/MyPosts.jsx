import React from "react";
import classes from './MyPosts.module.css'
import './Post/Post'
import Post from "./Post/Post";


const MyPosts = (props) => {

    let posts = props.posts.map(el => (
        <Post message={el.text} like_counts={el.like_counts} dislike_counts={el.dislike_counts} key={el.id}/>))

    let NewPostElement = React.createRef();

    let onAddPost = () => {
        props.addPost();

    }

    let onPostChange = () => {
        let text = NewPostElement.current.value;
        props.updateNewPostText(text);
    }


    return <div className={classes.item}>
        <h3>My posts</h3>
        <div>
            <div>
                <textarea onChange={onPostChange} ref={NewPostElement} value={props.newPostText} placeholder={'Add new post here'}/>
            </div>
            <div>
                <button onClick={onAddPost}>AddPost</button>
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