import React from "react"
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogsItem/DialogItem";
import Message from "./Message/Message";
import {addMessageActionCreator, messageChangeActionCreator} from "../../Redux/dialogs-reducer";

const Dialogs = (props) => {

    let state = props.dialogs;

    let dialogElements = state.dialogsData.map(el => (<DialogItem name={el.name} id={el.id} img={el.img} />));
    let messageElements = state.messageData.map(el => (<Message text={el.text}/>));

    let NewMessageElement = React.createRef();



    let addMessage = () => {
        props.sendMessage();
    }



    let messageChange =() => {
        let text = NewMessageElement.current.value;
        props.updateNewMessageText(text);
    }

    return <div className={classes.dialogs}>
        <div className={classes.dialogsItems}>
            {dialogElements}
        </div>

        <div className={classes.messages}>
            {messageElements}
            <textarea onChange={messageChange} ref={NewMessageElement} value={props.newMessageText} placeholder={'Enter your message'}/>
            <button onClick={addMessage}>Send message</button>
        </div>
    </div>

};

export default Dialogs