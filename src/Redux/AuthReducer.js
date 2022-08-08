const SET_USER_DATA='SET_USER_DATA'

let InitialState={
    UserId:null,
    email:null,
login:"david",
    isAuth:false
}

 const AuthReducer = (state=InitialState, action) => {
  //debugger;
  switch (action.type) {
     case SET_USER_DATA:
     {
      return {
          ...state,
          ...action.data,
          isAuth:true
      }
      }

    default:
      return state;
  }
};
export const setUserData=(data)=>({type:SET_USER_DATA,data:data});

// export const SendNewMessageCreator=(text)=>({type:SendNewMessage,Ntext:text});
export default AuthReducer;