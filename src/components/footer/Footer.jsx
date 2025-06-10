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
        </div>
      </div>

      <hr />

      <div className="footer-bottom">
        <div className="footer-bottom-right"> 
        </div>
      </div>
    </footer>
  );
};

export default Footer;



