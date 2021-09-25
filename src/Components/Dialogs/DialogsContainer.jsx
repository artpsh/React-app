import React from "react"
import {addMessageActionCreator, messageChangeActionCreator} from "../../Redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";

const DialogsContainer = () => {
debugger;
    return (
        <StoreContext.Consumer>
            {
            (store) => {
                let state = store.getState().dialogs;
                let addMessage = () => {
                    store.dispatch(addMessageActionCreator());
                }
                let messageChange = (text) => {
                    store.dispatch(messageChangeActionCreator(text));
                }

                return <Dialogs
                    updateNewMessageText={messageChange}
                    sendMessage={addMessage}
                    dialogs={state}
                    newMessageText={state.newMessageText}
                />
            }
        }
        </StoreContext.Consumer>
    )
};

export default DialogsContainer