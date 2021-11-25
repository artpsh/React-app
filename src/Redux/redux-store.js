import {applyMiddleware, combineReducers, createStore} from "redux";
import ProfileReducer from "./profile-reducer";
import SidebarReducer from "./sidebar-reducer";
import DialogsReducer from "./dialogs-reducer";
import UsersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import thunk from "redux-thunk";


let reducers = combineReducers({
    profile: ProfileReducer,
    dialogs: DialogsReducer,
    sidebar: SidebarReducer,
    usersPage: UsersReducer,
    auth: authReducer,
})



let store = createStore(reducers, applyMiddleware(thunk));

export default store;