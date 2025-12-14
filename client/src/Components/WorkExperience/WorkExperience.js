import React from "react";
import "./WorkExperience.css";
import { MdGroupWork } from "react-icons/md";
import tcsLogo from "../../Image/tcs-logo.webp";
import nullclassLogo from "../../Image/nullclass-logo.png";

const WorkExperience = () => {
  const data = [
    {
      companyname: "Tata Consultancy Services",
      shortname: "TCS",
      position: "Backend Developer",
      des: "Collaborated in a 60-member agile team on ICAI UDIN & CPE platforms. Developed and tested backend components including mobile app QA and validation. Implemented and debugged REST APIs and SQL queries, improving reliability and performance for production workflows.",
      year: "Sep 2024 - Present",
      logo: tcsLogo,
      techskills: [
        { techname: "Java" },
        { techname: "Spring Boot" },
        { techname: "REST APIs" },
        { techname: "SQL" },
        { techname: "Agile" },
        { techname: "QA Testing" },
      ],
    },
    {
      companyname: "NullClass",
      shortname: "NC",
      position: "Full Stack Developer",
      des: "Developed a full-stack technical Q&A platform (CodeQuest). Enabled users to post questions, answer peers, upvote content, and manage profiles using authentication and reputation system. Built React frontend with MongoDB-backed REST APIs.",
      year: "Jan 2024 - Jul 2024",
      logo: nullclassLogo,
      techskills: [
        { techname: "Node.js" },
        { techname: "Express" },
        { techname: "React" },
        { techname: "MongoDB" },
        { techname: "TypeScript" },
        { techname: "REST APIs" },
      ],
    },
  ];

  const colors = [
    { primary: "#f97316", secondary: "#facc15", gradient: "linear-gradient(135deg, #f97316 0%, #facc15 100%)" },
    { primary: "#60a5fa", secondary: "#3b82f6", gradient: "linear-gradient(135deg, #60a5fa 0%, #3b82f6 100%)" }
  ];

  return (
    <div className="container workexperience-section">
      <div className="section-title">
        <h5>Work Experience</h5>
        <span className="line"></span>
      </div>

      <div className="experience-timeline">
        {data.map((item, index) => (
          <div 
            key={index} 
            className="experience-card"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            {/* Floating Logo Background Effect */}
            <div className="logo-background">
              <img 
                src={item.logo} 
                alt={`${item.companyname} logo`}
                className="logo-blur"
              />
            </div>

            <div className="experience-content">
              {/* Left: Company Logo & Icon */}
              <div className="experience-left">
                <div 
                  className={`company-logo-container ${index === 1 ? 'nullclass-logo' : ''}`}
                  style={{ 
                    background: colors[index].gradient,
                    boxShadow: `0 8px 32px ${colors[index].primary}40`
                  }}
                >
                  <img 
                    src={item.logo} 
                    alt={item.shortname}
                    className="company-logo"
                  />
                </div>
                
                <div 
                  className="timeline-connector"
                  style={{ background: colors[index].gradient }}
                ></div>
              </div>

              {/* Right: Content Card */}
              <div className="experience-right">
                <div 
                  className="experience-glass-card"
                  style={{ borderLeft: `4px solid ${colors[index].primary}` }}
                >
                  {/* Header with gradient */}
                  <div 
                    className="card-header"
                    style={{ background: colors[index].gradient }}
                  >
                    <div className="header-content">
                      <h3>{item.companyname}</h3>
                      <h4>{item.position}</h4>
                    </div>
                    <div className="date-badge">
                      <MdGroupWork size={18} />
                      <span>{item.year}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="card-body">
                    <p>{item.des}</p>

                    {/* Tech Skills with Animation */}
                    <div className="tech-stack-grid">
                      {item.techskills.map((tech, idx) => (
                        <div
                          key={idx}
                          className="tech-badge-animated"
                          style={{
                            "--hover-color": colors[index].primary,
                            animationDelay: `${idx * 0.1}s`
                          }}
                        >
                          <span className="tech-badge-text">{tech.techname}</span>
                          <div 
                            className="tech-badge-glow"
                            style={{ background: colors[index].gradient }}
                          ></div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkExperience;
