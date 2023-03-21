import React from "react";

function WeatherCard() {
  return (
    <div className="weathercard__container">
      <p className="weathercard__temperature">75°F</p>
      <img
        className="weathercard__image"
        src="./images/cloudy.png"
        alt="cloudy weather forecast image"
      />
    </div>
  );
}
