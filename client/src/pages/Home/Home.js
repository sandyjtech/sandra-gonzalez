import React, { useEffect, useState } from 'react';
import './Home.css'; // Import your CSS file for styling

const Home = () => {
  const [text, setText] = useState('');
  const introText = "<p>Hello, I am Sandra Gonzalez, a Full Stack Software Engineer.</p>";

  useEffect(() => {
    let charIndex = 0;
    const typingInterval = setInterval(() => {
      if (charIndex < introText.length) {
        setText((prevText) => prevText + introText.charAt(charIndex));
        charIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100); 
  }, []);

  return (
    <div className="home">
      <div className="laptop">
        <div className="screen">
          <h1>{introText}</h1>
        </div>
        <div className="keyboard">
          <div className="key-row">
            <div className="key">Q</div>
            <div className="key">W</div>
            <div className="key">E</div>
            <div className="key">R</div>
            <div className="key">T</div>
          </div>
          <div className="key-row">
            <div className="key">A</div>
            <div className="key">S</div>
            <div className="key">D</div>
            <div className="key">F</div>
            <div className="key">G</div>
            
          </div>
         
        </div>
      </div>
      <div className="divider"></div>
      <div className="cover-letter">
        <div className="cover-letter-heading">
          <span className="cursive-hello">Hello,</span>
        </div>
        <div className="cover-letter-text">
          <p>
            I am Sandra Gonzalez, a Full Stack Software Engineer with a passion for creating innovative solutions and bringing ideas to life. I'm ready to take on new challenges and contribute to exciting projects.
          </p>
        </div>
      </div>
      <div className="divider"></div>
      <div className="video-section">
        <div className="title"><h1 className="title">My achievements </h1></div>
       
        <iframe width="560" height="315" src="https://www.youtube.com/embed/2dOgMkUmgr0?si=oS07dMRMz7wMPI-x" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
      </div>
    </div>
  );
};

export default Home;