import React from "react";

const Contact = () => {
    return (
        <div className="contact-container" id="contact">
            <div className="contact">
                <h3 className="contact-title">-contact me</h3>
                <h1 className="contact-heading">
                <span className="highlight">Let's Connect & Collaborate</span>
                </h1>

            <p className="contact-info">
                Mangesh <br/>
                Email :<a href="mailto:kmangesh931@gmial.com">kmangesh931@gmil.com</a><br/>
                Mobile : <a href="tel:+919760676398">+919760676398</a><br/>
                Dehr Dun ,India.
            </p>
                
            

            <div className="contact-socials">
                    <span>My Socials</span>
                    <a 
        href="https://www.linkedin.com/in/mangesh-kumar-6a3b801b9" 
        target="_blank"
        rel="noopener noreferrer"
        className="social-link"
        ><i className="fab fa-linkedin-in"></i> LinkedIn
      </a>
                    <a href="https://github.com/mangesh-dot/"><i className="social-link"></i>GitHub</a>
                    <a href="#"><i className="fab fa-instagram"></i></a>
                    <a href="#"><i className="fab fa-upwork"></i></a>
                </div>
                </div>

            <div className="contact-right">
                <form action="https://formspree.io/f/xgvanwzb" method="POST">
                    <label htmlFor="name"></label>
                    <input type="text" id="name" placeholder="Name *" name="name" required />

                    <label htmlFor="email"></label>
                    <input type="email" id="email" name="email" placeholder="Email *" required />

                    <label htmlFor="message"></label>
                    <textarea id="message" placeholder="Message" name="message"></textarea>

                    <label htmlFor="mobile"></label>
                    <input type="number" id="mobile" placeholder="Mobile Number *" name="mobile" required />

                    <button type="submit" className="submit-button">Send Message</button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
