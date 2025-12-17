import React, { useEffect, useRef } from "react";
import "./Education.css";
import { FaGraduationCap, FaUniversity, FaSchool } from "react-icons/fa";

const Education = () => {
  const canvasRef = useRef(null);

  const educationData = [
    {
      id: 1,
      institution: "VTU Engineering College",
      degree: "BTech - Computer Science",
      duration: "2020 - 2024",
      grade: "CGPA: 7.5/10",
      icon: <FaUniversity />,
      color: "#60a5fa",
      details: "Full-stack development, DSA, competitive programming",
    },
    {
      id: 2,
      institution: "Higher Secondary",
      degree: "12th Grade (PCM)",
      duration: "2019 - 2020",
      grade: "77%",
      icon: <FaSchool />,
      color: "#f97316",
      details: "Physics, Chemistry, Mathematics",
    },
    {
      id: 3,
      institution: "Secondary School",
      degree: "10th Grade",
      duration: "2017 - 2018",
      grade: "89%",
      icon: <FaGraduationCap />,
      color: "#facc15",
      details: "Science exhibitions, mathematics competitions",
    },
  ];

  // background particles
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
        ctx.fillStyle = `rgba(244, 244, 245, ${this.a})`;
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
    "class Student {}",
    "for(year of journey) learn();",
    "SELECT * FROM education;",
  ];

  return (
    <section className="education-wrapper" id="education">
      {/* background particles */}
      <canvas ref={canvasRef} className="education-particle-canvas" />

      {/* code rain */}
      <div className="education-code-rain">
        {codeRainSnippets.map((c, i) => (
          <div
            key={i}
            className="education-code-snippet"
            style={{
              left: `${6 + i * 14}%`,
              animationDelay: `${i * 1.2}s`,
              animationDuration: `${13 + i * 2}s`,
            }}
          >
            {c}
          </div>
        ))}
      </div>

      <div className="education-section">
        {/* Title slightly higher */}
        <div className="section-title education-title">
          <h5>Education Journey</h5>
          <span className="line" />
          <p className="education-subtitle">
            From school to engineering, a timeline of how the foundations were built.
          </p>
        </div>

        {/* Vertical timeline */}
        <div className="edu-timeline">
          <div className="edu-timeline-line" />

          {educationData.map((edu, index) => (
            <div
              key={edu.id}
              className={`edu-timeline-item ${
                index % 2 === 0 ? "left" : "right"
              }`}
            >
              {/* marker node */}
              <div
                className="edu-timeline-node"
                style={{ borderColor: edu.color }}
              >
                <div
                  className="edu-node-inner"
                  style={{ background: edu.color }}
                >
                  {edu.icon}
                </div>
              </div>

              {/* glass card */}
              <div className="edu-card">
                <div
                  className="edu-card-header"
                  style={{ background: edu.color }}
                >
                  <div className="edu-institution">
                    <h3>{edu.institution}</h3>
                    <span className="edu-duration">{edu.duration}</span>
                  </div>
                  <span className="edu-badge">Step {edu.id}</span>
                </div>

                <div className="edu-card-body">
                  <h4>{edu.degree}</h4>
                  <div
                    className="edu-grade"
                    style={{ borderColor: edu.color, color: edu.color }}
                  >
                    🎯 {edu.grade}
                  </div>
                  <p>{edu.details}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="education-scroll-hint">SCROLL</div>
      </div>
    </section>
  );
};

export default Education;
