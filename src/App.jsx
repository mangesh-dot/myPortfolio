import React from "react";
import Navbar from "./components/NavBar";
import "./style/home.css";
import About from "./components/About";
import Experience from "./components/Experience"
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import "./style/App.css";
import "./style/index.css";
import "./style/nav.css";
import "./style/experience.css";
import "./style/project.css";
import "./style/contact.css";

import Home from "./components/Home";

function App() {
    return (
        <div>
            <Navbar />
            
           <Home/>
            <section id="about" className="about">
                <About />
            </section>
            <section id="experience" className="experience">
                <Experience />
            </section>
            <section id="projects" className="projects">
                <Projects />
            </section>
           
                <Contact />
        
        </div>
    );
}

export default App;
