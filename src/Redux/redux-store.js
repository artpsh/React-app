import {combineReducers, createStore} from "redux";
import ProfileReducer from "./profile-reducer";
import SidebarReducer from "./sidebar-reducer";
import DialogsReducer from "./dialogs-reducer";
import UsersReducer from "./users-reducer";
import authReducer from "./auth-reducer";


let reducers = combineReducers({
    profile: ProfileReducer,
    dialogs: DialogsReducer,
    sidebar: SidebarReducer,
    usersPage: UsersReducer,
    auth: authReducer,
})



let store = createStore(reducers);

export default store;