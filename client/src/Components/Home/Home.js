import React, { useEffect, useRef } from "react";
import "./Home.css";
import Typewriter from "typewriter-effect";
import MyCv from "./cv.pdf";
import { FaLinkedin, FaGithub, FaInstagram, FaDiscord } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Home = () => {
  const canvasRef = useRef(null);

  const SOCIAL_LINKS = {
    linkedin: "https://www.linkedin.com/in/harsh323",
    github: "https://github.com/harsh323dev",
    instagram: "https://www.instagram.com/harshagarwal323.ag",
    gmail: "mailto:harshagarwal323.ag@gmail.com",
    discord: "https://discordapp.com/users/harsh323",
  };

  const codeSnippets = [
    "const magic = () => '✨';",
    "while(alive) { code(); }",
    "return success || retry();",
    "if(dreams) { achieve(); }",
    "function build() { ship(); }",
    "git commit -m 'life'",
    "npm run happiness",
    "await greatness();",
    "throw new Ideas();",
    "console.log('🚀');",
    "import passion from 'life';",
    "export default dreams;",
  ];

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    const particleCount = 80;

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 1;
        this.speedX = Math.random() * 0.5 - 0.25;
        this.speedY = Math.random() * 0.5 - 0.25;
        this.opacity = Math.random() * 0.5 + 0.2;
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
        ctx.fillStyle = `rgba(249, 115, 22, ${this.opacity})`;
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

          if (distance < 120) {
            ctx.strokeStyle = `rgba(249, 115, 22, ${0.15 * (1 - distance / 120)})`;
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
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="home-container" id="home" style={{ scrollMarginTop: "120px" }}>
      <canvas ref={canvasRef} className="particle-canvas"></canvas>

      <div className="code-rain">
        {codeSnippets.map((code, index) => (
          <div
            key={index}
            className="code-snippet"
            style={{
              left: `${Math.random() * 90}%`,
              animationDelay: `${Math.random() * 15}s`,
              animationDuration: `${15 + Math.random() * 10}s`,
            }}
          >
            {code}
          </div>
        ))}
      </div>

      <div className="home-content">
        <div className="glitch-wrapper">
          <h1 className="glitch" data-text="Hi, I'm Harsh Agarwal">
            Hi, I'm Harsh Agarwal
          </h1>
        </div>

        <div className="typewriter-container">
          <Typewriter
            options={{
              strings: [
                "Backend Developer 🚀",
                "Full Stack Developer 💻",
                "Java & Spring Boot Developer ☕",
                "Node.js Developer ⚡",
                "Tech Enthusiast 🔥",
                "Blockchain & Web3 Learner 🌐",
              ],
              autoStart: true,
              loop: true,
              delay: 80,
              deleteSpeed: 50,
            }}
          />
        </div>

        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-number">1.5+</div>
            <div className="stat-label">Years Experience</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">10+</div>
            <div className="stat-label">Projects Built</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">100+</div>
            <div className="stat-label">Problems Solved</div>
          </div>
        </div>

        <div className="social-links">
          <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noreferrer" className="social-icon linkedin" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
          <a href={SOCIAL_LINKS.github} target="_blank" rel="noreferrer" className="social-icon github" aria-label="GitHub">
            <FaGithub />
          </a>
          <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noreferrer" className="social-icon instagram" aria-label="Instagram">
            <FaInstagram />
          </a>
          <a href={SOCIAL_LINKS.gmail} className="social-icon gmail" aria-label="Gmail">
            <SiGmail />
          </a>
          <a href={SOCIAL_LINKS.discord} target="_blank" rel="noreferrer" className="social-icon discord" aria-label="Discord">
            <FaDiscord />
          </a>
        </div>

        <div className="cta-buttons">
          <a href="#contactsection" className="cta-btn primary">
            <span>Contact Me</span>
            <div className="btn-glow"></div>
          </a>
          <a href={MyCv} download="Harsh_Agarwal_Resume.pdf" className="cta-btn secondary">
            <span>Get Resume</span>
            <div className="btn-glow"></div>
          </a>
        </div>
      </div>

      <div className="scroll-indicator">
        <div className="mouse"></div>
        <p>Scroll Down</p>
      </div>
    </div>
  );
};

export default Home;
