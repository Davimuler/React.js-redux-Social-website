import {apiFollow, apiUnfollow, getUsers} from "../api/api";
import store from "./store";


const FOLLOW='FOLLOW'
const UNFOLLOW='UNFOLLOW'
const Set_Users='Set_Users'
const SelectPage='SelectPage'
const TotaUsersCount='TotaUsersCount'
const LoadingOn='LoadingOn'
const LoadingOff='LoadingOff'
const STILL_FOLLOWING='STILL_FOLLOWING'

let InitialState={
  UsersData:[],
  PageSize:5,
  TotalUsersCount:20,
  currentPage:1,
    isLoading:true,
    StillFollowingV:[]
};


const UsersReducer=(state=InitialState,action)=>{
  
    switch (action.type){
case FOLLOW:
  return{
 ...state,
UsersData: state.UsersData.map(u=>{
  if(u.id===action.userId)
  {
    return{...u,followed:true}
  }
  return u;
})
}

  case UNFOLLOW:
   return{ ...state,
  UsersData:state.UsersData.map(u=>{
    if(u.id===action.userId)
    {
      return{...u,followed:false}
    }
    return u;
  })
  }
  case Set_Users:
    return{ ...state,UsersData:[...action.users]}
  case SelectPage:
  {
    //alert(action.currentPage)
        return{...state,currentPage: action.currentPage}
      }
      case TotaUsersCount:
      {
        return{...state,TotalUsersCount: action.TotalCount}
      }
        case LoadingOn:
        {
            return{...state,isLoading: true}
        }
        case LoadingOff:
        {
            return{...state,isLoading: false}
        }
        case STILL_FOLLOWING:
        {
            return{...state,StillFollowingV: action.StillFollowingV?[...state.StillFollowingV,action.userId
                ]:state.StillFollowingV.filter(id=>id!=action.userId)}
        }

    default:return state;
    }
}
export const SetUsers=(users)=>({type:Set_Users,users})
export const Follow=(userId)=>({type:FOLLOW,userId})
export const Unfollow=(userId)=>({type:UNFOLLOW,userId})
export const SetCurrentPage=(currentPage)=>({type:SelectPage,currentPage:currentPage})
export const SetTotalUsersCount=(TotalCount)=>({type:TotaUsersCount,TotalCount:TotalCount})
export const LoadingOnAc=()=>({type:LoadingOn})
export const LoadingOffAc=()=>({type:LoadingOff})
export const StillFollowing=(StillFollowingV,userId)=>({type:STILL_FOLLOWING,StillFollowingV:StillFollowingV,userId:userId})

export const GetUsersThunkCreator=(currentPage,PageSize)=>{
    return(dispatch)=>{
        getUsers(currentPage,PageSize).then(data=>{
            dispatch( SetUsers(data.items))
            dispatch( SetTotalUsersCount(data.totalCount))
            dispatch(LoadingOffAc())
        })
    }
}

export const UnfollowThunk=(userId)=>{
    return(dispatch)=>{
        dispatch(StillFollowing(true,userId))
         apiUnfollow(userId).then(data=>{
            if(data.resultCode===0){
                dispatch(Unfollow(userId))
            }
            dispatch(StillFollowing(false,userId))
        })
    }
}
export const FollowThunk=(userId)=>{
    return(dispatch)=>{
        dispatch(StillFollowing(true,userId))
        apiFollow(userId).then(data=>{
            if(data.resultCode===0){
                dispatch(Follow(userId))
            }
            dispatch(StillFollowing(false,userId))
        })
    }
}
export const ChangePageThunk=(PageNumber,PageSize)=>{
    return(dispatch)=>{
        dispatch(SetCurrentPage(PageNumber))
        dispatch(LoadingOnAc())
        getUsers(PageNumber,PageSize).then(data=>{
            dispatch(LoadingOffAc())
            dispatch(SetUsers(data.items))
        })
    }
}

export default UsersReducer;