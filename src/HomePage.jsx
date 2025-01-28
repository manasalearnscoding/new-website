import React from "react";
import { Element } from "react-scroll";
import Navbar from "./Navbar";
import "./assets/HomePage.css";
import Skills from "./Skills";
import profileImage from "./assets/images/profile.jpg";
import githubLogo from "./assets/images/github-mark.png";
import linkedinLogo from "./assets/images/linkedin-logo.png";
import gmailLogo from "./assets/images/gmail-logo.png";
import resume from "./assets/images/resume.pdf";

// Background image credits:
// Pinimg.com, 2025, i.pinimg.com/736x/cb/99/bc/cb99bc9de2a41527de5a7249c8564176.jpg

function HomePage () {
  return (
    <>
      <Navbar />
      <Element name="section1" className="section">
        <img className="profile-image" src={profileImage} alt="Manasa" />
        <h1>Manasa Vinod Kumar</h1>
        <p><b>Sophomore CS Major | Minor in Economics<br />@ the University of Maryland, College Park</b></p>
        <p>I'm passionate about using technology to inspire positive change and enhance human experiences.
          <br/> Beyond my technical work, I’m deeply committed to volunteering and creative pursuits like writing and music, 
          <br/> and strive to contribute to meaningful projects that combine innovation with social impact!</p>
        <a href={resume} target="_blank" rel="noopener noreferrer"><button>Download my Resume</button></a>
        <div className="icon-links">
          <a href="https://github.com/manasalearnscoding" target="_blank" rel="noopener noreferrer">
            <img className="icon" src={githubLogo} alt="GitHub" />
          </a>
          <a href="https://www.linkedin.com/in/manasa-vinod-kumar/" target="_blank" rel="noopener noreferrer">
            <img className="icon" src={linkedinLogo} alt="LinkedIn" />
          </a>
          <a href="mailto:manasavinodkumar@gmail.com" target="_blank" rel="noopener noreferrer">
            <img className="icon" src={gmailLogo} alt="Gmail" />
          </a>
        </div>
      </Element>

      <div className="parallax"></div>

      <Element name="section2" className="section">
        <Skills/>
      </Element>

      {/* <div className="parallax"></div> */}

      {/* <Element name="section3" className="section">
        <h1>Section 3</h1>
        <p>Here’s some content for Section 3.</p>
      </Element> */}
    </>
  );
};

export default HomePage;