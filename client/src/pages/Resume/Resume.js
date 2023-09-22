import React from "react";
import "./Resume.css";
import {
  FaHtml5,
  FaJs,
  FaReact,
  FaNode,
  FaCss3,
  FaPython,
} from "react-icons/fa";
import { BiLogoFlask } from "react-icons/bi";
import { BsFiletypeSql } from "react-icons/bs";
import { Link } from "react-router-dom";

const skillsList = [
  {
    name: "Web Development",
    iconComponent: <FaHtml5 />,
  },
  {
    name: "JavaScript",
    iconComponent: <FaJs />,
  },
  {
    name: "React",
    iconComponent: <FaReact />,
  },
  {
    name: "Node.js",
    iconComponent: <FaNode />,
  },
  {
    name: "HTML/CSS",
    iconComponent: <FaCss3 />,
  },
  {
    name: "Python",
    iconComponent: <FaPython />,
  },
  {
    name: "Flask",
    iconComponent: <BiLogoFlask />,
  },
  {
    name: "SQLAlchemy",
    iconComponent: <BsFiletypeSql />,
  },
];

const education = [
  {
    institution: "Flatiron School",
    location: "Fresno, CA",
    degree: "Full Stack Web Development",
    details:
      "Python with Flask and JavaScript program, MySQL, 06/2023 - 10/2023",
  },
  {
    institution: "Codecademy",
    location: "Fresno, CA",
    degree: "Front-end Web Development",
    details:
      "React, Javascript, Angular, Ionic, Node.js, Firebase, MongoDB, 09/2019 - 10/2022",
  },
  {
    institution: "Autonomy University",
    location: "Aguascalientes, MX",
    degree: "Bachelor's Degree in Digital Marketing",
    details: "08/2012 - 05/2015",
  },
];

const projects = [
  {
    title: "NFLeague",
    description:
      "Developed a full-stack application using Flask, Python, and React, including database creation with SQLAlchemy.",
  },
  {
    title: "MYFLIX",
    description:
      "Utilized Axios to fetch data from Movie DB API. Firebase for user auth. Responsive design.",
  },
  {
    title: "Pianito",
    description:
      "Created an interactive keyboard interface. Firebase for user auth. User-friendly design.",
  },
  {
    title: "Candy Shop",
    description: "Designed game mechanics. Utilized JavaScript for game logic.",
  },
  {
    title: "Franco Cleaning",
    description:
      "Developed website using JavaScript and Bootstrap. User-friendly interface.",
  },
  {
    title: "My Sous Chef",
    description:
      "Recipe-based website. API rendering and data fetching using JavaScript. Collaborated with a team.",
  },
  {
    title: "Badreads",
    description:
      "Web app for book enthusiasts. Proficiency in JavaScript and web development. User-friendly interface.",
  },
];

const Resume = () => {
  return (
    <div className="resume-container">
      <div className="resume">
        <div className="resume-left">
          <div className="skills">
            <h2>Skills</h2>
            <div className="skills-list">
              {skillsList.map((skill, index) => (
                <div key={index} className="skill">
                  {skill.iconComponent} <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="education">
            <h2>Education</h2>
            {education.map((edu, index) => (
              <div key={index} className="edu-item">
                <h3>{edu.institution}</h3>
                <p>{edu.location}</p>
                <p>{edu.degree}</p>
                <p>{edu.details}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="resume-right">
          <div className="resume-heading">
            <h1>Sandra Gonzalez</h1>
            <p>Full Stack Software Engineer</p>
          </div>
          <div className="resume-section">
            <h2>Cover Letter</h2>
            <p>
              I am a Full Stack Software Engineer with a passion for creating
              innovative solutions and bringing ideas to life. I'm ready to take
              on new challenges and contribute to exciting projects.
            </p>
          </div>
          <div className="projects">
            <h2 style={{ margin: "-5px" }}>Technical Projects</h2>
            {projects.map((project, index) => (
              <div key={index} className="project">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            ))}
          </div>
          <div
            className="resume-divider"
            style={{ marginTop: "150px", marginBottom: "-80px" }}
          ></div>
          <div className="resume-download">
            <Link to="/Sandra-Gonzalez.pdf" target="_blank" download>
              Download PDF
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
