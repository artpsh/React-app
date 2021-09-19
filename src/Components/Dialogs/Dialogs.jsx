import React from "react"
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogsItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
    let dialogElements = props.state.dialogsData.map(el => (<DialogItem name={el.name} id={el.id} img={el.img} />));
    let messageElements = props.state.messageData.map(el => (<Message text={el.text}/>));

    let newMessage = React.createRef();
    let sendMessage = () => {
        let text = newMessage.current.value
        alert(text)
    }

    return <div className={classes.dialogs}>
        <div className={classes.dialogsItems}>
            {dialogElements}
        </div>

        <div className={classes.messages}>
            {messageElements}
            <textarea ref={newMessage}></textarea>
            <button onClick={sendMessage}>Send message</button>
        </div>
    </div>

}

export default Dialogs