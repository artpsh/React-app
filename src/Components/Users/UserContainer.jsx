import React from "react";
import Users from "./Users";
import {
    followAC,
    setCurrentPageAC,
    setTotalListCountAC,
    setTotalUsersCountAC,
    setUsersAC,
    unfollowAC
} from "../../Redux/users-reducer";
import {connect} from "react-redux";
import UsersC from "./UsersC";


let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageAC(pageNumber))
        },
        setTotalUsersCount: (totalCount) => {
            dispatch(setTotalUsersCountAC(totalCount))
        },
    }

}


export default connect(mapStateToProps, mapDispatchToProps)(UsersC);