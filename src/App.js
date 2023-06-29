import './App.css';
import './Logo.png';
import Rate from './Rate.js';
import { BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';


function App() {
  function Home(){
    return <h2> Home </h2>;
  }

  function About(){
    return <h2> About </h2>;
  }

  function Contact(){
    return <h2> Contact </h2>;
  }
  return (
  
    
      <div className="App Full-page">
        <div>
        <Router>
        <nav>
          <div >
          <ul className = "horizontal-list">
            <li>
              <Link to="/" className="nav-link"> Home </Link>
            </li>
            <li>
              <Link to="/about" className="nav-link"> About </Link>
            </li>
            <li>
              <Link to="/contact" className="nav-link"> Contact </Link>
            </li>
          </ul>
          </div>
        </nav>

       <Routes>
       <Route path = "/" Component={Home} />
       <Route path = "/about" Component={About}/>
       <Route path = "/contact" Component={Contact}/>
       </Routes>

       </Router>
        </div>
        
       <div className = "image-container">
       <img src={require('./port.jpg')} className = "profile-image" width = "200" />
       </div>
       


       <p class = "first-paragraph">
        "Aspiring software engineering"
       </p>

       

       
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
