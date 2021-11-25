import React from "react";
import Profile from "./Profile";
import {withRouter} from 'react-router-dom';
import {getUserProfile} from "../../Redux/profile-reducer";
import {connect} from "react-redux";
/*import {withAuthRedirect} from "../../hoc/withAuthRedirect";*/
import {compose} from "redux";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2;
        }
        this.props.getUserProfile(userId);
        this.props.getUserStatus(userId);
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profile.profile,
    status: state.profile.status
});

export default compose(
    connect(mapStateToProps, {getUserProfile}),
    withRouter,
    /*withAuthRedirect*/
    )(ProfileContainer)


