import React, { useState } from "react";
import "./Sidebar.css";
import Home from "../Home/Home";
import About from "../About/About";
import WorkExperience from "../WorkExperience/WorkExperience";
import TechStack from "../TechStack/TechStack";
import { BiCodeAlt } from "react-icons/bi";
import SidebarList from "./SidebarList";

const Sidebar = () => {
  const [expandSidebar, setExpandSidebar] = useState(true);

  const handleExpandClick = () => {
    setExpandSidebar(!expandSidebar);
  };

  return (
    <div className="container-fluid sidebar-section">
      <div className={expandSidebar ? "sidebar sidebar-expand" : "sidebar"}>
        <div className="icon-for-sidebar-expand-and-collapse">
          <p onClick={handleExpandClick}>
            <BiCodeAlt size={24} className="sidebar-toggle-icon" />
          </p>
        </div>

        <SidebarList expandSidebar={expandSidebar} />
      </div>

      <div className={expandSidebar ? "content expanded" : "content collapsed"}>
        <div id="home">
          <Home />
        </div>
        <div id="about">
          <About />
        </div>
        <div id="workexperience">
          <WorkExperience />
        </div>
        <div id="techstack">
          <TechStack />
        </div>
        {/* Later: Education, Projects, Certifications, Contact */}
        {/* <div id="education">
          <Education />
        </div>
        <div id="project">
          <Projects />
        </div>
        <div id="certifications">
          <Certifications />
        </div>
        <div id="contactsection">
          <Contact />
        </div> */}
      </div>
    </div>
  );
};

export default Sidebar;
