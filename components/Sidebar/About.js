import React, { Component } from "react";
import "./AboutUs.css";

class AboutUs extends Component {
  render() {
    return (
      <div className="about">
        <h1>About Us</h1>
        <p>
          We are a team of developers who are passionate about creating innovative and user-friendly web applications. We believe that technology can be used to make people's lives better, and we are committed to using our skills to make a positive impact on the world.
        </p>
        <p>
          We are always looking for new ways to improve our skills and knowledge, and we are always open to new ideas. We believe that collaboration is key to success, and we are always happy to work with others to achieve our goals.
        </p>
        <p>
          We are excited to be a part of the React community, and we are grateful for the opportunity to share our work with you. We hope that you enjoy our website, and we look forward to hearing from you.
        </p>
        <button className="about-btn" onClick={this.goBack}>Back</button>
      </div>
    );
  }

  goBack = () => {
    window.history.back();
  };
}

export default AboutUs;
