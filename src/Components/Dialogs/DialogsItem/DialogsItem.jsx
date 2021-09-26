import React from "react"
import classes from "./../Dialogs.module.css";
import {NavLink} from "react-router-dom";


const DialogsItem = (props) => {
    let path = "/dialogs/" + props.id;

    return <div className={classes.dialog}>

        <div>
            <img src={props.img}/>
        </div>
        <NavLink to={path}>
            {props.name}
        </NavLink>

    </div>
}

export default DialogsItem