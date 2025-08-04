import React, { useState } from "react";
import { Link } from "react-scroll"; 
import "./Navbar.css";
import menuicon from "../../assets/icons/menuicon.png";
import closeicon from "../../assets/icons/close.png";

const Navbar = () => {
  const [, setMenu] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to control menu visibility
  
  const openMenu = () => {
    setIsMenuOpen(true);
  };
 
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="nav-left">
        <img
          className="img"
          src="https://i.pinimg.com/236x/60/d5/e2/60d5e2af55645d13268c7ee7b5d43996.jpg"
          alt="Logo"
        />
      </div>
      
      <img onClick={openMenu} src={menuicon} alt="Open Menu" className="nav-mob-open" />
    
      {/* Apply 'open' class conditionally based on isMenuOpen state */}
      <ul className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
        <img onClick={closeMenu} src={closeicon} alt="Close Menu" className="nav-mob-close" />
        <li>
          <Link 
            to="home" 
            smooth={true} 
            duration={500} 
            offset={-50} 
            onClick={() => {
              setMenu("home");
              closeMenu(); // Close menu when a link is clicked
            }}
          >
            <p>Home</p>
          </Link>
        </li>
        <li>
          <Link 
            to="about" 
            smooth={true} 
            duration={500} 
            offset={-50} 
            onClick={() => {
              setMenu("about");
              closeMenu();
            }}
          >
            <p>About Me</p>
          </Link>
        </li>
        <li>
          <Link 
            to="services" 
            smooth={true} 
            duration={500} 
            offset={-50} 
            onClick={() => {
              setMenu("skills");
              closeMenu();
            }}
          >
            <p>Certifications</p>
          </Link>
        </li>
        <li>
          <Link 
            to="work" 
            smooth={true} 
            duration={500} 
            offset={-50} 
            onClick={() => {
              setMenu("work");
              closeMenu();
            }}
          >
            <p>Projects</p>
          </Link>
        </li>
        <li>
          <Link 
            to="contact" 
            smooth={true} 
            duration={500} 
            offset={-50} 
            onClick={() => {
              setMenu("contact");
              closeMenu();
            }}
          >
            <p>Contact</p>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;