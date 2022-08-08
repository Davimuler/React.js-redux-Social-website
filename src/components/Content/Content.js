import React from "react";
//import { findAllInRenderedTree } from "react-dom/test-utils";
import Post from "./Post/Post";
//import { AddPostActionCreator,UpdatePostTextActionCreator } from "../../Redux/ProfileReducer";
import S from './Content.module.css'
import Loading from "../Loading";
import AboutProfileInfo from "./AboutProfileInfo";

const Content = (props) => {
  let posts=props.m.map(p=> <Post ToLike={props.ToLike} id={p.id} message={p.message} likes={p.likes} />);
  let postValue=React.createRef();
  let addPost=()=>{
    props.addPost();
  }
let UpdateText=()=>{
  let nt=postValue.current.value
  props.UpdateText(nt)
}

  return (
    <div className="content">
        {/*<div className={S.Profile}>  <img src={props.profile.photos.large} />*/}
        {/*   </div>*/}
        <div className={S.Profile}>  <img src={props.profile.photos.large===null?'https://www.tudorwatch.com/-/media/tudorwatch/pressroom/ambassadors/david-beckham/david-beckham-pressroom.jpg':props.profile.photos.large} />
        <AboutProfileInfo aboutMe={props.profile.aboutMe}/>
        </div>
      <div> 
        <textarea onChange={UpdateText} ref={postValue} value={props.NewPostText}></textarea>
        </div>
        <div>
        <button onClick={addPost}>add post</button>
      </div>
      {posts}
    </div>
  );
};
export default Content;
