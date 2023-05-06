import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./style.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <ContentWrapper>
        <ul className="menuItems">
          <li className="menuItem">Terms Of Use</li>
          <li className="menuItem">Privacy-Policy</li>
          <li className="menuItem">About</li>
          <li className="menuItem">Blog</li>
          <li className="menuItem">FAQ</li>
        </ul>
        <div className="infoText">
          Thanks for visiting our website. We aim to provide you with the best
          experience and welcome your feedback. Feel free to contact us through
          my personal portfolio website, you can go to by clicking contact me below. Follow us on social media to stay updated on our
          latest news, promotions, and events. Join our community and share your
          feedback with us.
        </div>
        <div className="socialIcons">
          <a
            href="https://www.facebook.com/profile.php?id=100029064882284"
            target="_blank"
          >
            <span className="icon">
              <FaFacebookF />
            </span>
          </a>
          <a href="https://www.instagram.com/pushparaj1381/" target="_blank">
            <span className="icon">
              <FaInstagram />
            </span>
          </a>
          <a href="https://twitter.com/pushparaj1381" target="_blank">
            <span className="icon">
              <FaTwitter />
            </span>
          </a>
          <a
            href="https://www.linkedin.com/in/pushparaj-mehta-82a801206/?originalSubdomain=in"
            target="_blank"
          >
            <span className="icon">
              <FaLinkedin />
            </span>
          </a>
        </div>
        <div className="developer">
          <p>&copy; 2023 Pushparaj Mehta. All rights reserved.</p>
          <a href="https://www.hpm.com.np" target="_blank">
            Contact Me
          </a>
        </div>
      </ContentWrapper>
    </footer>
  );
};

export default Footer;
