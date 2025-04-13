import React, { useState, useRef } from "react";
import { Link } from "react-scroll";  // ✅ Using react-scroll for smooth scrolling
import "./Navbar.css";
import underline from "../../assets/icons/underline.png";
import menuicon from "../../assets/icons/menuicon.png";
import closeicon from "../../assets/icons/close.png";

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const menuRef = useRef();

  // Function to open mobile menu
  const openMenu = () => {
    menuRef.current.style.right = "0";
  };

  // Function to close mobile menu
  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
  };

  return (
    <nav className="navbar">
      <img
        className="img"
        src="https://i.pinimg.com/236x/60/d5/e2/60d5e2af55645d13268c7ee7b5d43996.jpg"
        alt="Logo"/>
      <img onClick={openMenu} src={menuicon} alt="Open Menu" className="nav-mob-open" />
      <ul ref={menuRef} className="nav-menu">
        <img onClick={closeMenu} src={closeicon} alt="Close Menu" className="nav-mob-close" />
        <li>
          <Link to="home" smooth={true} duration={500} offset={-50} onClick={() => setMenu("home")}>
            <p>Home</p>
          </Link>
          {menu === "home" && <img src={underline} alt="underline" />}
        </li>
        <li>
          <Link to="about" smooth={true} duration={500} offset={-50} onClick={() => setMenu("about")}>
            <p>About Me</p>
          </Link>
          {menu === "about" && <img src={underline} alt="underline" />}
        </li>
        <li>
          <Link to="services" smooth={true} duration={500} offset={-50} onClick={() => setMenu("skills")}>
            <p>Certifications</p>
          </Link>
          {menu === "skills" && <img src={underline} alt="underline" />}
        </li>
        <li>
          <Link to="work" smooth={true} duration={500} offset={-50} onClick={() => setMenu("work")}>
            <p>Projects</p>
          </Link>
          {menu === "work" && <img src={underline} alt="underline" />}
        </li>

        <li>
          <Link to="contact" smooth={true} duration={500} offset={-50} onClick={() => setMenu("contact")}>
            <p>Contact</p>
          </Link>
          {menu === "contact" && <img src={underline} alt="underline" />}
        </li>
      </ul>
      <div className="nav-connect">
        <Link to="contact" smooth={true} duration={500} offset={-50}>
          Connect With Me
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
