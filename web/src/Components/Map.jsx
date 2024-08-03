
import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { useLocation } from 'react-router-dom';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import locationIcon from 'C:/Users/Valerie/new/ecleStay_frontend/web/assets/location.gif';


const Map = () => {
  const location = useLocation();
  const [mapCenter, setMapCenter] = useState([0.0236, 37.9062]); 
  const [placeName, setPlaceName] = useState('');

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const locationParam = params.get('location');
    if (locationParam) {
      setPlaceName(decodeURIComponent(locationParam));
      fetchCoordinates(decodeURIComponent(locationParam));
    }
  }, [location]);

  const fetchCoordinates = async (place) => {
    try {
      const response = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${place},Kenya`);
      const data = await response.json();
      if (data && data.length > 0) {
        setMapCenter([parseFloat(data[0].lat), parseFloat(data[0].lon)]);
      }
    } catch (error) {
      console.error('Error fetching coordinates:', error);
    }
  };

  // Custom icon
  const customIcon = L.divIcon({
    className: 'custom-icon',
    html: `<div style="background-color: red; border-radius: 50%; padding: 5px;">
             <img src="${locationIcon}" alt="location" style="width: 30px; height: 30px; filter: invert(1);" />
           </div>`,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
    popupAnchor: [0, -40]
  });

  return (
    <div className="h-screen w-full">
      <MapContainer 
        center={mapCenter} 
        zoom={10} 
        style={{ height: '100%', width: '100%' }}
        key={mapCenter.join(',')} // Force re-render on center change
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={mapCenter} icon={customIcon}>
          <Popup>{placeName}</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;