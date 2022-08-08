import {
  AddPostActionCreator, SetProfileAc, ToLikeAc,
  UpdatePostTextActionCreator,
} from "../../Redux/ProfileReducer";
import Content from "./Content";
import { connect } from "react-redux";
import React from "react";
import {apiGetProfile} from "../../api/api";
import { Navigate } from "react-router-dom";
import {AuthRedirect} from "../HOC/AuthRedirect";
import {compose} from "redux";


class ContentContainer  extends React.Component{
  componentDidMount(){
    apiGetProfile().then(data=>{
      this.props.SetProfile(data)
    })
    // axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then(responce=>{
    //   this.props.SetProfile(responce.data)
    //
    // })
  }
  render()
  {

    return <Content {...this.props}/>   }

};



let mapStateToProps = (state) => {
  return {
    m: state.ContentPage.m,
    NewPostText: state.ContentPage.NewPostText,
    profile:state.ContentPage.profile,
    isLoading:state.ContentPage.isLoading,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    addPost: () => {
      dispatch(AddPostActionCreator());
    },
    UpdateText: (text) => {
      dispatch(UpdatePostTextActionCreator(text));
    },
    ToLike:(id,likes)=>{
      dispatch(ToLikeAc(id,likes))
    },
    SetProfile:(profile)=>{
      dispatch(SetProfileAc(profile))
    }
  };
};
export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    AuthRedirect)(ContentContainer)


