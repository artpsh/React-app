const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    postData: [
        {id: "1", text: "One experiment in other folder", like_counts: "15", dislike_counts: "none"},
        {id: "2", text: "Work hard, play hard!", like_counts: "15", dislike_counts: "none"},
        {
            id: "3",
            text: "Electrify in planes is very amazing discovery",
            like_counts: "35",
            dislike_counts: "none"
        },
        {
            id: "4",
            text: "I love coffee, it give me a real taste of life",
            like_counts: "12",
            dislike_counts: "none"
        },
        {id: "5", text: "My house is my bulwark", like_counts: "5", dislike_counts: "none"},
    ],
    newPostText: ""
};

const ProfileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: "7",
                text: state.newPostText,
                like_counts: "150",
            }
            state.postData.push(newPost);
            state.newPostText = "";
            break;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            break;
    }

    return state;
}

export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text});

export default ProfileReducer;