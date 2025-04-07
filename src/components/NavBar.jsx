import React from "react";

const Navbar = () => {
    const handleClick = (e, targetId) => {
        e.preventDefault();
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 50, // Adjust for fixed navbar
                behavior: "smooth"
            });
        }
    };

    return (
        <nav className="navbar">
            <h1 className="text-2xl font-bold">Mangesh</h1>
            <ul className="flex space-x-6">
                <li><a href="#home" onClick={(e) => handleClick(e, "home")} className="hover:text-gray-400">Home</a></li>
                <li><a href="#about" onClick={(e) => handleClick(e, "about")} className="hover:text-gray-400">About</a></li>
                <li><a href="#experience" onClick={(e) => handleClick(e, "experience")} className="hover:text-gray-400">Experience</a></li>
                <li><a href="#projects" onClick={(e) => handleClick(e, "projects")} className="hover:text-gray-400">Projects</a></li>
                <li><a href="#contact" onClick={(e) => handleClick(e, "contact")} className="hover:text-gray-400">Contact</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;
