import React from "react";
import S from "./Header.module.css"
import {NavLink} from "react-router-dom";
import s from "./Navigation.module.css";

const Header = (props) => {
  // console.log(props.login)
  return <header className="header">
    <NavLink to="/"  className={S.Header}>Insta</NavLink>


    {props.auth? <div ><img className={S.LoginImg} src='https://cdn.shopify.com/s/files/1/0045/5104/9304/files/Styling-American-Crew-Phillipe-RGMN_58cb1549-9653-4a1e-bbdc-4fee6c4bec4c.jpg?v=1648568598'/> <NavLink className={S.Login} to="/login" >{props.login}</NavLink></div> :<NavLink to="/login"  className={S.Login}>Login</NavLink>}
    <NavLink to="/login"  className={S.Login}></NavLink>
  </header>;
};
export default Header;
