import React, { useState } from "react";
import profileImage from "../assets/profileimg.png";
import img from "../assets/prof.jpg";


const Home=()=>{

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

    return(
        
            <section className="home" id="home">
              
        <div className="home-container">
              {/* Title */}
              <h1 className="about-title">
                Hey there<br /> I'm <span className="name-highlight">Mangesh</span>
              </h1>
        
              {/* Subtitle */}
              <p className="about-subtitle">
                I'm a passionate software developer with experience in web development.
              </p>
        
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
        
              {/* Profile Image */}
              <div className="img">
                <img src={profileImage} alt="Mangesh" className="profile-image" />
              </div>
               {/* Updated Skills Section */}
                <div className="skills">
                <span>✨ Java ✦ Spring Boot ✦ React.js ✦ Node.js ✦ PostgreSQL ✦ Cloud Computing ✦ API Development ✦ Automation ✨</span>
                </div>
                </div>
              </section>
        )
    



}
export default Home