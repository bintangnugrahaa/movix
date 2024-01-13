import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaGithub,
} from "react-icons/fa";

import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./style.scss";

const Footer = () => {
  const copyright = "© Create with ❤️ by Muhammad Bintang Nugraha.";

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
        <div className="socialIcons">
          <a
            href="https://www.facebook.com/muhammad.bintangnuhgraha"
            className="icon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://github.com/bintangnugrahaa?tab=repositories/"
            className="icon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.github.com/bintangnugrahaa/"
            className="icon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
        </div>
        <div className="infoText " style={{ marginTop: "20px" }}>{copyright}</div>
      </ContentWrapper>
    </footer>
  );
};

export default Footer;
