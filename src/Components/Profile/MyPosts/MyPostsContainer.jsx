import React from "react";
import {addPost, updateNewPostText} from "../../../Redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";


let mapStateToPropsProfile = (state) => {
    return {
        posts: state.profile.postData,
        newPostText: state.profile.newPostText
    }
}

/*let mapDispatchToPropsProfile = (dispatch) => {
    return {
        updateNewPostText: (text) => {
            dispatch(updateNewPostTextActionCreator(text))
        },
        addPost: () => {
            dispatch(addPostActionCreator())
        }

    }
}*/

const MyPostsContainer = connect(mapStateToPropsProfile,
    {
        updateNewPostText, addPost
        })(MyPosts)


export default MyPostsContainer;