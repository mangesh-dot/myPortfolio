import React from "react";
import projectimg from "../assets/QAndA.jpeg"; 
import projectimg2 from "../assets/form.jpeg";

const Projects = () => {
    return (
        <section className="project" id="projects">
            <h2 className="heading">- Projects</h2>

            <h2 className="sub-heading">My Projects</h2>

            <div className="project-container">
                <div className="project-image">
                    <img src={projectimg} alt="Project 1" />
                </div>

                <div className="project-details">
                    <div className="tech-stack">
                        <span>FASTAPI</span>
                        <span>PostgreSQL</span>
                        <span>Python</span>
                        <span>BERT</span>
                    </div>
                    <div className="project-title">
                        <h3 className="project-name">Question & Answering System</h3>
                        <div className="project-desc">
                            <h4>Developed a Question & Answering model that stores user data and answers queries related to the stored data.</h4> 
                        </div>
                        <button className="view-detail" onClick={() => window.open("https://python.langchain.com/v0.1/docs/use_cases/question_answering/", "_blank")}>
                                                 View details
                                        </button>

                    </div>
                </div>
            </div>

            <div className="project-container">
                <div className="project-image">
                    <img src={projectimg2} alt="Project 2" />
                </div>

                <div className="project-details">
                    <div className="tech-stack">
                        <span>FASTAPI</span>
                        <span>PostgreSQL</span>
                        <span>Python</span>
                        <span>BERT</span>
                    </div>
                    <div className="project-title">
                        <h3 className="project-name">Form Automation</h3>
                    </div>
                    <div className="project-desc">
                        <h4>Created a form automation model that fills forms automatically by extracting data from Excel.</h4>
                    </div>
                    <button className="view-detail"  onClick={() =>window.open("https://www.blueprism.com/resources/blog/forms-automation/","_blank")}>View details</button>
                </div>
            </div>
        </section>
    );
};

export default Projects;
