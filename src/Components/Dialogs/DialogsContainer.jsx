import React from "react"
import {updateNewMessageText, sendMessage} from "../../Redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        dialogs: state.dialogs
    }
}

/*let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageText: (text) => {
            dispatch(messageChangeActionCreator(text))
        },
        sendMessage: () => {
            dispatch(addMessageActionCreator())
        },
    }
}*/

const DialogsContainer = connect(mapStateToProps,
    {
        updateNewMessageText,sendMessage
        })(Dialogs);

export default DialogsContainer