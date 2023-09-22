/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useState } from "react";
import "./projects.css";
import { FaChevronCircleRight, FaChevronCircleLeft } from "react-icons/fa";
import { useBlogs } from "../../context/BlogsContext";
import { Link } from "react-router-dom";

const topAchievements = [
  {
    title: "NFLeague",
    description: "I've built a Full Stack Fantasy Football App with a Python Flask backend, React frontend, SQLAlchemy database, Socket.io chat feature, data fetching from multiple APIs, and an elegant drag-and-drop interface.",
    video: "https://drive.google.com/file/d/1OswkTXvCAthvA92tyyojGqP4eEecqmce/preview",
  },
  {
    title: "MYFLIX",
    description: "I built MYFLIX, which uses Axios for movie data from the Movie DB API, Firebase for user auth, and has responsive mobile design.",
    video: "https://drive.google.com/file/d/1gNWNtxBzAsnYPQS3AORyBWhNv418tTfk/preview",
  },
  {
    title: "Bad Reads",
    description: "Contributed in the creation of Badreads, a web app for book enthusiasts with an intuitive UI, search, book info, and user reviews, showcasing my JavaScript, React and web development skills.",
    video: "https://drive.google.com/file/d/1MI9IyB_5lg_bDHZeA78kSKOc8mpWkuub/preview",
  },
  // Add more top achievements here
];

const Projects = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { projects } = useBlogs(); // Call useBlogs inside the component function
  const isFavoriteProjectsSection = true;

  const goToPrevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? topAchievements.length - 1 : prevSlide - 1
    );
  };

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === topAchievements.length - 1 ? 0 : prevSlide + 1
    );
  };

  return (
    <div className="projects-container">
      <h1 className="title">My Favorite Projects</h1>
      <div className="slides-container">
        {isFavoriteProjectsSection && ( // Conditionally render arrows for the favorite projects section
          <>
            <button onClick={goToPrevSlide} className="slide-button prev-button">
              <FaChevronCircleLeft />
            </button>
            <div className="slide">          
              <iframe            
                src={topAchievements[currentSlide].video}           
                frameBorder="0"
                allowFullScreen
              ></iframe>
              <h3>{topAchievements[currentSlide].title}</h3>
              <p>{topAchievements[currentSlide].description}</p>
            </div>
            <button onClick={goToNextSlide} className="slide-button next-button">
              <FaChevronCircleRight />
            </button>
          </>
        )}
      </div>
      <div className="divider"></div>
      <h1 className="title">My Projects</h1>
      <div className="projects">
        {projects.map((project) => (          
            <div className="project-card">
              <h2>{project.title}</h2>
              <p>{project.description}</p>                         
              <iframe playsInline src={project.video} 
              poster={project.title} ></iframe>
              <Link to={project.link} key={project.id} target="_blank"><p>Go to link...</p></Link>  
            </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;