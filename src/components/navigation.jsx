import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => (
  <div className="nav">
    <NavLink exact to="/" activeClassName="activeMenu">
      <i className="fas fa-home"></i>
      <span className="block">Home</span>
    </NavLink>
    <NavLink exact to="/resume" activeClassName="activeMenu">
      <i className="fas fa-laptop-code"></i>
      <span className="block">Resume</span>
    </NavLink>
    <NavLink exact to="/profile" activeClassName="activeMenu">
      <i className="fas fa-address-book"></i>
      <span className="block">Profile</span>
    </NavLink>
  </div>
);

export default Navigation;
