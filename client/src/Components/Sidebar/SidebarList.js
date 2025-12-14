import React from "react";
import "./SidebarList.css";
import profilepic from "../../Image/Profile.jpeg";

import {
  FcNightPortrait,
  FcHome,
  FcTodoList,
  FcContacts,
  FcFactory,
  FcSalesPerformance,
} from "react-icons/fc";

import { MdBiotech } from "react-icons/md";
import { MdCastForEducation } from "react-icons/md";

const scrollToSection = (id) => {
  const el = document.getElementById(id);
  console.log(`Scroll to ${id}:`, el);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  } else {
    console.log(`❌ Element with id="${id}" NOT FOUND`);
  }
};

const SidebarList = ({ expandSidebar }) => {
  return (
    <React.Fragment>
      {expandSidebar ? (
        <div className="navbar-items">
          <div className="sidebar-profile-pic">
            <img src={profilepic} alt="Harsh Agarwal" />
          </div>

          <ul>
            <li className="nav-item" onClick={() => scrollToSection("home")}>
              <FcHome size={25} /> Home
            </li>

            <li className="nav-item" onClick={() => scrollToSection("about")}>
              <FcNightPortrait size={25} /> About
            </li>

            <li className="nav-item" onClick={() => scrollToSection("workexperience")}>
              <FcFactory size={25} /> Work Experience
            </li>

            <li className="nav-item" onClick={() => scrollToSection("techstack")}>
              <MdBiotech size={25} color="orange" /> Tech Stack
            </li>

            <li className="nav-item" onClick={() => scrollToSection("education")}>
              <MdCastForEducation size={25} color="yellow" /> Education
            </li>

            <li className="nav-item" onClick={() => scrollToSection("projects")}>
              <FcTodoList size={25} /> Projects
            </li>

            <li className="nav-item" onClick={() => scrollToSection("certifications")}>
              <FcSalesPerformance size={25} /> Certifications
            </li>

            <li className="nav-item" onClick={() => scrollToSection("contactsection")}>
              <FcContacts size={25} /> Contact
            </li>
          </ul>
        </div>
      ) : (
        <div className="navbar-items-only-icons">
          <ul>
            <li className="nav-item" onClick={() => scrollToSection("home")}>
              <FcHome size={25} />
            </li>

            <li className="nav-item" onClick={() => scrollToSection("about")}>
              <FcNightPortrait size={25} />
            </li>

            <li className="nav-item" onClick={() => scrollToSection("workexperience")}>
              <FcFactory size={25} />
            </li>

            <li className="nav-item" onClick={() => scrollToSection("techstack")}>
              <MdBiotech size={25} color="orange" />
            </li>

            <li className="nav-item" onClick={() => scrollToSection("education")}>
              <MdCastForEducation size={25} color="yellow" />
            </li>

            <li className="nav-item" onClick={() => scrollToSection("projects")}>
              <FcTodoList size={25} />
            </li>

            <li className="nav-item" onClick={() => scrollToSection("certifications")}>
              <FcSalesPerformance size={25} />
            </li>

            <li className="nav-item" onClick={() => scrollToSection("contactsection")}>
              <FcContacts size={25} />
            </li>
          </ul>
        </div>
      )}
    </React.Fragment>
  );
};

export default SidebarList;
