import Certifications from './components/Certifications';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import About from './components/About.js';
import { BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import Music from './components/Music.js';
import Projects from './components/Projects.js';
import Contact from './components/Contact';
import './App.css';
function App() {
  const [theme, setTheme] = useState('light');
  const [isNavAnimated, setIsNavAnimated] = useState(false);
  const [isChangeImage,setChangeImage] = useState(false);
  const [git, setGit] = useState(true);
  
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
       <img src={require('./assets/port.jpg')} className = "profile-image" width = "200" />
       </div>

       <p class = "first-paragraph" style = {{marginTop: "50px"}}>
        "Aspiring web developer"
       </p>
      
       <div style = {{animation: "fadeIn 3s ease", padding:"30px", backgroundColor:"orange", marginTop:"100px", color:"black"}}>
        Hello visitor, my name is Nyi Htet, you can call me sam and I am a computer science student. 
        <br/>
        My hobbies are reading and coding. 
       </div>
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
            {/* <button 
            
            className = "image-button">
        
         <img src={require(`${isChangeImage ? './assets/moon' : './assets/light'}.png`)} width="50"/>
       </button> */}
       

      
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
       <img src = {require(`./assets/${git ? 'Git' : 'gitt'}.png`)} width = "50"/>
       </a>
        </li>
        <li>
        <a href = "https://twitter.com/NyiHtet20765409" target = "_blank"> 
       <img src = {require('./assets/twitter.png')} width = "50" alt = "Github profile"/>
       </a>
        </li>
        <li>
          <a href="https://www.youtube.com/channel/UCQnPj__dVP9FATFTO42-NNw"> 
          <img src = {require('./assets/youtube (1).png')} width = "50" />
          </a>
        </li>
       </ul>
       </div>
       
    </div>

   
    
  );
}

export default App;
