import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Navigation.module.css";
const Navigation = () => {
  return (
    <nav className={s.nav}>
      <div>
        {" "}
        <NavLink to="/Profile" className = { navData => navData.isActive ? s.active : s.a }>Profile</NavLink>
      </div>
      <div>
        {" "}
        <NavLink to="/Dialogs"  className = { navData => navData.isActive ? s.active : s.a }>Dialogs</NavLink>{" "}
      </div>
      <div>
        {" "}
        <NavLink to="/Users"  className = { navData => navData.isActive ? s.active : s.a }>Users</NavLink>{" "}
      </div>
      <div>
        <NavLink to="/News"  className = { navData => navData.isActive ? s.active : s.a }>News</NavLink>{" "}
      </div>
      <div>
        {" "}
        <NavLink to="/Settings"  className = { navData => navData.isActive ? s.active : s.a }>Settings</NavLink>{" "}
      </div>
    </nav>
  );
};
export default Navigation;
