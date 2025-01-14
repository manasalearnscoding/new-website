import React from "react";
import "./assets/Skills.css";
import jsLogo from "./assets/images/js-logo.png";
import pythonLogo from "./assets/images/python-logo.png";
import javaLogo from "./assets/images/java-logo.png";
import cLogo from "./assets/images/c-logo.png";
import assemblyLogo from "./assets/images/assembly-logo.png";
import otherLogo from "./assets/images/other-logo.jpg";

function SkillCard({ logo, title, description }) {
  return (
    <div className="skill-card">
      <img src={logo} alt={title} className="skill-logo" />
      <h3 className="skill-title">{title}</h3>
      <p className="skill-description">{description}</p>
    </div>
  );
}

const skillsData = [
  {
    logo: jsLogo,
    title: "HTML, CSS, Javascript",
    description: "Experienced in ES6+, building dynamic web applications, and responsive designs. Experience with React, building reusable components and SPAs. Experience with Node.js, building backend services and APIs.",
  },
  {
    logo: javaLogo,
    title: "Java",
    description: "Experienced in object-oriented programming principles and building robust, modular applications. Coursework and projects in developing data structures, algorithms, and GUI-based applications. Proficient in writing clean, maintainable code.",
  },
  {
    logo: pythonLogo,
    title: "Python",
    description: "Experienced in data science and machine learning. Build predictive models and analyzed datasets with libraries like NumPy, Pandas, Seaborn, RegEx, and Matplotlib for data analysis, manipulation, and visualization, and scikit-learn for implementing machine learning algorithms.",
  },
  {
    logo: cLogo,
    title: "C",
    description: "Experienced in C, focusing on systems programming and performance optimization. Projects include an explicit list memory allocator and matrix optimization using cache hierarchy and multi-threading. Experience in low-level memory management and writing efficient, high-performance code.",
  },
  {
    logo: assemblyLogo,
    title: "Assembly",
    description: "Experience with x86 assembly, focusing on low-level programming and performance optimization. Worked on projects involving packed structs, optimizing data access and manipulation without relying on the stack. Implemented efficient solutions by leveraging register operations and understanding hardware-level constraints.",
  },
  {
    logo: otherLogo,
    title: "Design/Creative tools",
    description: "Experience in creative design tools like Figma, Adobe Photoshop, and Illustrator to create visually appealing and user-friendly interfaces. Focus on intuitive, responsive layouts and accessibility."
  }
  
];

const SkillsSection = () => (
  <div className="skills-section">
    <h2 className="section-title">Skills</h2>
    <div className="skills-grid">
      {skillsData.map((skill, index) => (
        <SkillCard
          key={index}
          logo={skill.logo}
          title={skill.title}
          description={skill.description}
        />
      ))}
    </div>
  </div>
);

export default SkillsSection;
