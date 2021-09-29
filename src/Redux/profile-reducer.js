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
    ],
    newPostText: ""
};

const ProfileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 7,
                text: state.newPostText,
                like_counts: "150",
            };
            let stateCopy = {...state};
            stateCopy.postData = [...stateCopy.postData];
            stateCopy.postData.push(newPost);
            stateCopy.newPostText = "";
            return stateCopy;
    }
        case UPDATE_NEW_POST_TEXT: {
            let stateCopy = {...state};
            stateCopy.newPostText = action.newText;
            return stateCopy;
        }
    }
    return state;
}

export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text});

export default ProfileReducer;