import React from "react"
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogsItem/DialogItem";
import Message from "./Message/Message";
import {addMessageActionCreator, messageChangeActionCreator} from "../../Redux/dialogs-reducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
debugger
    let state = props.store.getState().dialogs;

    let addMessage = () => {
        props.store.dispatch(addMessageActionCreator());
    }

    let messageChange = (text) => {
        props.store.dispatch(messageChangeActionCreator(text));
    }

    return (
        <Dialogs
            updateNewMessageText={messageChange}
            sendMessage={addMessage}
            dialogs={state}
            newMessageText={props.store.getState().dialogs.newMessageText}
        />
    )

};

export default DialogsContainer