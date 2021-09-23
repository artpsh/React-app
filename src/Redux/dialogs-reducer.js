const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

const DialogsReducer = (state, action) => {

    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: "10",
                text: state.newMessageText,
            }

            state.messageData.push(newMessage);
            state.newMessageText = "";
            break;
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newMessageText;
            break;
    }

    return state;
}

export const addMessageActionCreator = () => ({type: ADD_MESSAGE});
export const messageChangeActionCreator = (text) => ({ type: UPDATE_NEW_MESSAGE_TEXT, newMessageText: text });

export default DialogsReducer;