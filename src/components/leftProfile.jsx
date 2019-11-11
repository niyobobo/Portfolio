import React from "react";
import profile from "../assets/img/Profile.jpeg";

const contact = () => (
  <div className="profile">
    <div className="cover" />
    <img className="avatar" src={profile} alt="profile" />
    <p className="name">Jean Bosco Niyodusenga</p>
    <p className="position">Software Engineer</p>
    <div className="contact">
      <span className="block">
        <i className="fas fa-phone-alt mr-2"></i>+250 783 282 834
      </span>
      <span className="block">
        <i className="fas fa-envelope mr-2"></i>
        <a
          href="mailto:bosco7209@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          bosco7209@gmail.com
        </a>
      </span>
    </div>
    <div className="social-icon">
      <a className="github" href="https://github.com/niyobobo">
        <i className="fab fa-github"></i>
      </a>
      <a className="linkedin" href="https://www.linkedin.com/in/niyobobo/">
        <i className="fab fa-linkedin-in"></i>
      </a>
      <a className="twitter" href="https://twitter.com/niyobobo_">
        <i className="fab fa-twitter"></i>
      </a>
      <a className="instagram" href="https://www.instagram.com/niyobobo/">
        <i className="fab fa-instagram"></i>
      </a>
    </div>
  </div>
);

export default contact;
