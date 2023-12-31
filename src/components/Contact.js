import React, { useEffect, useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import googleMapReact from 'google-map-react';
import ClipLoader from "react-spinners/ClipLoader";
import "../App.css";
import { render, waitFor } from '@testing-library/react';

const Contact = () => {
  const [phNumber, setPhNumber] = useState(0);
  const [display, setDisplay] = useState(true);
  const [isLoading, setLoading] = useState(false);
  const [showMap, setShowMap] = useState(false);
  const [distance, setDistance] = useState(null);

  useEffect(() => {
    setPhNumber(5103589824);
  }, [])

  const toRadians = (degrees) => {
    return degrees * (Math.PI / 180);
  }

  const calculateDistance = (coord1, coord2) => {
    const earthRadius = 6371;
    console.log(coord1); 
    const lat1 = toRadians(coord1.latitude);
    const lng1 = toRadians(coord1.longitude);
    const lat2 = toRadians(coord2.lat);
    const lng2 = toRadians(coord2.lng);
    const dlat = lat2 - lat1;
    const dlon = lng2 - lng1;
    const a = Math.sin(dlat / 2) ** 2 + Math.cos(lat1) * Math.cos(lat2) * Math.sin(dlon / 2) ** 2;
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return earthRadius * c;
  }

  const distancePrompt = () => {
    setLoading(true);

    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {

        const calculateDistancePromise = new Promise(
              (resolve) => {
                const dist = calculateDistance(position.coords, address);
                console.log(dist);
                resolve(dist);
              }
        );
        
        calculateDistancePromise.then((dist) => {
          setDistance(dist); 
          setLoading(false);
          setShowMap(true);
        })
      });
    } else {
      alert("Geolocation is not available in your browser.");
    }
  }

  const address = { lat: 37.5369171, lng: -121.9967956 };

  return (
    <div className={`${display ? 'fade-in' : ''} content`}>
      {isLoading ? (
        <ClipLoader
          color={"orange"}
          loading={isLoading}
          size={150}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      ) : null}

      <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=geometry" defer></script>
      <div className="contactWrapper">
        <button className='btn btn-primary'>
          <img src={require('../assets/phone.png')} width="50px" style={{ margin: '20px' }} />
          <a href={`tel:${phNumber}`} style = {{fontSize: "20px", textDecoration:"none", color:"white"}}> {phNumber} </a>
        </button>
        <button className='btn btn-primary'>
          <img src={require('../assets/email.png')} width="50px" style={{ margin: '20px' }} />
          <a href="mailto:nyihtet4dev@icloud.com" style = {{ fontSize: "20px", textDecoration:"none", color:"white"}}>nyihtet4dev@icloud.com</a>
        </button>
        <button className='btn btn-primary' onClick={distancePrompt}>
          <img src={require('../assets/map.png')} width="50px" style={{ margin: '20px', fontSize: "25px"}} />39042 donnerway fremont CA
        </button>
      </div>

      
        {/* code for displaying the prompt below */}
        <div id="map" style={{ margin: "30px", padding: "30px", animation: "fadeIn 3s ease", backgroundColor: "blue" }}>
        {showMap ? (<div>
              Distance: {distance} km
        </div>): ("Click on the items to see the functions")}
        </div>
    
    </div>
  );
}

export default Contact;
