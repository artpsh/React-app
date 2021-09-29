import React from "react"
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogsItem/DialogsItem";
import Message from "./Message/Message";
import {addMessageActionCreator, messageChangeActionCreator} from "../../Redux/dialogs-reducer";

const Dialogs = (props) => {

    let state = props.dialogs;

    let dialogElements = state.dialogsData.map(el => (<DialogItem name={el.name} id={el.id} img={el.img} key={el.id}/>));
    let messageElements = state.messageData.map(el => (<Message text={el.text} key={el.id}/>));
    let newMessageText = state.newMessageText;

    let NewMessageElement = React.createRef();



    let addMessage = () => {
        props.sendMessage();
    }



    let messageChange =() => {
        let text = NewMessageElement.current.value;
        props.updateNewMessageText(text);
    }

    let updateNewMessageText = (el) => {
        let text = el.target.value;
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