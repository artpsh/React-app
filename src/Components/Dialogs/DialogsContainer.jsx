import React from "react"
import {updateNewMessageText, sendMessage} from "../../Redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

let mapStateToProps = (state) => {
    return {
        dialogs: state.dialogs,
        isAuth: state.auth.isAuth,
    }
}


export default compose(
    connect(mapStateToProps, { updateNewMessageText,sendMessage }),
    withAuthRedirect
)(Dialogs)