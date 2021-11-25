import React from "react";
import classes from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";


const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }

    return <div>
        {/*<div className={classes.image}>
            <img src="https://store.donanimhaber.com/6d/dc/be/6ddcbe2cb1d6d60cc469a0614dc3e38d.png " alt="#"/>
        </div>*/}

        <div className={classes.description}>
            <img src={props.profile.photos.large} alt="#"/>
            <ProfileStatus status={"Hello my friends"}/>
            <div>
                <h3>Social networks</h3>
            <div><a href={props.profile.contacts.facebook}>{props.profile.contacts.facebook}</a></div>
            <div><a href={props.profile.contacts.instagram}>{props.profile.contacts.instagram}</a></div>
            <div><a href={props.profile.contacts.vk}>{props.profile.contacts.vk}</a></div>
            <div><a href={props.profile.contacts.github}>{props.profile.contacts.github}</a></div>
            </div>

            <h3>{props.profile.fullName}</h3>
            <div>{props.profile.aboutMe}</div>
        </div>


    </div>
}

export default ProfileInfo