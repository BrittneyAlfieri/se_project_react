import React from "react";

const WeatherCard = ({ day, type, weatherTemp = "" }) => {
  const weatherOptions = [
    { url: "./src/images/day/sunny-day.png", day: true, type: "sunny" },
    { url: "./src/images/day/cloudy-day.png", day: true, type: "cloudy" },
    { url: "./src/images/day/fog-day.png", day: true, type: "fog" },
    { url: "./src/images/day/rain-day.png", day: true, type: "rain" },
    { url: "./src/images/day/snow-day.png", day: true, type: "snow" },
    { url: "./src/images/day/storm-day.png", day: true, type: "storm" },
    { url: "./src/images/night/sunny-night.png", day: false, type: "sunny" },
    { url: "./src/images/night/cloudy-night.png", day: false, type: "cloudy" },
    { url: "./src/images/night/fog-night.png", day: false, type: "fog" },
    { url: "./src/images/night/rain-night.png", day: false, type: "rain" },
    { url: "./src/images/night/snow-night.png", day: false, type: "snow" },
    { url: "./src/images/night/storm-night.png", day: false, type: "storm" },
  ];

  const imageSrc = weatherOptions.filter((i) => {
    return i.day === day && i.type === type;
  });

  const imageSrcUrl = imageSrc[0].url || "";

  return (
    <div className="weathercard__container">
      <p className="weathercard__info">{weatherTemp}</p>
      <img className="weathercard__image" src={imageSrcUrl} />
    </div>
  );
};

export default WeatherCard;
