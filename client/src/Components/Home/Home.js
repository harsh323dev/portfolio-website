import React, { useEffect, useRef, useState } from "react";
import Typewriter from "typewriter-effect";
import { Link as ScrollLink } from "react-scroll";
import { FaLinkedin, FaGithub, FaInstagram, FaDiscord, FaEnvelope, FaArrowUp, FaFileDownload } from "react-icons/fa";
import { SiLeetcode, SiCodechef, SiHackerrank, SiCodeforces, SiGeeksforgeeks, SiHackerearth, SiCodingninjas } from "react-icons/si";
import { BsMessenger } from "react-icons/bs";
import { HiArrowRight } from "react-icons/hi";
import "./Home.css";

const Home = () => {
  const canvasRef = useRef(null);
  const [showScrollTop, setShowScrollTop] = useState(false);

  const SOCIAL_LINKS = {
    linkedin: "https://www.linkedin.com/in/harsh323",
    github: "https://github.com/harsh323dev",
    instagram: "https://www.instagram.com/harshagarwal323.ag",
    gmail: "mailto:harshagarwal323.ag@gmail.com",
    discord: "https://discord.gg/Gsm7gppAAM",
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

  // Scroll to Top Handler
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.pageYOffset > 300);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const downloadCV = () => {
    const link = document.createElement('a');
    link.href = process.env.PUBLIC_URL + 'HARSH_AGARWAL_RESUME.pdf';
    link.download = 'Harsh_Agarwal_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Optimized Particle Animation
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
        this.size = Math.random() * 2 + 0.5;
        this.speedX = (Math.random() - 0.5) * 0.3;
        this.speedY = (Math.random() - 0.5) * 0.3;
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

    let animationFrameId;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((particle) => {
        particle.update();
        particle.draw();
      });
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const codeSnippets = [
    "const developer = 'Harsh';",
    "function buildDreams() { }",
    "while(true) { learn(); }",
    "if(passion) { achieve(); }",
    "class Developer { }",
    "return success;",
    "export default dreams;",
  ];

  return (
    <section className="home-container" id="home">
      <canvas ref={canvasRef} className="particle-canvas"></canvas>

      <div className="code-rain">
        {codeSnippets.map((code, index) => (
          <div
            key={index}
            className="code-snippet"
            style={{
              left: `${10 + index * 13}%`,
              animationDelay: `${index * 0.8}s`,
              animationDuration: `${12 + index * 1.5}s`,
            }}
          >
            {code}
          </div>
        ))}
      </div>

      {/* Floating Action Buttons */}
      <div className="floating-buttons">
        <button
          onClick={downloadCV}
          className="fab-button fab-resume"
          title="Download Resume"
          aria-label="Download Resume"
        >
          <FaFileDownload className="fab-icon" />
        </button>

        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="fab-button fab-scroll-top"
            title="Scroll to Top"
            aria-label="Scroll to Top"
          >
            <FaArrowUp className="fab-icon" />
          </button>
        )}
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
                "Full Stack Developer \u{1F4BB}",
                "Java Developer \u2615",
                "Node.js Developer \u26A1",
                "Problem Solver \u{1F9E0}",
                "Tech Enthusiast \u{1F3AE}",
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
            <div className="stat-label">YEARS EXPERIENCE</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">10+</div>
            <div className="stat-label">PROJECTS BUILT</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">100+</div>
            <div className="stat-label">PROBLEMS SOLVED</div>
          </div>
        </div>

        {/* View Projects Button */}
        <div className="cta-section">
          <ScrollLink
            to="projects"
            smooth={true}
            duration={700}
            offset={-80}
            className="hero-primary-cta"
          >
            <span>View My Projects</span>
            <HiArrowRight className="cta-arrow" />
          </ScrollLink>
        </div>

        <div className="links-section">
          <h3 className="section-heading">
            <BsMessenger className="heading-icon" />
            CONNECT WITH ME
          </h3>
          <div className="social-links">
            <a
              href={SOCIAL_LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon linkedin"
            >
              <FaLinkedin />
            </a>
            <a
              href={SOCIAL_LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon github"
            >
              <FaGithub />
            </a>
            <a
              href={SOCIAL_LINKS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon instagram"
            >
              <FaInstagram />
            </a>
            <a href={SOCIAL_LINKS.gmail} className="social-icon gmail">
              <FaEnvelope />
            </a>
            <a
              href={SOCIAL_LINKS.discord}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon discord"
            >
              <FaDiscord />
            </a>
          </div>
        </div>

        <div className="coding-section">
          <h3 className="section-heading">
            <SiLeetcode className="heading-icon" />
            CODING PROFILES
          </h3>
          <div className="coding-links">
            <a
              href={CODING_PROFILES.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="coding-icon leetcode"
            >
              <SiLeetcode />
            </a>
            <a
              href={CODING_PROFILES.codechef}
              target="_blank"
              rel="noopener noreferrer"
              className="coding-icon codechef"
            >
              <SiCodechef />
            </a>
            <a
              href={CODING_PROFILES.hackerrank}
              target="_blank"
              rel="noopener noreferrer"
              className="coding-icon hackerrank"
            >
              <SiHackerrank />
            </a>
            <a
              href={CODING_PROFILES.codeforces}
              target="_blank"
              rel="noopener noreferrer"
              className="coding-icon codeforces"
            >
              <SiCodeforces />
            </a>
            <a
              href={CODING_PROFILES.geeksforgeeks}
              target="_blank"
              rel="noopener noreferrer"
              className="coding-icon geeksforgeeks"
            >
              <SiGeeksforgeeks />
            </a>
            <a
              href={CODING_PROFILES.hackerearth}
              target="_blank"
              rel="noopener noreferrer"
              className="coding-icon hackerearth"
            >
              <SiHackerearth />
            </a>
            <a
              href={CODING_PROFILES.codingninjas}
              target="_blank"
              rel="noopener noreferrer"
              className="coding-icon codingninjas"
            >
              <SiCodingninjas />
            </a>
          </div>
        </div>
      </div>

      <div className="scroll-indicator">
        <div className="mouse"></div>
        <p>Scroll</p>
      </div>
    </section>
  );
};

export default Home;
