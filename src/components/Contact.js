import { useEffect, useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";

const Contact = () => {

    const [display, setDisplay] = useState(false);
    const [clientLocation, setClientLocation] = useState(null);

    const distancePrompt = () => {
      //get the client's location

      if ("geolocation" in navigator){
        navigator.geolocation.getCurrentPosition((position)=> {
                  setClientLocation({
                    lat: position.coords.latitude,
                    lng: position.coords.longitude,
                  });
        });
      }
      clientLocation ? alert(`location is lat: ${clientLocation.lat} and lng: ${clientLocation.lng}`) : alert('Still fetching try later ...');
    }

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
          <a href = "mailto:nyihtet4dev@icloud.com"> nyihtet4dev@icloud.com </a></div>
        <div onClick={distancePrompt} >
        <img src = {require('../assets/map.png')} width = "50px" style = {{margin: '20px'}}/>39042 donnerway fremont CA</div>
        </div>
      </div>
    );
}

export default Contact;