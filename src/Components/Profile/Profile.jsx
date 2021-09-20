import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";


const Profile = (props) => {


    return <div>
        <ProfileInfo/>
        <MyPosts postData={props.profile.postData}
                 newPostText={props.profile.newPostText}
                 dispatch={props.dispatch}
        />
    </div>
}

export default Profile