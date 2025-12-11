import React from "react";
import "./About.css";
import profilePic from "../../Image/Profile.jpeg";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      className="about-wrapper"
      id="about"
      style={{ scrollMarginTop: "120px" }}
    >
      <div className="container about-section">
        <div className="row">
          {/* Left: image */}
          <div className="col-xl-5 col-lg-5 col-md-12 col-sm-12">
            <motion.div
              className="about-image"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img src={profilePic} alt="Harsh Agarwal" />
            </motion.div>
          </div>

          {/* Right: text */}
          <div className="col-xl-7 col-lg-7 col-md-12 col-sm-12">
            <motion.div
              className="about-details"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="about-title">
                <h5>About Me</h5>
                <span className="line"></span>
              </div>

              <p>
                I'm Harsh Agarwal, a backend-focused full stack developer with
                experience building production-grade applications using Java,
                Spring Boot, Node.js, and modern JavaScript frameworks. I
                currently work as an Assistant Systems Engineer at TCS, where I
                contribute to scalable, maintainable backend services and APIs.
              </p>

              <p>
                Over the last few years, I've built projects like job-ready
                portals, RFP management tools, and analytics dashboards,
                focusing on clean architecture, database design, and real-world
                performance. I enjoy solving hard problems, improving developer
                experience, and writing code that is both readable and robust.
              </p>

              <p>
                Beyond backend engineering, I'm actively exploring
                cybersecurity and blockchain / Web3, and I regularly experiment
                with new technologies, cloud platforms, and open-source tools to
                stay sharp and keep learning.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
