import profileImage from "../assets/profileimg.png";
import React, { useState } from "react";

import "../style/about.css";

const About = () => {

  const handleClickcontact = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
        window.scrollTo({
            top: targetElement.offsetTop - 50, // Adjust for fixed navbar
            behavior: "smooth"
        });
    }
};


  const [showPopup,setShowPopup]=useState(false);
  const handleclick=()=>{
    setShowPopup(true)
  }
  const handleClosePopup=()=>{
    setShowPopup(false)
  }
  const handleDownLoad=()=>{
    const link=document.createElement("a");
    link.href="/resume.pdf";
    link.download="resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setShowPopup(false);

  }
  return (
    
<section className="about" id="about">
  <div className="about-container">
     
      <div className="about-me">
        <p className="section-title">- About Me</p>
        <p className="description">
          A dedicated software developer with expertise in building scalable web applications and automation tools.  
          I enjoy solving complex problems, optimizing performance, and leveraging cloud technologies.  
          Passionate about backend development and API integrations, I strive to create efficient and reliable solutions.
        </p>
      </div>
       {/* Buttons */}
       <div className="buttons">
                <button className="resume-button" onClick={()=>setShowPopup(true)}>Resume</button>
                <button className="contact-button" onClick={(e) => handleClickcontact(e, "contact")} >Contact</button>
              </div>

              
                {showPopup &&(
                  <div className="popup-content">
                    <div className="popup-header">
                      <h2>Download Resume</h2>
                      <button className="close-button" onClick={handleClosePopup}>
                        &times;
                      </button>
                    </div>
                    <p>Click the button below to download my resume.</p>
                    <button className="download-button" onClick={handleDownLoad}>Download</button>
                  </div>
                )}
                </div>
              
    </section>
  );
};

export default About;
