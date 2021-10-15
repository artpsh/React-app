const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
    dialogsData: [
        {name: "Nina", id: "1", img: "https://pp.userapi.com/c849528/v849528223/f08d3/yslvV4nsCmM.jpg?ava=1",},
        {
            name: "Fedor",
            id: "2",
            img: "https://sun3-11.userapi.com/x8qjShkkNkFOE6uhNoLVWsMd1hvcyHoDR2pL1Q/-am6KbWY5u8.jpg?ava=1"
        },
        {name: "Irina", id: "3", img: "https://seclub.org/files/user/000/000/005/766/x_64657244bebbb700.jpg"},
        {
            name: "Alex",
            id: "4",
            img: "https://sun1-23.userapi.com/s/v1/ig2/Ywagf_z5lTME_uy-SvY1tTfpLcYfiU4uxV5y7sWHe9U4vZKMpzWja16dS56Ger4tMu76F0e-jHu4zYqMsfObLiI2.jpg?size=50x0&quality=96&crop=64,64,512,512&ava=1"
        },
        {
            name: "Semen",
            id: "5",
            img: "https://sun1-24.userapi.com/impf/c854420/v854420729/d083d/LBUQoeF83bA.jpg?size=50x0&quality=88&crop=23,3,201,201&sign=026b56bddab111130b2499297abe3df7&ava=1"
        },
        {
            name: "Felix",
            id: "6",
            img: "https://sun9-18.userapi.com/impg/e6kH07gLnVwFAwXGYKrCfb_w9nhw4E4TWBApDQ/okvHLaqFuSM.jpg?size=50x0&quality=88&crop=0,56,536,536&sign=1a0c4217116e6fd1715894c6df78624c&ava=1"
        },
    ],
    messageData: [
        {id: "1", text: "Good morning buddy"},
        {id: "2", text: "How much money do you have?"},
        {id: "3", text: "No more, no less"},
        {id: "4", text: "If I want, I can, if I can, I will doing my best"},
        {id: "5", text: "The weather is cold today"},
        {id: "6", text: "Tax in Russia how a savage in Silicon Valley"},

    ],
    newMessageText: "",
};

const DialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_MESSAGE: {
            let newMessage = {
                id: "10",
                text: state.newMessageText,
            };

            let stateCopy = {...state};
            stateCopy.messageData = [...stateCopy.messageData];
            stateCopy.messageData.push(newMessage);
            stateCopy.newMessageText = "";
            return stateCopy
        }
        case UPDATE_NEW_MESSAGE_TEXT: {
            let stateCopy = {...state};
            stateCopy.newMessageText = action.newMessageText;
            return stateCopy
        }
    }

    return state;
}

export const sendMessage = () => ({type: ADD_MESSAGE});
export const updateNewMessageText = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, newMessageText: text});

export default DialogsReducer;