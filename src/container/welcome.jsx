import React, { Component } from "react";
import { Link } from "react-router-dom";
import profile from "../assets/img/home.png";

class Welcome extends Component {
  render() {
    return (
      <div className="content">
        <div className="welcome">
          <div className="intro">
            <h1 className="name">Jean Bosco</h1>
            <h1 className="position">Full-stack software developer</h1>
            <p>
              Making your portfolio can be tough. Should it be simple or
              Complex? Single page or multiple? What should you showcase first?
            </p>
            <Link to="/profile">
              Profile<i className="fas fa-arrow-right ml-2"></i>
            </Link>
          </div>
          <div className="center-side">
            <img src={profile} alt="Jean Bosco" />
            <p>
              <Link>En</Link>
              <Link>Fr</Link>
            </p>
          </div>
          <div className="right-side">
            <p className="copyright">
              &copy; BoBo - {new Date().getFullYear()}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Welcome;
