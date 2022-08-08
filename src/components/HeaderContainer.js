import React from "react";
import S from "./Header.module.css"
import {NavLink} from "react-router-dom";
import s from "./Navigation.module.css";
import Header from "./Header";
import {connect} from "react-redux";
import * as axios from "axios";
import {setUserData} from "../Redux/AuthReducer";
import {AddPostActionCreator, SetProfileAc, ToLikeAc, UpdatePostTextActionCreator} from "../Redux/ProfileReducer";
import {apiHeaderAuth} from "../api/api";



class HeaderContainer extends React.Component
{
componentDidMount() {
  apiHeaderAuth().then(data=>{ this.props.setUserData(data.data) })

}

  render() {
    return <Header {...this.props}></Header>

  }

};

let mapStateToProps=(state)=> {
  return {
    login:state.Auth.login,
    auth:state.Auth.isAuth
  }
}


export default connect(mapStateToProps, {setUserData})(HeaderContainer);
//export default HeaderContainer;
