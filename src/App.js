
import './Logo.png';

import Certifications from './Certifications';
import gifImage from './dance.gif';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Rate from './Rate.js';
import About from './About.js';
import * as Three from 'three';
import { BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import Music from './Music.js';
import TodoList from './TodoList';

function App() {
  const [theme, setTheme] = useState('light');
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isNavAnimated, setIsNavAnimated] = useState(false);
  const [isChangeImage,setChangeImage] = useState(false);

  function handleNavigation() {
    setIsNavAnimated(true); 
    setTimeout(() => {
      setIsNavAnimated(false);
    }, 500);
  }

  function changeImage() {
    if(isChangeImage == true)
    {
      setChangeImage(false);
    }
    else
    {
      setChangeImage(true);
    }
    
  }

  function toggleTheme() {
    setTheme(prevTheme => ( prevTheme === 'light' ? 'dark' : 'light'));
  }
  function Home(){
    return (
      <div className = {`${isNavAnimated ? 'fade-in' : ''}`}>
        <div className = "image-container">
       <img src={require('./port.jpg')} className = "profile-image" width = "200" />
       </div>

       <p class = "first-paragraph">
        "Aspiring software engineer"
       </p>
      
      </div>
    );
  }

  function Projects(){
    return (
      <div className = {`${isNavAnimated ? 'fade-in' : ''}`}>
        {/* <div className = "weather-app">
        <a href='https://my-mapify.vercel.app/'>
          <img  className = "weather-image" width = "300" src={require('./weatherapp.png')} />
        </a>
        <p className = "weather-content">
          A simple react weather application 
          <br/>
          Generate the temperature and weather condition of a specific city
        </p>
        </div> */}
        <div class="card" style={{width: "22rem",marginLeft:"50px"}}>
  <img class="card-img-top" src={require('./weatherapp.png')}  alt="Card image cap"/>
  <div class="card-body">
    <h5 class="card-title">Mapify</h5>
    <p class="card-text">A react web app which generate the temperature and weather condition of a specific city </p>
    <a href="https://my-mapify.vercel.app/" target = "_blank" class="btn btn-primary">Go to the website</a>
  </div>
</div>
<div>
<TodoList/>
</div>


        
        
      </div>
    );
  }

  function About(){
    return (
      <div className = {`${isNavAnimated ? 'fade-in' : ''}`}>
        <div className="about">
      <h2>Educational Background</h2>
      <div className="timeline">
      <div className="timeline-item">
          <h3>2022 - Present</h3>
          <h4>Ohlone College</h4>
          <p>Bachelor of Science in Computer Science</p>
          <p>Major GPA: 4.0</p>
        </div>
        <div className="timeline-item">
          <h3>2019 - 2020</h3>
          <h4>UCSY</h4>
          <p>Bachelor of Science in Computer Science</p>
        </div>
        <div className="timeline-item">
          <h3>2017 - 2019</h3>
          <h4>  CAE </h4>
          <p>High School Diploma</p>
          <p>Achievements: Honor Roll</p>
        </div>
        <div className="timeline-item">
          <h3>2014 - 2017</h3>
          <h4>Middle School BEHS(3)</h4>
          <p>Achievements: Student Council Member</p>
        </div>
      </div>
    </div>
      </div>
    );
  }


  function Contact(){
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(()=>{
      const timer = setInterval(()=>{
        setCurrentTime(new Date());
      },1000)

      return () => {
        clearInterval(timer);
      }

    }, []);

    

    return (
      <div className = {`${isNavAnimated ? 'fade-in' : ''} content`}> 
      <div className = "gifContainer">
      <img width="400" src={gifImage} alt="Example GIF" style={{padding: '20px'}}/>
      </div>
      <div className = "contactInfo"> 
     
        <br/>
        <h2 style = {{maxWidth:'', alignItems:'center',textShadow: '2px black', padding: '20px'}}> Alright we gotta roll</h2>
        <div style={{textAlign:'center'}}>
        <p>Phone number: 5103589824</p>
        <p>Email: nyihtet4dev@icloud.com</p>
        <p>Address: 39042 donnerway fremont CA</p>
        </div>
      </div>
      </div>
    );
  }
  return (
  
    
    
      <div className={`App Full-page ${theme}`}>
        <div className="uppperbody">
        <Router>
        <nav>
          <div >
          <ul className = "horizontal-list">
            <li>
              <Link to="/" className="nav-link" onClick={handleNavigation}> Home </Link>
            </li>
            <li>
              <Link to="/projects" className="nav-link" onClick={handleNavigation}> Projects </Link>
            </li>
            <li>
              <Link to="/about" className="nav-link" onClick={handleNavigation}> About </Link>
            </li>
            <li>
              <Link to="/certifications" className="nav-link" onClick={handleNavigation}> Certifications </Link>
            </li>
            <li>
              <Link to="/contact" className="nav-link" onClick={handleNavigation}> Contact </Link>
            </li>
            <li className = "last-list">
            <button 
            onClick={() =>{
              toggleTheme();
              handleNavigation();
              changeImage();
            }}
            className = "image-button"
            >
{/* ./light.png */}
        
         <img src={require(`./${isChangeImage ? 'moon' : 'light'}.png`)} width = "50" height = "50" />
       </button>
            </li>
          </ul>
          </div>
        </nav>

        <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/projects" element={<Projects />} />
  <Route path="/about" element={<About />} />
  <Route path="/contact" element={<Contact />} />
  <Route path="/music" element={<Music/>} />
  <Route
    path="/certifications"
    element={<Certifications additionalInfo = {isNavAnimated}/>}
  />
</Routes>


       </Router>
        </div>
        
       

       
       <div className = "Footer">

       <ul className = "horizontal-list">
        <li>
        <a href = "https://www.linkedin.com/feed/" target = "_blank"> 
       <img src = {require('./Logo.png')} width = "50"  alt = "LinkedIn Logo"/>
       </a>
        </li>
        <li>
        <a href = "https://github.com/NyiHtett" target = "_blank"> 
       <img src = {require('./Git.png')} width = "50"/>
       </a>
        </li>
        <li>
        <a href = "https://twitter.com/NyiHtet20765409" target = "_blank"> 
       <img src = {require('./twitter.png')} width = "50" alt = "Github profile"/>
       </a>
        </li>
        <li>
          <a href="mailto:nyihtet4dev@icloud.com"> 
          <img src = {require('./email.png')} width = "50" />
          </a>
        </li>
       </ul>
       </div>
       
    </div>

   
    
  );
}

export default App;
