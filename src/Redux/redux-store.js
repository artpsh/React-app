import {combineReducers} from "redux";
import ProfileReducer from "./profile-reducer";
import SidebarReducer from "./sidebar-reducer";
import DialogsReducer from "./dialogs-reducer";
import Friend from "../Components/Navbar/Friends/Friend";
import classes from "../Components/Navbar/Navbar.module.css";
import {NavLink} from "react-router-dom";

const {createStore} = require("redux");

let reducers = combineReducers({
    profile: ProfileReducer,
    dialogs: DialogsReducer,
    sidebar: SidebarReducer
})



let store = createStore(reducers);

export default store;