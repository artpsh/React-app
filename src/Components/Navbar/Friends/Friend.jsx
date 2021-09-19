import React from "react";
import classes from './Friend.module.css';

const Friend = (props) => {

return <div className={classes.friendBlock}>

    <div className={classes.circle}></div>
    <div className={classes.name}>{props.name}</div>

</div>
}



export default Friend