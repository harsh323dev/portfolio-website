import React from "react";
import "./Home.css";
import Typewriter from "typewriter-effect";
import MyCv from "./cv.pdf";
import { motion } from "framer-motion";

import { FaLinkedin, FaGithub, FaInstagram, FaDiscord } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Home = () => {
  const SOCIAL_LINKS = {
    linkedin: "https://www.linkedin.com/in/harsh323",
    github: "https://github.com/harsh323dev",
    instagram: "https://www.instagram.com/harshagarwal323.ag",
    gmail: "mailto:harshagarwal323.ag@gmail.com",
    discord: "https://discordapp.com/users/harsh323",
  };

  return (
    <div className="home" id="home" style={{ scrollMarginTop: "120px" }}>
      <div className="home-content">
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>Hi, I'm Harsh Agarwal</h1>
          <h3>
            <Typewriter
              options={{
                strings: [
                  "Backend Developer",
                  "Full Stack Developer",
                  "Java & Spring Boot Developer",
                  "Node.js Developer",
                  "Tech Enthusiast",
                  "Blockchain & Web3 Learner",
                ],
                autoStart: true,
                loop: true,
                delay: 5,
                cursor: "▌",
              }}
            />
          </h3>

          <div className="social-links">
            <a
              href={SOCIAL_LINKS.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="social-icon linkedin" />
            </a>

            <a
              href={SOCIAL_LINKS.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <FaGithub className="social-icon github" />
            </a>

            <a
              href={SOCIAL_LINKS.instagram}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram className="social-icon instagram" />
            </a>

            <a href={SOCIAL_LINKS.gmail} aria-label="Gmail">
              <SiGmail className="social-icon gmail" />
            </a>

            <a
              href={SOCIAL_LINKS.discord}
              target="_blank"
              rel="noreferrer"
              aria-label="Discord"
            >
              <FaDiscord className="social-icon discord" />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="button-for-action">
            <a href="#contactsection" className="button-link">
              <div className="hire-me-button">Contact Me</div>
            </a>
            <div className="get-resume-button">
              <a href={MyCv} download="Harsh_Agarwal_Resume.pdf">
                Get Resume
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
