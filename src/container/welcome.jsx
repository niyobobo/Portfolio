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
            <h1 className="position">Full-stack software Engineer</h1>
            <p>
              Four eyes see more than two. Let's work together to turn your idea
              into a working product. <br />I am a passionate and a dreamer
              software engineer who design influential brands and digital
              experiences.
            </p>
            <Link className="btn" to="/profile">
              Profile<i className="fas fa-arrow-right ml-2"></i>
            </Link>
          </div>
          <div className="center-side">
            <img src={profile} alt="Jean Bosco" />
            <p></p>
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
