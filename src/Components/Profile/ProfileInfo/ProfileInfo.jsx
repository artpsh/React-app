import React from "react";
import classes from "./ProfileInfo.module.css";

const ProfileInfo = () => {
    return <div>
        <div className={classes.image}>
            <img src="https://store.donanimhaber.com/6d/dc/be/6ddcbe2cb1d6d60cc469a0614dc3e38d.png "/>
        </div>
        <div className={classes.description}>
            Avatar & description
        </div>


    </div>
}

export default ProfileInfo