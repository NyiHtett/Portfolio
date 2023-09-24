import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';

function Projects() {
  const [showProjects, setShowProjects] = useState(false);

  useEffect(() => {
    setShowProjects(true);
  }, []);

  return (
    <div className={`ProjectsWrapper ${showProjects ? 'show' : ''}`}>
      <div className="ProjectItems">
        <img className="ProjectsImage" src={require('../assets/weatherapp.png')} alt="Card image cap" />
        <div className="ProjectDescription">
          <h3>Mapify</h3>
          <p>A React web app that generates the temperature and weather conditions of a specific city.</p>
          <a href="https://my-mapify.vercel.app/" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Go to the website</a>
        </div>
      </div>

      <div className="ProjectItems">
        <img className="ProjectsImage" src={require('../assets/GWH.png')} alt="Card image cap" />
        <div className="ProjectDescription">
          <h3>Header & Slider</h3>
          <p>My contribution to a charity organization for the functionality of header and slider.</p>
          <a href="https://header-goodworkhub.vercel.app/" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Go to the website</a>
        </div>
      </div>

      <div className="ProjectItems">
        <ReactPlayer
          url="https://www.youtube.com/watch?v=jKqS-c-PX14"
          controls={true}
        />
        <div className="ProjectDescription">
          <h3>Good Work Hub Flutter app</h3>
          <p>A basic Flutter app with sign-in and log-in functionalities.</p>
          <a href="https://github.com/goodworkhub-dev/flutter-mobile-app" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Go to the git repo</a>
        </div>
      </div>

      <div className="ProjectItems">
        <ReactPlayer
          url="https://www.youtube.com/watch?v=gx_wrAExU8Y&t=33s"
          controls={true}
        />
        <div className="ProjectDescription">
          <h3>Calculator</h3>
          <p>A simple React Calculator web app.</p>
          <a href="https://calculator-react-nyihtett.vercel.app/" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Go to the website</a>
        </div>
      </div>

      <div className="ProjectItems">
        <img className="ProjectsImage" src={require('../assets/nyiWebflow.png')} alt="Card image cap" />
        <div className="ProjectDescription">
          <h3>Artistic Flowfolio</h3>
          <p>Duplicate portfolio using the modern front-end web design tool - Webflow.</p>
          <a href="https://nyi-practice.webflow.io/" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Go to the website</a>
        </div>
      </div>

      <div className="ProjectItems">
        <img className="ProjectsImage" src={require('../assets/BookShareHub.png')} alt="Card image cap" />
        <div className="ProjectDescription">
          <h3>BookShareHub</h3>
          <p>Website intended to share my books.</p>
          <a href="https://book-share-hub.vercel.app/" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Go to the website</a>
        </div>
      </div>

      <div className="ProjectItems">
        <img className="ProjectsImage" src={require('../assets/ageverifypro.png')} alt="Card image cap" />
        <div className="ProjectDescription">
          <h3>AgeVerifyPro</h3>
          <p>Website to check your financial status based on your age.</p>
          <a href="https://ageverify.vercel.app/" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Go to the website</a>
        </div>
      </div>
    </div>
  );
}

export default Projects;
