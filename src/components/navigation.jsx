import React from "react";

const Navigation = () => (
  <nav className="nav">
    <a href="/">
      <i className="fas fa-user-alt"></i>
      <span className="block">About</span>
    </a>
    <a href="/resume">
      <i className="fas fa-file-signature"></i>
      <span className="block">Resume</span>
    </a>
    <a href="/work">
      <i className="fas fa-laptop-code"></i>
      <span className="block">Work</span>
    </a>
    <a href="/profile">
      <i className="fas fa-address-book"></i>
      <span className="block">Profile</span>
    </a>
  </nav>
);

export default Navigation;
