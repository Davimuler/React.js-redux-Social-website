const UpdatePostText='UPDATE-POST-TEXT'
const AddPost='ADD-POST'
const ToLike='ToLike'
const Set_Profile='SetProfile'

let InitialState={
  m: [
    { message: "hello 1 message", likes: 15 ,id:1},
    { message: "hello 2 message", likes: 20 ,id:2},
    { message: "hello 3 message", likes: 10 ,id:3},
    { message: "hello 4 message", likes: 10 ,id:4},
  ],
  NewPostText: "it david",
    profile:{
      photos:{
          large:'https://www.tudorwatch.com/-/media/tudorwatch/pressroom/ambassadors/david-beckham/david-beckham-pressroom.jpg'
      }
    },
    isLoading: true
};


const ProfileReducer=(state=InitialState,action)=>{
  
    switch (action.type){
case AddPost:
    { 
         return{  m:[...state.m,{
          message: state.NewPostText,
          likes: " 0",
        }],
      NewPostText:''}
      }
    case UpdatePostText:
      return{ ...state,
        NewPostText:action.NewText}
        case ToLike:
            return {
        ...state,
                m: state.m.map(u=>{
                if(u.id===action.id)
                {
                    return{...u,likes:action.likes}
                }
                return u;
            })
        }
        case Set_Profile:
            return{ ...state,
                profile: action.profile}
    default:return state;
    }
}
export const AddPostActionCreator = () => ({type: AddPost});
export const UpdatePostTextActionCreator=(text)=>({type: UpdatePostText, NewText:text})
export const ToLikeAc=(id,likes)=>({type:ToLike,id:id,likes:likes})
export const SetProfileAc=(profile)=>({type:Set_Profile,profile})
export default ProfileReducer;