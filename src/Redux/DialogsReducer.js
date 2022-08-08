const UpdateMessageText = "UPDATE-MESSAGE-TEXT";
const SendNewMessage = "SEND-NEW-MESSAGE";


let InitialState={
  u: [
    { name: "David", id: "1" },
    { name: "Carina", id: "2" },
    { name: "Sasha", id: "3" },
  ],
  mes: [
    { message: "hi", id: "1" },
    { message: "how r u", id: "2" },
    { message: " tag", id: "3" },
  ],
  NewMessageText:''
}

 const DialogsReducer = (state=InitialState, action) => {
  //debugger;
  switch (action.type) {
    case UpdateMessageText:
      {
      let stateCopy={...state}
      stateCopy.NewMessageText = action.NewText;
      //state.NewMessageText = action.NewText;
      return stateCopy;
     // return state;
      }
    case SendNewMessage:
      let message = { message: action.Ntext, id: "10" };
      let stateCopy={...state};
      stateCopy.mes=[...state.mes];
      stateCopy.mes.push(message)
     // state.mes.push(message);
     stateCopy.NewMessageText='';
      //state.NewMessageText = "";
      //return state;
      return stateCopy;
    default:
      return state;
  }
};
export const UpdateMessageTextCreator=()=>({type:UpdateMessageText});
export const SendNewMessageCreator=(text)=>({type:SendNewMessage,Ntext:text});
export default DialogsReducer;