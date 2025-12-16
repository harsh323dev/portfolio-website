import React, { useEffect, useRef } from "react";
import "./Home.css";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaInstagram, FaDiscord, FaCode } from "react-icons/fa";
import { 
  SiGmail, 
  SiLeetcode, 
  SiCodechef, 
  SiHackerrank, 
  SiCodeforces, 
  SiGeeksforgeeks,
  SiHackerearth
} from "react-icons/si";

const Home = () => {
  const canvasRef = useRef(null);

  const SOCIAL_LINKS = {
    linkedin: "https://www.linkedin.com/in/harsh323",
    github: "https://github.com/harsh323dev",
    instagram: "https://www.instagram.com/harshagarwal323.ag",
    gmail: "mailto:harshagarwal323.ag@gmail.com",
    discord: "https://discordapp.com/users/harsh323",
  };

  const CODING_PROFILES = {
    leetcode: "https://leetcode.com/harsh323",
    codechef: "https://www.codechef.com/users/harsh323",
    hackerrank: "https://www.hackerrank.com/harsh323",
    codeforces: "https://codeforces.com/profile/harsh323",
    geeksforgeeks: "https://auth.geeksforgeeks.org/user/harsh323",
    hackerearth: "https://www.hackerearth.com/@harsh323dev",
    codingninjas: "https://www.naukri.com/code360/profile/HarshakaOmega",
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
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
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
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
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
        </motion.div>

        {/* Social Links Section */}
        <motion.div
          className="links-section"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <h3 className="links-heading">
            <span className="heading-icon">💬</span> Connect With Me
          </h3>
          <div className="social-links">
            <a 
              href={SOCIAL_LINKS.linkedin} 
              target="_blank" 
              rel="noreferrer" 
              className="social-icon linkedin" 
              aria-label="LinkedIn"
            >
              <FaLinkedin />
              <span className="icon-tooltip">LinkedIn</span>
            </a>
            <a 
              href={SOCIAL_LINKS.github} 
              target="_blank" 
              rel="noreferrer" 
              className="social-icon github" 
              aria-label="GitHub"
            >
              <FaGithub />
              <span className="icon-tooltip">GitHub</span>
            </a>
            <a 
              href={SOCIAL_LINKS.instagram} 
              target="_blank" 
              rel="noreferrer" 
              className="social-icon instagram" 
              aria-label="Instagram"
            >
              <FaInstagram />
              <span className="icon-tooltip">Instagram</span>
            </a>
            <a 
              href={SOCIAL_LINKS.gmail} 
              className="social-icon gmail" 
              aria-label="Gmail"
            >
              <SiGmail />
              <span className="icon-tooltip">Gmail</span>
            </a>
            <a 
              href={SOCIAL_LINKS.discord} 
              target="_blank" 
              rel="noreferrer" 
              className="social-icon discord" 
              aria-label="Discord"
            >
              <FaDiscord />
              <span className="icon-tooltip">Discord</span>
            </a>
          </div>
        </motion.div>

        {/* Coding Profiles Section */}
        <motion.div
          className="links-section coding-section"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <h3 className="links-heading">
            <span className="heading-icon">👨‍💻</span> Coding Profiles
          </h3>
          <div className="coding-links">
            <a 
              href={CODING_PROFILES.leetcode} 
              target="_blank" 
              rel="noreferrer" 
              className="coding-icon leetcode" 
              aria-label="LeetCode"
            >
              <SiLeetcode />
              <span className="icon-tooltip">LeetCode</span>
            </a>
            <a 
              href={CODING_PROFILES.codechef} 
              target="_blank" 
              rel="noreferrer" 
              className="coding-icon codechef" 
              aria-label="CodeChef"
            >
              <SiCodechef />
              <span className="icon-tooltip">CodeChef</span>
            </a>
            <a 
              href={CODING_PROFILES.hackerrank} 
              target="_blank" 
              rel="noreferrer" 
              className="coding-icon hackerrank" 
              aria-label="HackerRank"
            >
              <SiHackerrank />
              <span className="icon-tooltip">HackerRank</span>
            </a>
            <a 
              href={CODING_PROFILES.codeforces} 
              target="_blank" 
              rel="noreferrer" 
              className="coding-icon codeforces" 
              aria-label="Codeforces"
            >
              <SiCodeforces />
              <span className="icon-tooltip">Codeforces</span>
            </a>
            <a 
              href={CODING_PROFILES.geeksforgeeks} 
              target="_blank" 
              rel="noreferrer" 
              className="coding-icon geeksforgeeks" 
              aria-label="GeeksforGeeks"
            >
              <SiGeeksforgeeks />
              <span className="icon-tooltip">GeeksforGeeks</span>
            </a>
            <a 
              href={CODING_PROFILES.hackerearth} 
              target="_blank" 
              rel="noreferrer" 
              className="coding-icon hackerearth" 
              aria-label="HackerEarth"
            >
              <SiHackerearth />
              <span className="icon-tooltip">HackerEarth</span>
            </a>
            <a 
              href={CODING_PROFILES.codingninjas} 
              target="_blank" 
              rel="noreferrer" 
              className="coding-icon codingninjas" 
              aria-label="Coding Ninjas"
            >
              <FaCode />
              <span className="icon-tooltip">Coding Ninjas</span>
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator - LEFT SIDE */}
      <div className="scroll-indicator">
        <div className="mouse"></div>
        <p>Scroll Down</p>
      </div>
    </div>
  );
};

export default Home;
