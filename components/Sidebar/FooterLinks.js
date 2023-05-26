import React from "react";
import "./Footerlinks.css"
import { RocketIcon } from "components/Icons/Icons";
import { Link } from "react-router-dom";

function FooterLinks() {
  
    return (
        <div className="router-links">
          <ul>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/ContactUs">Contact Us</Link>
            </li>
            <li>
              <a href="/">Home</a>
            </li>
          </ul>
        </div>
      );
}

export default FooterLinks;
