import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../Redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";


let mapStateToPropsProfile = (state) => {
    return {
        posts: state.profile
    }
}

let mapDispatchToPropsProfile = (dispatch) => {
    return {
        updateNewPostText: (text) => {
            dispatch(updateNewPostTextActionCreator(text))
        },
        addPost: () => {
            dispatch(addPostActionCreator())
        }

    }
}

const MyPostsContainer = connect(mapStateToPropsProfile, mapDispatchToPropsProfile)(MyPosts)


export default MyPostsContainer;