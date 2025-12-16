import React, { useEffect, useRef } from "react";
import "./About.css";
import profilePic from "../../Image/Profile.jpeg";
import { motion } from "framer-motion";

const About = () => {
  const canvasRef = useRef(null);

  // Particle animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const particles = [];
    const particleCount = 50;

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 0.5;
        this.speedX = Math.random() * 0.3 - 0.15;
        this.speedY = Math.random() * 0.3 - 0.15;
        this.opacity = Math.random() * 0.3 + 0.1;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > canvas.width) this.x = 0;
        if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0;
        if (this.y < 0) this.y = canvas.height;
      }

      draw() {
        ctx.fillStyle = `rgba(96, 165, 250, ${this.opacity})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((particle) => {
        particle.update();
        particle.draw();
      });
      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="about-wrapper" id="about" style={{ scrollMarginTop: "120px" }}>
      <canvas ref={canvasRef} className="about-particle-canvas"></canvas>

      <div className="about-container">
        {/* Section Header */}
        <motion.div
          className="about-header"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            About <span className="highlight">Me</span>
          </h2>
          <div className="title-underline"></div>
        </motion.div>

        {/* Profile Card */}
        <div className="about-content">
          <motion.div
            className="profile-card"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="profile-image-wrapper">
              <div className="profile-ring"></div>
              <img src={profilePic} alt="Harsh Agarwal" className="profile-img" />
              <div className="profile-badge">
                <span>🚀</span>
              </div>
            </div>
            <h3 className="profile-name">Harsh Agarwal</h3>
            <p className="profile-role">Full Stack Developer</p>
          </motion.div>

          <motion.div
            className="about-text-section"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="about-bio">
              <p>
                I'm a <strong>backend-focused full-stack developer</strong> with 1.5+ years of experience building production-grade applications using <strong>Java, Spring Boot, Node.js</strong>, and modern JavaScript frameworks.
              </p>
              <p>
                Currently working as a <strong>Software Engineer</strong>, where I contribute to scalable, maintainable backend services and APIs that power enterprise solutions.
              </p>
              <p>
                I've built projects like <strong>job-ready portals, RFP management tools, and analytics dashboards</strong>, focusing on clean architecture, database design, and real-world performance optimization.
              </p>
              <p>
                Beyond backend engineering, I'm actively exploring <strong>cybersecurity, blockchain/Web3</strong>, and continuously experimenting with new technologies to stay sharp and keep evolving.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
