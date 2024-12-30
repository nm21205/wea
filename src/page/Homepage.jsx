// src/page/Homepage.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import HE from '../components/HE.jsx';

const apiKey = process.env.REACT_APP_WEATHER_API_KEY;

const Homepage = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const fetchWeather = async () => {
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

  const handleSearch = () => {
    if (city) {
      fetchWeather();
    }
  };

  const handleDetailPage = () => {
    navigate('/weather-details');
  };

  return (
    <div>
      <h1>Weather search</h1>
      <input
        type="text"
        placeholder="도시 이름 입력"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button className='detail-button' onClick={handleSearch}>검색</button>
      {error && <p>{error}</p>}
      {weather && (
        <div>
          <h2>city: {weather.name}</h2>
          <p>temperature: {weather.main.temp}°C</p>
          <p>weather: {weather.weather[0].description}</p>
          <button onClick={handleDetailPage}>DETAILPAGE</button>
            <MapContainer
              center={[weather.coord.lat, weather.coord.lon]}
              zoom={13}
              style={{ height: '400px', width: '100%' }}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={[weather.coord.lat, weather.coord.lon]}>
              <Popup>
                {weather.name}: {weather.weather[0].description}
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      )}
      <div>
        <HE />  
      </div>
    </div>
  );
};

export default Homepage;