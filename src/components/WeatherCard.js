import React from "react";
import { weatherOptions } from "../utils/constants";

const WeatherCard = ({ day, type, weatherTemp = "" }) => {
  const imageSrc = weatherOptions.filter((item) => {
    return item.day === day && item.type === type;
  });

  const imageSrcUrl = imageSrc[0].url || "";

  return (
    <div className="weathercard__container">
      <p className="weathercard__info">{weatherTemp}°F</p>
      <img src={imageSrcUrl} className="weathercard__image" />
    </div>
  );
};

export default WeatherCard;
