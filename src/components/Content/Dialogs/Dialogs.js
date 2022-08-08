import React from "react";
import {NavLink} from "react-router-dom";
import { Navigate } from "react-router-dom";
import s from "./Dialogs.module.css";

const DialogItem = (props) => {
  let path = "/Dialogs/" + props.id;
  return (
    <div className={s.dialog}>
      <NavLink to={path}> {props.name} </NavLink>
    </div>
  );
};
const MessageItem = (props) => {
  return <div className={s.messageItem}>{props.message}</div>;
};

const Dialogs = (props) => {
  let messages = props.mes.map((m) => <MessageItem message={m.message} />);
  let users = props.u.map((u) => <DialogItem name={u.name} id={u.id} />);
  let messageValue = React.createRef();
  let onMessageChange = () => {
    props.onMessageChange();
  };
  let sendNewMessage = () => {
    let nm = messageValue.current.value;
    props.sendNewMessage(nm);
  };
  if(!props.isAuth){
      return <Navigate to='/login'/>
  }
  return (

    <div>
      <div className={s.Dialogs}>
        <div className={s.dialogItems}>{users}</div>
        <div className={s.messages}>{messages}</div>
      </div>
      <textarea
        ref={messageValue}
        onChange={onMessageChange}
        placeholder="Enter your message"
        value={props.NewMessageText}
      ></textarea>
      <button onClick={sendNewMessage}>Send</button>
    </div>
  );
};
export default Dialogs;
