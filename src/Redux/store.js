import ProfileReducer from "./ProfileReducer";
import DialogsReducer from "./DialogsReducer";


let store = {
  rerender() {},
  
  subscribe(observer) {
    this.rerender = observer;
  },

  dispatch(action) {
    ProfileReducer(this.state.ContentPage,action)
    DialogsReducer(this.state.MessagePage,action)
    this.rerender(this.state);
  },

  state: {
    ContentPage: {
      m: [
        { message: "hello 1 message", likes: "15" },
        { message: "hello 2 message", likes: "20" },
        { message: "hello 3 message", likes: "10" },
        { message: "hello 4 message", likes: "10" },
      ],
      NewPostText: "it david",
    },

    MessagePage: {
      u: [
        { name: "David", id: "1" },
        { name: "Carina", id: "2" },
        { name: "Sasha", id: "3" },
      ],
      mes: [
        { message: "hi", id: "1" },
        { message: "how r u", id: "2" },
        { message: "Guten tag", id: "3" },
      ],
      NewMessageText:''
    },
  },
};
//store.dispatch({type:'SEND-NEW-MESSAGE',text:'sasdqwe'})


export default store;
