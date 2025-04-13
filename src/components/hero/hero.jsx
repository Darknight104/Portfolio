import React from "react";
import "./hero.css";
import Profile from "../../assets/profile.jpg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <motion.div
      id="home"
      className="hero"
      initial={{ opacity: 0, y: 50 }} // Start invisible and slightly lower
      animate={{ opacity: 1, y: 0 }} // Fade in and move up
      transition={{ duration: 1.5, ease: "easeOut" }} // Smooth transition
    >
      <motion.img
        src={Profile}
        alt=""
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      />

      <motion.h1
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <span>Hi, I am Harihara Sudhan,</span>AR/VR Developer
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.8 }}
      >
        Hi, I am Harihara Sudhan frontend developer and AR/VR developer
      </motion.p>

      <motion.div
        className="hero-action"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <div className="heroconnect">
           <Link to="contact" smooth={true} duration={500} offset={-50}>
                    Connect With Me
          </Link>
        </div>
        <div className="hero-resume">My Resume</div>
      </motion.div>
    </motion.div>
  );
};

export default Hero;
