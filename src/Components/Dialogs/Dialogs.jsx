import React from "react"
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogsItem/DialogItem";
import Message from "./Message/Message";
import {addMessageActionCreator, messageChangeActionCreator} from "../../Redux/dialogs-reducer";

const Dialogs = (props) => {
    let dialogElements = props.state.dialogsData.map(el => (<DialogItem name={el.name} id={el.id} img={el.img} />));
    let messageElements = props.state.messageData.map(el => (<Message text={el.text}/>));

    let NewMessageElement = React.createRef();



    let addMessage = () => {
        props.dispatch(addMessageActionCreator());
    }



    let messageChange =() => {
        let text = NewMessageElement.current.value;
        props.dispatch(messageChangeActionCreator(text));
    }

    return <div className={classes.dialogs}>
        <div className={classes.dialogsItems}>
            {dialogElements}
        </div>

        <div className={classes.messages}>
            {messageElements}
            <textarea onChange={messageChange} ref={NewMessageElement} value={props.state.newMessageText} placeholder={'Enter your message'}/>
            <button onClick={addMessage}>Send message</button>
        </div>
    </div>

}
debugger;
export default Dialogs