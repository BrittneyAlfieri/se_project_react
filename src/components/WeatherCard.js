import React from "react";
import sunnyDay from "../images/day/sunny-day.png";
import cloudyDay from "../images/day/cloudy-day.png";
import fogDay from "../images/day/fog-day.png";
import rainDay from "../images/day/rain-day.png";
import snowDay from "../images/day/snow-day.png";
import stormDay from "../images/day/storm-day.png";
import sunnyNight from "../images/night/sunny-night.png";
import cloudyNight from "../images/night/cloudy-night.png";
import fogNight from "../images/night/fog-night.png";
import rainNight from "../images/night/rain-night.png";
import snowNight from "../images/night/snow-night.png";
import stormNight from "../images/night/storm-night.png";

const WeatherCard = ({
  day,
  type,
  weatherTemp = "",
  weatherCondition = { weatherCondition },
  // setTime = { timeOfDay },
}) => {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  const weatherOptions = [
    { url: sunnyDay, day: currentDate.day, type: "sunny" },
    { url: cloudyDay, day: currentDate.day, type: "cloudy" },
    { url: fogDay, day: currentDate.day, type: "fog" },
    { url: rainDay, day: currentDate.day, type: "rain" },
    { url: snowDay, day: currentDate.day, type: "snow" },
    { url: stormDay, day: currentDate.day, type: "storm" },
    { url: sunnyNight, day: currentDate.day, type: "sunny" },
    { url: cloudyNight, day: currentDate.day, type: "cloudy" },
    { url: fogNight, day: currentDate.day, type: "fog" },
    { url: rainNight, day: currentDate.day, type: "rain" },
    { url: snowNight, day: currentDate.day, type: "snow" },
    { url: stormNight, day: currentDate.day, type: "storm" },
  ];

  // const filterWeatherImages = weatherOptions.filter((image) => {
  //   return image.type === weatherCondition && image.day === updateTime;
  // });

  // const updateTime = () => {
  //   return setTime * 1000;
  // };

  const imageSrc = weatherOptions.filter((i) => {
    return i.day === day && i.type === type;
  });

  const imageSrcUrl = imageSrc[0].url || "";

  return (
    <div className="weathercard__container">
      <p className="weathercard__info">{weatherTemp}°F</p>
      <img className="weathercard__image" src={imageSrcUrl} />
    </div>
  );
};

export default WeatherCard;
