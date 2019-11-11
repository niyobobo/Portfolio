import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => (
  <div className="nav">
    <NavLink exact to="/" activeClassName="activeMenu">
      <i className="fas fa-user-alt"></i>
      <span className="block">About</span>
    </NavLink>
    <NavLink exact to="/resume" activeClassName="activeMenu">
      <i className="fas fa-file-signature"></i>
      <span className="block">Resume</span>
    </NavLink>
    <NavLink exact to="/work" activeClassName="activeMenu">
      <i className="fas fa-laptop-code"></i>
      <span className="block">Work</span>
    </NavLink>
    <NavLink exact to="/profile" activeClassName="activeMenu">
      <i className="fas fa-address-book"></i>
      <span className="block">Profile</span>
    </NavLink>
  </div>
);

export default Navigation;
