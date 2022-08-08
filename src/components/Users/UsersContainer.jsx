
import Users from "./Users"
import { connect } from "react-redux";

import {
  Follow,
  Unfollow,
  SetUsers,
  SetCurrentPage,
  SetTotalUsersCount,
  LoadingOnAc, LoadingOffAc, StillFollowing, GetUsersThunkCreator, UnfollowThunk, FollowThunk, ChangePageThunk
} from "../../Redux/UsersReducer";



let mapStateToProps=(state,dispatch)=>{
  return{
    UsersData:state.UsersPage.UsersData,
    PageSize:state.UsersPage.PageSize,
    TotalUsersCount:state.UsersPage.TotalUsersCount,
    currentPage: state.UsersPage.currentPage,
    isLoading:state.UsersPage.isLoading,
    StillFollowingV:state.UsersPage.StillFollowingV,
    dispatch:dispatch
  }
}

// let mapDispatchToProps=(dispatch)=>{
//   return{
//     Follow: (userId) => {
//       dispatch(FollowAC(userId));
//     },
//     Unfollow:(userId)=>{
//       dispatch(UnfollowAC(userId))
//     },
//     SetUsers:(users)=>{
//       dispatch(SetUsersAC(users))
//     },
//     SetCurrentPage:(currentPage)=>{
//       dispatch(SetCurrentPageAc(currentPage))
//     },
//     SetTotalUsersCount:(TotalCount)=>{
//       dispatch(SetTotalUsersCountAC(TotalCount))
//     },
//     LoadingOn:()=>{
//       dispatch(LoadingOnAc())
//     },
//     LoadingOff:()=>{
//       dispatch(LoadingOffAc())
//     },
//   }
//
// }

let UsersContainer= connect(mapStateToProps,{ChangePageThunk,FollowThunk,UnfollowThunk,GetUsersThunkCreator, StillFollowing,Follow,Unfollow,SetUsers,SetCurrentPage,
  SetTotalUsersCount,LoadingOn:LoadingOnAc,LoadingOff:LoadingOffAc},)(Users);
export default UsersContainer;