import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../Redux/profile-reducer";
import MyPosts from "./MyPosts";


const MyPostsContainer = (props) => {

    let state = props.store.getState();


    let addPost = () => {
        props.store.dispatch(addPostActionCreator());
    }

    let onPostChange = (text) => {
        props.store.dispatch(updateNewPostTextActionCreator(text));
    }


    return (
        <MyPosts
            updateNewPostText={onPostChange}
            addPost={addPost}
            posts={props.store.getState().profile}
            newPostText={props.store.getState().profile.newPostText}
        />
    )
}

export default MyPostsContainer;