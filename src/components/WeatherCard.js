import React from "react";

const WeatherCard = ({ day, type }) => {
  const weatherOptions = [
    { url: "/images/day/sunny-day.png", day: true, type: "sunny" },
    { url: "/images/day/cloudy-day.png", day: true, type: "cloudy" },
    { url: "/images/day/fog-day.png", day: true, type: "fog" },
    { url: "/images/day/rain-day.png", day: true, type: "rain" },
    { url: "/images/day/snow-day.png", day: true, type: "snow" },
    { url: "/images/day/storm-day.png", day: true, type: "storm" },
    { url: "/images/night/sunny-night.png", day: false, type: "sunny" },
    { url: "/images/night/cloudy-night.png", day: false, type: "cloudy" },
    { url: "/images/night/fog-night.png", day: false, type: "fog" },
    { url: "/images/night/rain-night.png", day: false, type: "rain" },
    { url: "/images/night/snow-night.png", day: false, type: "snow" },
    { url: "/images/night/storm-night.png", day: false, type: "storm" },
  ];

  const imageSrc = weatherOptions.filter((i) => {
    return i.day === day && i.type === type;
  });

  const imageSrcUrl = imageSrc[0].url || "";

  return (
    <div className="weathercard__container">
      <p className="weathercard__info">75°F</p>
      <img className="weathercard__image" src={imageSrcUrl} />
    </div>
  );
};

export default WeatherCard;
