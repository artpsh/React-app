import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
/*import MyPosts from "./MyPosts/MyPosts";*/
import MyPostsContainer from "./MyPosts/MyPostsContainer";


const Profile = (props) => {
    debugger;
    return <div>
        <ProfileInfo/>
        <MyPostsContainer store={props.store}/>
    </div>
}

export default Profile;



