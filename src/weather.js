import React from "react";

function Weather({ data }) {
  return (
    <div className="weather-card">
      <h2>{data.name}, {data.sys.country}</h2>
      <p>Temperature: {data.main.temp}°C</p>
      <p>Feels like: {data.main.feels_like}°C</p>
      <p>Weather: {data.weather[0].main}</p>
      <p>Humidity: {data.main.humidity}%</p>
      <p>Wind speed: {data.wind.speed} m/s</p>
    </div>
  );
}


export default weather
