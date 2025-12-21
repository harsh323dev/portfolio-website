import React, { useEffect, useRef } from "react";
import "./WorkExperience.css";
import { MdGroupWork } from "react-icons/md";
import tcsLogo from "../../Image/tcs-logo.webp";
import nullclassLogo from "../../Image/nullclass-logo.png";

const WorkExperience = () => {
  const canvasRef = useRef(null);

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
    {
      primary: "#f97316",
      secondary: "#facc15",
      gradient: "linear-gradient(135deg, #f97316 0%, #facc15 100%)",
    },
    {
      primary: "#60a5fa",
      secondary: "#3b82f6",
      gradient: "linear-gradient(135deg, #60a5fa 0%, #3b82f6 100%)",
    },
  ];

  // subtle particles behind experience section (same vibe as Home/TechStack)
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    const resize = () => {
      const rect = canvas.parentElement.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
    };
    resize();

    const particles = [];
    const count = 45;

    class Particle {
      constructor() {
        this.reset();
      }
      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.r = Math.random() * 2 + 0.5;
        this.sx = (Math.random() - 0.5) * 0.18;
        this.sy = (Math.random() - 0.5) * 0.18;
        this.a = Math.random() * 0.35 + 0.12;
      }
      update() {
        this.x += this.sx;
        this.y += this.sy;
        if (
          this.x < 0 ||
          this.x > canvas.width ||
          this.y < 0 ||
          this.y > canvas.height
        ) {
          this.reset();
        }
      }
      draw() {
        ctx.fillStyle = `rgba(96, 165, 250, ${this.a})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    for (let i = 0; i < count; i++) particles.push(new Particle());

    let id;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.update();
        p.draw();
      });
      id = requestAnimationFrame(animate);
    };
    animate();

    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(id);
    };
  }, []);

  const codeRainSnippets = [
    "git commit -m 'deploy'",
    "docker ps --all",
    "kubectl get services",
    "SELECT * FROM work_experience;",
  ];

  return (
    <section className="workexperience-wrapper" id="experience">
      {/* background particles */}
      <canvas ref={canvasRef} className="workexperience-particle-canvas" />

      {/* left code rain */}
      <div className="workexperience-code-rain">
        {codeRainSnippets.map((c, i) => (
          <div
            key={i}
            className="workexperience-code-snippet"
            style={{
              left: `${8 + i * 14}%`,
              animationDelay: `${i * 1.1}s`,
              animationDuration: `${13 + i * 2}s`,
            }}
          >
            {c}
          </div>
        ))}
      </div>

      <div className="container workexperience-section">
        <div className="section-title">
          <h5>Work Experience</h5>
          <span className="line" />
        </div>

        <div className="experience-timeline">
          {data.map((item, index) => (
            <div
              key={index}
              className="experience-card"
              data-aos="fade-up"
              data-aos-delay={index * 120}
            >
              {/* floating blur logo */}
              <div className="logo-background">
                <img
                  src={item.logo}
                  alt={`${item.companyname} logo`}
                  className="logo-blur"
                />
              </div>

              <div className="experience-content">
                {/* left: logo block */}
                <div className="experience-left">
                  <div
                    className={`company-logo-container ${
                      index === 1 ? "nullclass-logo" : ""
                    }`}
                    style={{
                      background: colors[index].gradient,
                      boxShadow: `0 12px 40px ${colors[index].primary}50`,
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

                {/* right: details */}
                <div className="experience-right">
                  <div
                    className="experience-glass-card"
                    style={{ borderLeft: `4px solid ${colors[index].primary}` }}
                  >
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

                    <div className="card-body">
                      <p>{item.des}</p>

                      <div className="tech-stack-grid">
                        {item.techskills.map((tech, idx) => (
                          <div
                            key={idx}
                            className="tech-badge-animated"
                            style={{
                              "--hover-color": colors[index].primary,
                              animationDelay: `${idx * 0.08}s`,
                            }}
                          >
                            <span className="tech-badge-text">
                              {tech.techname}
                            </span>
                            <div
                              className="tech-badge-glow"
                              style={{
                                background: colors[index].gradient,
                              }}
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
    </section>
  );
};

export default WorkExperience;