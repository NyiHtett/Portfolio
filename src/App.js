import Certifications from './components/Certifications';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import About from './components/About.js';
import { BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import Music from './components/Music.js';
import Projects from './components/Projects.js';
import Contact from './components/Contact';
import OpenAI from 'openai';
import './App.css';
function App() {
  const [theme, setTheme] = useState('light');
  const [isNavAnimated, setIsNavAnimated] = useState(false);
  const [isChangeImage,setChangeImage] = useState(false);
  const [git, setGit] = useState(true);
  const openai = new OpenAI(); 
  
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
       {/* <div className = "image-container">
       //<img src={require('./assets/port.jpg')} className = "profile-image" width = "200" alt = "Profile image"/>
       </div> */}

       {/* <p class = "first-paragraph" style = {{marginTop: "50px"}}>
        "Aspiring web developer"
       </p> */}

       <h1> Learning Basic AI using tools </h1>
       <h2 src="https://experiments.withgoogle.com/teachable-machine"> Teachable Machine </h2>
       <h2 src="https://quickdraw.withgoogle.com/"> Quick Draw </h2>

       <h1> Create your AI buddy that knows about you ! </h1>
       <h1> The more you chat with your buddy, the more it get smarter ! </h1>

       <h1> Part 0, create starting flag, and add forever loop</h1>
       <h1> Part 1, make AI to get your question</h1>
       <img src='./assetsForScratch/Part 1.png'/>
       <img src='./assetsForScratch/Part 1 code.png'/>


       <h1> Part 2, search your question in the prompt bank</h1>
       <img src='./assetsForScratch/Part 2.png'/>
       <img src='./assetsForScratch/Part 2 code.png'/>

       <h1> Part 3, if not found, add your question</h1>
       <img src='./assetsForScratch/Part 3.png'/>
       <img src='./assetsForScratch/Part 3 code.png'/>
      </div>
    );
  }

  return (
  
      
    
      <div className={`App Full-page ${theme}`}>
        <div className="uppperbody">
        <Router>
          <style>
          </style>
        <nav>
          <div className = "container">
          <ul className = "horizontal-list row">
            <li className = "col-12 col-lg-2">
              <Link to="/" className="nav-link" onClick={handleNavigation}> Home </Link>
            </li>
            <li className = "col-12 col-lg-2">
              <Link to="/projects" className="nav-link" onClick={handleNavigation}> Projects </Link>
            </li>
            <li className = "col-12 col-lg-2">
              <Link to="/about" className="nav-link" onClick={handleNavigation}> About </Link>
            </li>
            <li className = "col-12 col-lg-2">
              <Link to="/certifications" className="nav-link" onClick={handleNavigation}> Certifications </Link>
            </li>
            <li className = "col-12 col-lg-2">
              <Link to="/contact" className="nav-link" onClick={handleNavigation}> Contact </Link>
            </li>
            <li className = "lightswitch col-12 col-lg-2" 
            onMouseDown={() =>{
              toggleTheme();
              changeImage();
              if ( git == true){
                setGit(false);
              }
              else {
                setGit(true);
              }
            }}
            >

       

      
          <input type = "checkbox" id = "toggle"/>
          <label for = "toggle"></label>
            </li>
          </ul>
          </div>
        </nav>

        <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/projects" element={<Projects/>} />
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

       <ul className = "horizontal-list-footer">
        <li>
        <a href = "https://www.linkedin.com/feed/" target = "_blank"> 
       <img src = {require('./assets/Logo.png')} width = "50"  alt = "LinkedIn Logo"/>
       </a>
        </li>
        <li>
        <a href = "https://github.com/NyiHtett" target = "_blank"> 
       <img src = {require(`./assets/${git ? 'Git' : 'gitt'}.png`)} width = "50" alt = "GitHub Logo"/>
       </a>
        </li>
        <li>
        <a href = "https://twitter.com/NyiHtet20765409" target = "_blank"> 
       <img src = {require('./assets/twitter.png')} width = "50" alt = "Twitter logo"/>
       </a>
        </li>
        <li>
          <a href="https://www.youtube.com/channel/UCQnPj__dVP9FATFTO42-NNw"> 
          <img src = {require('./assets/youtube.png')} width = "50" alt = "Youtube logo"/>
          </a>
        </li>
       </ul>
       </div>
       
    </div>

   
    
  );
}

export default App;
