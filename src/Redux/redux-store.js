import {combineReducers, createStore} from "redux";
import ProfileReducer from "./profile-reducer";
import SidebarReducer from "./sidebar-reducer";
import DialogsReducer from "./dialogs-reducer";


let reducers = combineReducers({
    profile: ProfileReducer,
    dialogs: DialogsReducer,
    sidebar: SidebarReducer
})



let store = createStore(reducers);

export default store;