import React from "react";
import { useContext } from "react";
import { weatherOptions } from "../utils/constants";
import CurrentTemperatureUnitContext from "../contexts/CurrentTemperatureUnitContext";

const WeatherCard = ({ day, type, weatherTemp = "" }) => {
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);

  const imageSrc = weatherOptions.filter((item) => {
    return item.day === day && item.type === type;
  });

  const imageSrcUrl = imageSrc[0].url || "";

  return (
    <div className="weathercard__container">
      <p className="weathercard__info">
        {weatherTemp.temperature[currentTemperatureUnit]}
      </p>
      <img src={imageSrcUrl} className="weathercard__image" />
    </div>
  );
};

export default WeatherCard;
