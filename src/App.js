import React from "react";
import './App.css';
import Navbar from "./Components/Navbar/Navbar";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import Settings from "./Components/Settings/Settings";
import {BrowserRouter, Route} from "react-router-dom";
import UserContainer from "./Components/Users/UserContainer";
import ProfileContainer from "./Components/Profile/ProfileContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";




const App = (props) => {

    return (
            <div className="app-wrapper">
                <HeaderContainer/>
                <Navbar />
                <div className="app-wrapper-content">
                    <Route path="/profile/:userId?"
                           render={() => <ProfileContainer /> }/>

                    <Route path="/dialogs"
                           render={() => <DialogsContainer /> }/>
                    <Route path="/news" component={News}/>
                    <Route path="/music" component={Music}/>
                    <Route path="/users"
                           render={() => <UserContainer /> }/>
                    <Route path="/settings" component={Settings}/>
                </div>
            </div>
    );
}
export default App
