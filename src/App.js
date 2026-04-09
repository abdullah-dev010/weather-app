import React, { useState } from "react";
import Weather from "./weather.js";
import "./App.css";

function App() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const API_KEY = "20d536fca0ba2c560aa63c8c0ce4531c"
  async function fetchWeather() {
    if (!city) return;
    setLoading(true);
    setError("");
    setWeatherData(null);
    try {
      const response = await fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + API_KEY + "&units=metric"
      );
      const data = await response.json();
      if (data.cod === 200) {
        setWeatherData(data);
      } else {
        setError(data.message);
      }
    } catch (err) {
      setError("Something went wrong!");
    } finally {
      setLoading(false);
    }
  }


  function handleSubmit(e) {
    e.preventDefault();
    fetchWeather();
  }

  return (
    <div className="app">
      <h1>🌤 Weather App</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter city..."
          value={city}
          onChange={function(e){ setCity(e.target.value); }}
        />
        <button type="submit">Get Weather</button
        >
      </form>

      {loading && <p>Loading...</p>}
      {error && <p className="error">{error}</p>}
      {weatherData && <Weather data={weatherData} />}
    </div>
  );
}

export default App;