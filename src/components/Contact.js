import { useEffect, useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";

const Contact = () => {

    const [display, setDisplay] = useState(false);
    const [clientLocation, setClientLocation] = useState(null);

    //this is the lat and lng of (39042 donnerway fremont)
    const [address, setAddress] = useState({ lat: 37.5369171, lng: -121.9967956});

    const toRadians = (degrees) => {
          return degrees * (Math.PI/180);
    }

    //calculate distance
    const calculateDistance = (coord1, coord2) => {
      const earthRadius = 6371;

      const lat1 = toRadians(coord1.lat) ;
      const lng1 = toRadians(coord1.lng);
      const lat2 = toRadians(coord2.lat);
      const lng2 = toRadians(coord2.lng);

      const dlat = lat2-lat1;
      const dlon = lng2-lng1;

      //formula
      const a = Math.sin(dlat / 2) ** 2 + Math.cos(lat1) * Math.cos(lat2) * Math.sin(dlon / 2) ** 2;
      const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    
      return earthRadius*c;

    }

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
      console.log( "the distance is",calculateDistance(clientLocation, address), "km");
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