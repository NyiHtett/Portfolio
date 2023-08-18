import React from 'react'
import { useEffect, useState } from 'react';
function Projects() {
    const [showProjects, setShowProjects] = useState(false);

    useEffect(()=>{
      setShowProjects(true);
    },[])
  return (
    <div class = {`ProjectsWrapper ${showProjects ? 'show': ''}`}>
            
        <div class = "ProjectItems" >
              <img class="ProjectsImage" src={require('./weatherapp.png')}  alt="Card image cap"/>
        <div class = "ProjectDescription" >
              <h3> Mapify </h3>
              <p>A react web app which generate the temperature and weather condition of a specific city </p>
              <a href="https://my-mapify.vercel.app/" target = "_blank" class="btn btn-primary">Go to the website</a>
        </div>
        </div>

        <div class = "ProjectItems" >
              <img class="ProjectsImage" src={require('./GWH.png')}   alt="Card image cap"/>
        <div class = "ProjectDescription" >
        <h3> Header & Slider</h3>
        <p> My contribution to a charity organization for the functionality of header and slider </p>
        <a href="https://header-goodworkhub.vercel.app/" target = "_blank" class="btn btn-primary">Go to the website</a>
        </div>
        </div> 

        <div class = "ProjectItems" >
              <video controls style={{width:'500px'}}>
                  <source src={require('./demo.mp4')} type = "video/mp4"></source>
              </video>
        <div class = "ProjectDescription" >
              <h3> Good Work Hub Flutter app </h3>
              <p>A basic flutter app with sign in and log in functionalities </p>
              <a href="https://github.com/goodworkhub-dev/flutter-mobile-app" target = "_blank" class="btn btn-primary">Go to the git repo</a>
        </div>
        </div>

        <div class = "ProjectItems" >
              <img class="ProjectsImage" src={require('./nyiWebflow.png')}  alt="Card image cap"/>
        <div class = "ProjectDescription" >
        <h3> Artistic Flowfolio </h3>
              <p>Duplicate portfolio using modern front-end web design tool - Webflow </p>
              <a href="https://nyi-practice.webflow.io/" target = "_blank" class="btn btn-primary">Go to the website</a>
        </div>
        </div>

        <div class = "ProjectItems" >
              <img class="ProjectsImage" src={require('./BookShareHub.png')}   alt="Card image cap"/>
        <div class = "ProjectDescription" >
        <h3> BookShareHub</h3>
        <p> Website intended to share my books </p>
        <a href="https://book-share-hub.vercel.app/" target = "_blank" class="btn btn-primary">Go to the website</a>
        </div>
        </div>

        

        <div class = "ProjectItems" >
              <img class="ProjectsImage" src={require('./ageverifypro.png')}   alt="Card image cap"/>
        <div class = "ProjectDescription" >
        <h3> AgeVerifyPro</h3>
        <p> Website check your financial status based on your age </p>
        <a href="https://ageverify.vercel.app/" target = "_blank" class="btn btn-primary">Go to the website</a>
        </div>
        </div>

        


    </div>
  );
}

export default Projects;
