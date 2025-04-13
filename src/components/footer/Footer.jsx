import React from "react";
import "./Footer.css";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa"; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          <p>
            Hi, I am <strong>Harihara Sudhan</strong>, a Frontend & AR/VR Developer.
          </p>
        </div>
        <div className="footer-social">
          <a href="https://github.com/Darknight104" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/hari-harasudhan-m-3b3929266/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a>
        </div>
      </div>

      <hr />

      <div className="footer-bottom">
        <p className="footer-bottom-left">© 2025 Harihara Sudhan. All rights reserved.</p>
        <div className="footer-bottom-right">
          <a href="#">Terms of Service</a>
          <a href="#">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
