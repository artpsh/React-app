import React from "react";
import './App.css';
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import Settings from "./Components/Settings/Settings";
import {BrowserRouter, Route} from "react-router-dom";




const App = (props) => {

    return (
            <div className="app-wrapper">
                <Header/>
                <Navbar /*state={props.state.sidebar}*//>
                <div className="app-wrapper-content">
                    <Route path="/profile"
                           render={() => <Profile /> }/>

                    <Route path="/dialogs"
                           render={() => <DialogsContainer /> }/>
                    <Route path="/news" component={News}/>
                    <Route path="/music" component={Music}/>
                    <Route path="/settings" component={Settings}/>
                </div>
            </div>
    );
}
export default App
