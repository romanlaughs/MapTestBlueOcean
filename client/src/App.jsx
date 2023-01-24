import "./App.css";
import mapStyles from "./mapStyles.js"
import ApiKey from "./apiKey.js";
import React, { useEffect, useRef, useMemo, useState, ReactElement, useCallback, forwardRef, Component } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import { GoogleMap, useJsApiLoader, useLoadScript, LoadScript, Marker, InfoWindow, Autocomplete, DirectionsRenderer } from '@react-google-maps/api';
import { Circles } from 'react-loader-spinner';
// import logo from '../dist/eco.png';
import Gmap from "./Gmap.jsx";

export default function App() {
  return (
    <div>
      <h2>This is the EcoDrive Map Component</h2>
      <Gmap />
    </div>
  )
}





















// const api = ApiKey;

// const containerStyle = {
//   width: '600px',
//   height: '600px'
// };

// const center = {
//   lat: 34.052235,
//   lng: -118.243683
// };

// const options = {
//   styles: mapStyles,
//   disableDefaultUI: true,
//   zoomControl: true,
// }

// const libraries = ["places"];



// export default function App() {
//   const {isLoaded, loadError} = useLoadScript({
//     googleMapsApiKey: api,
//     libraries
//   });

//   const [markers, setMarkers] = React.useState([]);
//   const [directionsResponse, setDirectionsResponse] = React.useState(null);
//   const [distance, setDistance] = React.useState('');
//   const [duration, setDuration] = React.useState('');

//   const pickUpRef = React.useRef();
//   const dropOffRef = React.useRef();

//   const onMapClick = React.useCallback((e) => {
//     setMarkers(current => [...current, {
//       lat: e.latLng.lat(),
//       lng: e.latLng.lng(),
//       time: new Date()
//     }])
//   }, [])

//   const mapRef = React.useRef();
//   const onMapLoad = React.useCallback((map) => {
//     mapRef.current = map;
//   }, [])

//   if (loadError) return "Error Loading Maps";
//   if (!isLoaded) return <Circles />

//   async function calculateRoute() {
//     if (pickUpRef.current.value === '' || dropOffRef.current.value === '') {
//       return
//     }
//     const directionsService = new google.maps.DirectionsService();
//     const results = await directionsService.route({
//       origin: pickUpRef.current.value,
//       destination: dropOffRef.current.value,
//       travelMode: google.maps.TravelMode.DRIVING
//     })

//     setDirectionsResponse(results);
//     setDistance(results.routes[0].legs[0].distance.text);
//     setDuration(results.routes[0].legs[0].duration.text);
//     console.log(results);
//   }

//   function clearRoute() {
//     setDirectionsResponse(null);
//     setDistance('');
//     setDuration('');
//     pickUpRef.current.value = '';
//     dropOffRef.current.value = '';
//   }

//   return (
//         <div className="App">
//           <h1>EcoDrive <span role="img" aria-label="leaf"><img src={logo} height="40px" width="40px" /></span></h1>

//           <div className="route">
//             <h3>Input Your Route</h3>
//             <Autocomplete>
//               <input type="text" name="pickUp" placeholder="Pick-Up Location" ref={pickUpRef}/>
//             </Autocomplete>
//             <Autocomplete>
//               <input type="text" name="dropOff" placeholder="Drop-Off Location" ref={dropOffRef}/>
//             </Autocomplete>
//             <button type="submit" onClick={calculateRoute}>Create Route</button>
//             <button type="submit" onClick={clearRoute}>X</button>
//             <h5>Total Distance:</h5>
//             <h5>{distance}</h5>
//             <h5>Expected Duration:</h5>
//             <h5>{duration}</h5>
//           </div>

//           <GoogleMap
//             mapContainerStyle={containerStyle}
//             zoom={11}
//             center={center}
//             options={options}
//             onClick= {onMapClick}
//             onLoad={onMapLoad}
//           >
//               {/* {markers.map((marker) =>
//                 <Marker
//                   key={marker.time.toISOString()}
//                   position={{lat: marker.lat, lng: marker.lng}}
//                   icon={{
//                     url: "/eco.png",
//                     scaledSize: new window.google.maps.Size(30, 30),
//                     origin: new window.google.maps.Point(0, 0),
//                     anchor: new window.google.maps.Point(15, 15)
//                   }}
//                 />
//               )} */}
//               {directionsResponse && (
//               <DirectionsRenderer directions={directionsResponse}/>
//               )}
//           </GoogleMap>
//         </div>
//         )
// }
















