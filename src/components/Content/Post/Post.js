import React from "react";
import s from "./Post.module.css";

const Post = (props) => {

  return (
    <div className={s.item}>
      <div className={s.item}>
        {" "}
        <img src="https://st.depositphotos.com/2547675/3009/i/450/depositphotos_30094505-stock-photo-time-clock.jpg" />
      </div>
      {props.message}
      <div>
        {" "}
        <button onClick={()=>{props.ToLike( props.id,props.likes+1)}}>{props.likes} Like  id:{props.id}</button>
      </div>
    </div>
  );
};
export default Post;
