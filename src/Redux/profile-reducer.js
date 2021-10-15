const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

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
    newPostText: "",
    profile: null,
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
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
    }
    return state;
}

export const addPost = () => ({type: ADD_POST});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const updateNewPostText = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text});

export default ProfileReducer;