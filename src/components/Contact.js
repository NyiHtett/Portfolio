import { useEffect, useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";

const Contact = () => {

    const [display, setDisplay] = useState(true);
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
      if (clientLocation !== null){
        const mapElement = document.getElementById("map");
        mapElement.style.backgroundColor = "blue";
        mapElement.textContent = "you are " + calculateDistance(clientLocation, address) +"km away from Nyi";
      }
      
    }

    return(
        
        <div className = {`${display ? 'fade-in' : ''} content`}> 
        <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAeXeJpfEQIB3nn4tfIf--WXQfZZ8jCX5w&libraries=geometry" defer></script>
        <div className = "contactWrapper">
        <div>
          <img src = {require('../assets/phone.png')} width = "50px" style = {{margin: '20px'}}/>
          (510) - 3589824</div>
        <div>
        <img src = {require('../assets/email.png')} width = "50px" style = {{margin: '20px'}}/>
          <a href = "mailto:nyihtet4dev@icloud.com"> nyihtet4dev@icloud.com </a></div>
        <div onClick={distancePrompt} >
        <img src = {require('../assets/map.png')} width = "50px" style = {{margin: '20px'}}/>39042 donnerway fremont CA</div>
        </div>
        <div id="map" style={{margin: "30px" ,padding: "30px", animation:"fadeIn 3s ease"}}></div> 
      </div>
    );
}

export default Contact;

{/* 

*/}

// import React, { useEffect, useState } from 'react';
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap";

// const Contact = () => {
//   const [display, setDisplay] = useState(false);
//   const [clientLocation, setClientLocation] = useState(null);
//   const [address, setAddress] = useState({ lat: 37.5369171, lng: -121.9967956 });
//   const [map, setMap] = useState(null);
//   const [distance, setDistance] = useState(null);

//   const toRadians = (degrees) => {
//     return degrees * (Math.PI / 180);
//   }

//   const calculateDistance = (coord1, coord2) => {
//     const earthRadius = 6371;

//     const lat1 = toRadians(coord1.lat);
//     const lng1 = toRadians(coord1.lng);
//     const lat2 = toRadians(coord2.lat);
//     const lng2 = toRadians(coord2.lng);

//     const dlat = lat2 - lat1;
//     const dlon = lng2 - lng1;

//     const a = Math.sin(dlat / 2) ** 2 + Math.cos(lat1) * Math.cos(lat2) * Math.sin(dlon / 2) ** 2;
//     const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

//     return earthRadius * c;
//   }

//   const distancePrompt = () => {
//     if ("geolocation" in navigator) {
//       navigator.geolocation.getCurrentPosition((position) => {
//         setClientLocation({
//           lat: position.coords.latitude,
//           lng: position.coords.longitude,
//         });
//       });
//     } else {
//       alert("Geolocation is not available in your browser.");
//     }
//   }

//   useEffect(() => {
//     setDisplay(true);

//     // Initialize the Google Map when the component mounts
//     const google = window.google;
//     if (google) {
//       const mapElement = document.getElementById('map');
//       const gMap = new google.maps.Map(mapElement, {
//         center: { lat: 37.5369171, lng: -121.9967956 },
//         zoom: 10, // You can adjust the initial zoom level
//       });
//       setMap(gMap);
//     }
//   }, []);

//   useEffect(() => {
//     if (clientLocation && map) {
//       const dist = calculateDistance(clientLocation, address);
//       setDistance(dist);

//       // Create a marker for the client's location
//       new google.maps.Marker({
//         position: clientLocation,
//         map: map,
//         title: 'Your Location',
//       });

//       // Create a marker for the fixed address
//       new google.maps.Marker({
//         position: address,
//         map: map,
//         title: '39042 Donner Way, Fremont, CA',
//       });

//       // Calculate and display a polyline between the two markers
//       const line = new google.maps.Polyline({
//         path: [clientLocation, address],
//         geodesic: true,
//         strokeColor: '#FF0000',
//         strokeOpacity: 1.0,
//         strokeWeight: 2,
//       });
//       line.setMap(map);
//     }
//   }, [clientLocation, address, map]);

//   return (
//     <div className={`${display ? 'fade-in' : ''} content`}>
//       <div className="contactWrapper">
//         <div>
//           <img src={require('../assets/phone.png')} width="50px" style={{ margin: '20px' }} />
//           5103589824
//         </div>
//         <div>
//           <img src={require('../assets/email.png')} width="50px" style={{ margin: '20px' }} />
//           <a href="mailto:nyihtet4dev@icloud.com">nyihtet4dev@icloud.com</a>
//         </div>
//         <div onClick={distancePrompt}>
//           <img src={require('../assets/map.png')} width="50px" style={{ margin: '20px' }} />
//           39042 Donner Way, Fremont, CA
//         </div>
//         {distance !== null && (
//           <div>
//             Distance: {distance.toFixed(2)} km
//           </div>
//         )}
//       </div>
//       <div id="map" style={{ height: '400px', width: '100%' }}></div>
//     </div>
//   );
// }

// export default Contact;
