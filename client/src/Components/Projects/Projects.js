// src/Components/Projects/Projects.js
import React from 'react';
import './Projects.css';
import { FaGithub, FaExternalLinkAlt, FaRocket } from 'react-icons/fa';

// Import from src/Image folder (adjust file extensions if needed)
import codeQuestImg from '../../Image/code-quest.png';
import jobReadyImg from '../../Image/job-ready.png';
import tinyLinkImg from '../../Image/tiny-link.png';
import rfpMgmtImg from '../../Image/rfp-mgmt.png';

const Projects = () => {
  const projectsData = [
    {
      id: 1,
      title: "RFP Management System",
      tagline: "AI-Powered Procurement Automation",
      description: "Full-stack procurement platform leveraging Google Gemini 2.0 for intelligent RFP creation, automated email workflows, and AI-driven vendor proposal comparison with scoring system.",
      image: rfpMgmtImg,
      techStack: ["React", "Node.js", "MongoDB", "TypeScript", "Gemini AI", "Nodemailer"],
      github: "https://github.com/harsh323dev/rfp-mgmt",
      liveDemo: null,
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      accentColor: "#667eea"
    },
    {
      id: 2,
      title: "Job Ready",
      tagline: "Interview Prep Platform",
      description: "Gamified interview preparation platform with 100+ coding challenges, mock interview simulator, real-time analytics dashboard, streak tracking, and XP-based progression system.",
      image: jobReadyImg,
      techStack: ["React", "Node.js", "Express", "MongoDB", "JWT", "Socket.io"],
      github: "https://github.com/harsh323dev/job-ready",
      liveDemo: null,
      gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
      accentColor: "#f5576c"
    },
    {
      id: 3,
      title: "Code Quest",
      tagline: "Developer Q&A Community",
      description: "Stack Overflow-inspired platform with real-time notifications, reputation system, syntax highlighting, vote tracking, and multilingual support for global developer community.",
      image: codeQuestImg,
      techStack: ["React", "Node.js", "Express", "MongoDB", "Socket.io", "i18next"],
      github: "https://github.com/harsh323dev/code-quest",
      liveDemo: "https://codequest-harsh.vercel.app/",
      gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
      accentColor: "#4facfe"
    },
    {
      id: 4,
      title: "Tiny Link",
      tagline: "URL Shortener with Analytics",
      description: "Professional URL shortening service with custom aliases, comprehensive analytics dashboard, QR code generation, click tracking, and link expiration management.",
      image: tinyLinkImg,
      techStack: ["Node.js", "Express", "MongoDB", "EJS"],
      github: "https://github.com/harsh323dev/tiny-link",
      liveDemo: "https://tiny-link-harsh.vercel.app/",
      gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
      accentColor: "#fa709a"
    }
  ];

  return (
    <section className="projects-section" id="projects">
      {/* Section Title */}
      <div className="section-title">
        <h5>Featured Projects</h5>
        <span className="line"></span>
      </div>

      {/* Projects Grid */}
      <div className="projects-container">
        {projectsData.map((project, index) => (
          <div 
            key={project.id} 
            className="project-card"
            style={{ 
              '--gradient': project.gradient,
              '--accent-color': project.accentColor,
              animationDelay: `${index * 0.15}s` 
            }}
          >
            {/* Project Number Badge */}
            <div className="project-number" style={{ background: project.gradient }}>
              {String(project.id).padStart(2, '0')}
            </div>

            {/* Project Image Container */}
            <div className="project-image-container">
              <img 
                src={project.image} 
                alt={project.title}
                className="project-img"
                loading="lazy"
              />
              
              {/* Hover Overlay */}
              <div className="project-overlay" style={{ background: project.gradient }}>
                <div className="overlay-content">
                  <FaRocket className="rocket-icon" />
                  <h3 className="overlay-title">{project.title}</h3>
                  <p className="overlay-tagline">{project.tagline}</p>
                  
                  {/* Action Buttons */}
                  <div className="project-actions">
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="action-btn github-btn"
                      aria-label={`View ${project.title} on GitHub`}
                    >
                      <FaGithub /> <span>GitHub</span>
                    </a>
                    {project.liveDemo && (
                      <a 
                        href={project.liveDemo} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="action-btn demo-btn"
                        aria-label={`View ${project.title} live demo`}
                      >
                        <FaExternalLinkAlt /> <span>Live Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Project Details */}
            <div className="project-details">
              <div className="project-header">
                <h3 className="project-name">{project.title}</h3>
                <span className="project-badge">{project.tagline}</span>
              </div>
              
              <p className="project-desc">{project.description}</p>
              
              {/* Tech Stack Pills */}
              <div className="tech-pills">
                {project.techStack.map((tech, idx) => (
                  <span 
                    key={idx} 
                    className="tech-pill"
                    style={{ animationDelay: `${idx * 0.1}s` }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
