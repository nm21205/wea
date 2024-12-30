import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Door from './page/Door';
import Homepage from './page/Homepage';
import WeatherDetails from './page/WeatherDetails';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Door />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/weather-details" element={<WeatherDetails />} />
      </Routes>
    </Router>
  );
}

export default App;