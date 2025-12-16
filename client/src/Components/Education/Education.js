import React from "react";
import "./Education.css";
import { FaGraduationCap, FaUniversity, FaSchool } from "react-icons/fa";

const Education = () => {
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

  return (
    <div className="education-section" id="education">
      <div className="section-title">
        <h5>Education Journey</h5>
        <span className="line"></span>
      </div>

      <div className="metro-map">
        <div className="metro-line"></div>
        <div className="metro-train"></div>

        {educationData.map((edu, index) => (
          <div
            key={edu.id}
            className={`metro-station station-${index + 1}`}
            style={{ "--station-color": edu.color }}
          >
            {/* Station Marker */}
            <div className="station-marker" style={{ background: edu.color }}>
              <div className="station-icon">{edu.icon}</div>
              <div className="station-pulse"></div>
            </div>

            {/* Station Card */}
            <div className={`station-card ${index % 2 === 0 ? "card-top" : "card-bottom"}`}>
              <div className="card-header" style={{ background: edu.color }}>
                <h3>{edu.institution}</h3>
                <span className="duration">{edu.duration}</span>
              </div>

              <div className="card-body">
                <h4>{edu.degree}</h4>
                <div className="grade-badge" style={{ borderColor: edu.color, color: edu.color }}>
                  🎯 {edu.grade}
                </div>
                <p>{edu.details}</p>
              </div>

              <div className="card-arrow" style={{ borderTopColor: index % 2 === 0 ? edu.color : "transparent", borderBottomColor: index % 2 !== 0 ? edu.color : "transparent" }}></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
