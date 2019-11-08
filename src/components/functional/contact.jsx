import React from "react";
import profile from "../../assets/img/Profile.jpeg";

const Contact = () => (
  <div className="content">
    <div className="profile">
      <div className="cover" />
      <img className="avatar" src={profile} alt="profile" />
      <p className="name">Jean Bosco Niyodusenga</p>
      <p className="position">Software Engineer</p>
      <div className="contact">
        <span className="block">
          <i class="fas fa-phone-alt mr-2"></i> +250 783 282 834
        </span>
        <span className="block">
          <i class="fas fa-envelope mr-2"></i>
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
        <a href="https://github.com/niyobobo">
          <i class="fab fa-github"></i>
        </a>
        <a href="https://www.linkedin.com/in/niyobobo/">
          <i class="fab fa-linkedin-in"></i>
        </a>
        <a href="https://twitter.com/niyobobo_">
          <i class="fab fa-twitter"></i>
        </a>
        <a href="https://www.instagram.com/niyobobo/">
          <i class="fab fa-instagram"></i>
        </a>
      </div>
    </div>
    <div className="info" />
  </div>
);

export default Contact;
