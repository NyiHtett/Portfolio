import './App.css';
import './Logo.png';


import gifImage from './among-us.gif';
import Rate from './Rate.js';
import About from './About.js';
import * as Three from 'three';
import { BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import React, { useEffect, useState } from 'react';

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
        "Aspiring software engineering"
       </p>
       <p> Coming right up</p> 
      </div>
    );
  }

  function Projects(){
    return (
      <div className = {`${isNavAnimated ? 'fade-in' : ''}`}>
        <div className = "weather-app">
        <a href='https://my-mapify.vercel.app/'>
          <img  className = "weather-image" width = "300" src={require('./weatherapp.png')} />
        </a>
        <p className = "weather-content">
          A simple react weather application 
          <br/>
          Generate the temperature and weather condition of a specific city
        </p>
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
        <div className = "time">
           Current time: {currentTime.toLocaleTimeString()}
        </div>
        <br/>
      <img width="200" src={gifImage} alt="Example GIF" />
      </div>
      <div className = "contactInfo"> 
      <p>Phone number: 5103589824</p>
        <p>Email: nyihtet4dev@icloud.com</p>
        <p>Address: 39042 donnerway fremont CA</p>
      </div>
      </div>
    );
  }
  return (
  
    
      <div className={`App Full-page ${theme}`}>
        <div>
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
              <Link to="/contact" className="nav-link" onClick={handleNavigation}> Contact </Link>
            </li>
            <li>
            <button 
            onClick={() =>{
              toggleTheme();
              handleNavigation();
              changeImage();
            }}
            >
{/* ./light.png */}
        
         <img src={require(`./${isChangeImage ? 'moon' : 'light'}.png`)} width = "50" height = "50" />
       </button>
            </li>
          </ul>
          </div>
        </nav>

       <Routes>
       <Route path = "/" Component={Home} />
       <Route path = "/projects" Component = {Projects} />
       <Route path = "/about" Component={About}/>
       <Route path = "/contact" Component={Contact}/>
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
       <img src = {require('./Git.png')} width = "50" alt = "Github profile"/>
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
