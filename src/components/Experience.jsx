import React from "react";
import "../style/experience.css"; // Ensure you have this CSS file

const Experience = () => {
  return (
    <section className="experience" id="experience">
      <h3 className="heading">- Education & Work</h3>

      <div className="sub-heading">Experience</div>

      <div className="exp-container">
        <div className="exp-details">
          <h3>IBM Internship | Bangalore</h3>
          <h4>AI/ML Intern</h4>
          <p>
            Contributed to the development of emotion detection and sentiment analysis models.
          </p>
        </div>
        <div className="exp-date">
          <h4>Feb 2025 - Present</h4>
        </div>
      </div>

      <div className="sub-heading">Voluntary Experience</div>

      <div className="exp-container">
        <div className="exp-details">
          <h3>UnifiedMentor</h3>
          <h4>Frontend Developer</h4>
          <p>
            Contributed to the development of a web application for an e-commerce startup, 
            focusing on enhancing user experience and interface design.
          </p>
        </div>
        <div className="exp-date">
          <h4>August 2024</h4>
        </div>
      </div>

      <div className="exp-container">
        <div className="exp-details">
          <h3>Technook</h3>
          <h4>AI/ML Intern</h4>
          <p>
            Developed a text summarization model using NLP technology. 
            Implemented NLP techniques, attention mechanism, and the TF-IDF algorithm.
          </p>
        </div>
        <div className="exp-date">
          <h4>September 2024</h4>
        </div>
      </div>
    </section>
  );
};

export default Experience;
