
// // src/Components/Map.jsx
// import React, { useEffect, useState } from 'react';
// import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';
// import 'leaflet/dist/leaflet.css';
// import './MapComponent.css'; // For styling

// const Map = () => {
//   const [geoData, setGeoData] = useState(null);
//   const [filteredData, setFilteredData] = useState(null);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [selectedCounty, setSelectedCounty] = useState(null);

//   useEffect(() => {
//     // fetch('https://raw.githubusercontent.com/onaio/ona-tech/master/data/kenya-counties.geojson')
//     fetch('https://raw.githubusercontent.com/johan/world.geo.json/master/countries/KEN.geo.json')
//       .then(response => response.json())
//       .then(data => {
//         setGeoData(data);
//         setFilteredData(data); // Initialize filtered data with all counties
//       })
//       .catch(error => console.error('Error fetching GeoJSON data:', error));
//   }, []);

//   useEffect(() => {
//     // Filter data based on search term
//     if (geoData) {
//       const filtered = geoData.features.filter(feature =>
//         feature.properties.name.toLowerCase().includes(searchTerm.toLowerCase())
//       );
//       setFilteredData({
//         type: 'FeatureCollection',
//         features: filtered
//       });
//     }
//   }, [searchTerm, geoData]);

//   const handleSearchChange = (e) => {
//     setSearchTerm(e.target.value);
//   };

//   const handleKeyPress = (e) => {
//     if (e.key === 'Enter') {
//       // Find the first matching county and set it as selected
//       const county = geoData.features.find(feature =>
//         feature.properties.name.toLowerCase() === searchTerm.toLowerCase()
//       );
//       if (county) {
//         setSelectedCounty(county);
//       } else {
//         setSelectedCounty(null); // Clear selection if no matching county found
//       }
//     }
//   };

//   return (
//     <div className="App">
//       <h1>Map with Kenyan Counties</h1>
//       <input
//         type="text"
//         value={searchTerm}
//         onChange={handleSearchChange}
//         onKeyPress={handleKeyPress}
//         placeholder="Search counties by name and press Enter"
//       />
//       <MapContainer center={[-1.2921, 36.8219]} zoom={6} style={{ height: "600px", width: "100%" }}>
//         <TileLayer
//           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//           attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//         />
//         {/* Render all counties */}
//         {filteredData && <GeoJSON data={filteredData} />}
//         {/* Highlight selected county */}
//         {selectedCounty && <GeoJSON data={selectedCounty} style={() => ({ color: 'red' })} />}
//       </MapContainer>
//     </div>
//   );
// };

// export default Map;


// import React, { useEffect, useState } from 'react';
// import { useLocation } from 'react-router-dom';
// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
// import 'leaflet/dist/leaflet.css';
// import L from 'leaflet';

// const Map = () => {
//   const location = useLocation();
//   const [markerPosition, setMarkerPosition] = useState(null);

//   useEffect(() => {
//     const params = new URLSearchParams(location.search);
//     const locationName = params.get('location');
//     if (locationName) {
//       handleShowLocation(locationName);
//     }
//   }, [location]);

//   const handleShowLocation = (locationName) => {
//     // Example logic to set marker position for specific location
//     // Replace with your actual logic to find coordinates for locationName
//     let coordinates = null;
//     if (locationName === 'Mombasa') {
//       coordinates = [-4.0435, 39.6682]; // Example coordinates for Mombasa
//     } else if (locationName === 'Nairobi') {
//       coordinates = [-1.2921, 36.8219]; // Example coordinates for Nairobi
//     }
    
//     if (coordinates) {
//       setMarkerPosition({ lat: coordinates[0], lng: coordinates[1] });
//     }
//   };

//   return (
//     <div className="App">
//       <MapContainer center={[-1.2921, 36.8219]} zoom={6} style={{ height: "600px", width: "100%" }}>
//         <TileLayer
//           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//           attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//         />
//         {markerPosition && (
//           <Marker position={markerPosition} icon={L.icon({ iconUrl: 'path/to/blue-marker-icon.png', iconSize: [25, 41], iconAnchor: [12, 41] })}>
//             <Popup>{location}
//             </Popup>
//       </Marker>
//     )}
//   </MapContainer>
// </div>
// );
// };
// export default Map;




import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import { useLocation } from 'react-router-dom';

// Fix Leaflet marker icon path issue
let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
});

L.Marker.prototype.options.icon = DefaultIcon;

const MapComponent = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const locationName = queryParams.get('location');
  const [position, setPosition] = useState([0, 0]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCoordinates = async () => {
      try {
        const response = await fetch(`https://raw.githubusercontent.com/johan/world.geo.json/master/countries/KEN.geo.json?location=${encodeURIComponent(locationName)}`, {
          headers: {
            // Add headers if required
          },
        });
        if (!response.ok) {
          throw new Error('Failed to fetch coordinates');
        }
        const data = await response.json();
        setPosition([data.lat, data.lng]);
      } catch (error) {
        setError(error.message);
        console.error('Error fetching coordinates:', error);
      }
    };

    if (locationName) {
      fetchCoordinates();
    }
  }, [locationName]);

  if (error) {
    return <div>Error fetching coordinates: {error}</div>;
  }

  return (
    <div className="map-container">
      <h1 className="text-xl font-bold mb-4">Map Component</h1>
      <MapContainer center={position} zoom={12} style={{ height: '600px', width: '100%' }}>
        <TileLayer 
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        /> 

        {position[0] !== 0 && (
          <Marker position={position}>
            <Popup>{locationName}</Popup>
          </Marker>
        )}
      </MapContainer>
    </div>
  );
};

export default MapComponent;
