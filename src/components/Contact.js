import { useEffect, useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";

const Contact = () => {

    const [display, setDisplay] = useState(false);

    useEffect(()=>{
        setDisplay(true);
    },[])

    return(
        <div className = {`${display ? 'fade-in' : ''} content`}> 
        <div className = "contactWrapper">
          
        <div>
          <img src = {require('../assets/phone.png')} width = "50px" style = {{margin: '20px'}}/>
          5103589824</div>
        <div>
        <img src = {require('../assets/email.png')} width = "50px" style = {{margin: '20px'}}/>
          nyihtet4dev@icloud.com</div>
        <div >
        <img src = {require('../assets/map.png')} width = "50px" style = {{margin: '20px'}}/>39042 donnerway fremont CA</div>
        </div>
      </div>
    );
}

export default Contact;