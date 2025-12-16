import React, { useEffect, useRef, useState } from "react";
import "./About.css";
import { motion } from "framer-motion";

const About = () => {
  const canvasRef = useRef(null);
  const [terminalText, setTerminalText] = useState([]);

  // Terminal typing animation
  useEffect(() => {
    const commands = [
      { text: "$ whoami", delay: 0 },
      { text: "> harsh_agarwal", delay: 800 },
      { text: "$ cat skills.txt", delay: 1600 },
      { text: "> Backend Developer", delay: 2400 },
      { text: "> Full Stack Engineer", delay: 2800 },
      { text: "> Problem Solver", delay: 3200 },
      { text: "$ echo $PASSION", delay: 4000 },
      { text: "> Building scalable solutions", delay: 4800 },
      { text: "$ status", delay: 5800 },
      { text: "> Ready to innovate 🚀", delay: 6600 },
    ];

    commands.forEach((cmd) => {
      setTimeout(() => {
        setTerminalText((prev) => [...prev, cmd.text]);
      }, cmd.delay);
    });
  }, []);

  // Particle animation (LEFT SIDE)
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const particles = [];
    const particleCount = 60;

    class Particle {
      constructor() {
        this.x = Math.random() * (canvas.width * 0.5);
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 0.5;
        this.speedX = Math.random() * 0.3 - 0.15;
        this.speedY = Math.random() * 0.3 - 0.15;
        this.opacity = Math.random() * 0.4 + 0.1;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > canvas.width * 0.5) this.x = 0;
        if (this.x < 0) this.x = canvas.width * 0.5;
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

      particles.forEach((a, i) => {
        particles.slice(i + 1).forEach((b) => {
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.strokeStyle = `rgba(96, 165, 250, ${0.15 * (1 - distance / 100)})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        });
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

  const codeSnippets = [
    "class Developer {",
    "  passion = true;",
    "}",
    "while(learning) {",
    "  grow();",
    "}",
    "const future = await build();",
  ];

  return (
    <section className="about-wrapper" id="about" style={{ scrollMarginTop: "120px" }}>
      <canvas ref={canvasRef} className="about-particle-canvas"></canvas>

      {/* Code Rain - LEFT SIDE */}
      <div className="about-code-rain">
        {codeSnippets.map((code, index) => (
          <div
            key={index}
            className="about-code-snippet"
            style={{
              left: `${Math.random() * 30}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${12 + Math.random() * 8}s`,
            }}
          >
            {code}
          </div>
        ))}
      </div>

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

        {/* Terminal Card & Bio */}
        <div className="about-content">
          <motion.div
            className="terminal-card"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Terminal Header */}
            <div className="terminal-header">
              <div className="terminal-buttons">
                <span className="btn-close"></span>
                <span className="btn-minimize"></span>
                <span className="btn-maximize"></span>
              </div>
              <div className="terminal-title">harsh@developer:~$</div>
            </div>

            {/* Terminal Body */}
            <div className="terminal-body">
              {terminalText.map((line, index) => (
                <motion.div
                  key={index}
                  className={line.startsWith("$") ? "terminal-command" : "terminal-output"}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {line}
                </motion.div>
              ))}
              <div className="terminal-cursor">_</div>
            </div>

            {/* Stats */}
            <div className="terminal-stats">
              <div className="stat-item">
                <span className="stat-value">1.5+</span>
                <span className="stat-label">Years</span>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-item">
                <span className="stat-value">10+</span>
                <span className="stat-label">Projects</span>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-item">
                <span className="stat-value">100+</span>
                <span className="stat-label">Problems</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="about-text-section"
            initial={{ opacity: 0, x: 50 }}
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

            {/* Skill Highlights */}
            <div className="skill-highlights">
              <div className="skill-tag">Backend Architecture</div>
              <div className="skill-tag">System Design</div>
              <div className="skill-tag">API Development</div>
              <div className="skill-tag">Database Design</div>
              <div className="skill-tag">Cloud Services</div>
              <div className="skill-tag">Web3</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
