import React, { useState } from "react";
import "./NavbarMobileView.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import {
  FcNightPortrait,
  FcHome,
  FcTodoList,
  FcContacts,
  FcFactory,
  FcSalesPerformance,
} from "react-icons/fc";
import { MdBiotech, MdCastForEducation } from "react-icons/md";
import { Link } from "react-scroll";
import Switch from "react-switch";

const NavbarMobileView = ({ theme, changeTheme }) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <>
      <div className="mobile-view-navbar">
        <div className="navbar-header">
          <div className="navbar-brand">
            <span className="brand-text">Portfolio</span>
          </div>
          <button className="hamburger-btn" onClick={handleClick} aria-label="Toggle menu">
            {open ? <IoMdClose size={30} /> : <GiHamburgerMenu size={30} />}
          </button>
        </div>
      </div>

      {/* Overlay */}
      {open && <div className="mobile-nav-overlay" onClick={closeMenu}></div>}

      {/* Sidebar Menu */}
      <div className={`mobile-nav ${open ? "mobile-nav-open" : ""}`}>
        <div className="mobile-nav-header">
          <h3>Menu</h3>
          <button className="close-btn" onClick={closeMenu} aria-label="Close menu">
            <IoMdClose size={24} />
          </button>
        </div>

        <ul className="mobile-nav-list">
          <li className="nav-item-mobileview">
            <Link
              to="home"
              spy={true}
              smooth={true}
              duration={100}
              offset={-80}
              onClick={closeMenu}
            >
              <FcHome size={25} />
              <span>Home</span>
            </Link>
          </li>

          <li className="nav-item-mobileview">
            <Link
              to="about"
              spy={true}
              smooth={true}
              duration={100}
              offset={-80}
              onClick={closeMenu}
            >
              <FcNightPortrait size={25} />
              <span>About</span>
            </Link>
          </li>

          <li className="nav-item-mobileview">
            <Link
              to="experience"
              spy={true}
              smooth={true}
              duration={100}
              offset={-80}
              onClick={closeMenu}
            >
              <FcFactory size={25} />
              <span>Work Experience</span>
            </Link>
          </li>

          <li className="nav-item-mobileview">
            <Link
              to="techstack"
              spy={true}
              smooth={true}
              duration={100}
              offset={-80}
              onClick={closeMenu}
            >
              <MdBiotech size={25} color="#f97316" />
              <span>Tech Stack</span>
            </Link>
          </li>

          <li className="nav-item-mobileview">
            <Link
              to="education"
              spy={true}
              smooth={true}
              duration={100}
              offset={-80}
              onClick={closeMenu}
            >
              <MdCastForEducation size={25} color="#fbbf24" />
              <span>Education</span>
            </Link>
          </li>

          <li className="nav-item-mobileview">
            <Link
              to="project"
              spy={true}
              smooth={true}
              duration={100}
              offset={-80}
              onClick={closeMenu}
            >
              <FcTodoList size={25} />
              <span>Projects</span>
            </Link>
          </li>

          {/* <li className="nav-item-mobileview">
            <Link
              to="certifications"
              spy={true}
              smooth={true}
              duration={100}
              offset={-80}
              onClick={closeMenu}
            >
              <FcSalesPerformance size={25} />
              <span>Certifications</span>
            </Link>
          </li> */}

          <li className="nav-item-mobileview">
            <Link
              to="contactsection"
              spy={true}
              smooth={true}
              duration={100}
              offset={-80}
              onClick={closeMenu}
            >
              <FcContacts size={25} />
              <span>Contact</span>
            </Link>
          </li>

          <li className="nav-item-mobileview theme-toggle">
            <div className="theme-switch-wrapper">
              <span className="theme-label">
                {theme === "light" ? "🌞 Light" : "🌙 Dark"}
              </span>
              <Switch
                onChange={changeTheme}
                checked={theme === "light"}
                onColor="#f97316"
                offColor="#1e293b"
                checkedIcon={false}
                uncheckedIcon={false}
                height={24}
                width={48}
                handleDiameter={20}
              />
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default NavbarMobileView;
