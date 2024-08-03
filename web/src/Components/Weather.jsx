import React, { useState } from 'react';

const Weather = () => {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState('');
  const [error, setError] = useState(null);

  const apiKey = 'cc5406e296ace15163f5f0a768f1187e'; // Your actual API key

  const getWeather = async () => {
    try {
      const response = await fetch(
         `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`

      );
      if (!response.ok) {
        throw new Error('City not found');
      }
      const data = await response.json();
      setWeather(data);
      setError(null);
    } catch (err) {
      setError(err.message);
      setWeather(null);
    }
  };

  const handleChange = (e) => {
    setCity(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getWeather();
  };

  return (
    <div className='w-full h-screen bg-gray-300 pt-40'>
    <div className="max-w-md mx-auto mt-0 p-5 bg-white shadow-lg rounded-lg">
      <form onSubmit={handleSubmit} className="flex items-center space-x-4">
        <input 
          type="text" 
          value={city} 
          onChange={handleChange} 
          placeholder="Enter city" 
          className="px-3 py-2 border border-gray-300 rounded-md flex-grow"
        />
        <button 
          type="submit" 
          className="px-4 py-2 bg-blue-500 text-white rounded-md"
        >
          Get Weather
        </button>
      </form>
      {error && <p className="mt-4 text-red-500">{error}</p>}
      {weather && (
        <div className="mt-4">
          <h3 className="text-2xl font-semibold">{weather.name}</h3>
          <p className="text-lg">Temperature: {weather.main.temp}°C</p>
          <p className="text-lg">Weather: {weather.weather[0].description}</p>
        </div>
      )}
    </div>
    </div>
  );
};

export default Weather;


