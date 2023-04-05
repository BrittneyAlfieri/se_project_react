import React from "react";
import { useContext } from "react";
import { WeatherCard } from "./index";
import { ItemCard } from "./index";
import { defaultClothingItems } from "../utils/constants";
import CurrentTemperatureUnitContext from "../contexts/CurrentTemperatureUnitContext";

function Main({ weatherTemp, onSelectCard }) {
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);

  const getWeatherType = () => {
    console.log(weatherTemp);
    if (weatherTemp >= 86) {
      return "hot";
    } else if (weatherTemp >= 66 && weatherTemp <= 85) {
      return "warm";
    } else if (weatherTemp <= 65) {
      return "cold";
    }
  };

  const weatherType = getWeatherType();

  const filteredCards = defaultClothingItems.filter((item) => {
    return item.weather.toLowerCase() === weatherType;
  });
  if (!weatherTemp) {
    return null;
  }
  return (
    <main className="main">
      <section className="main__info">
        <WeatherCard day={true} type="sunny" weatherTemp={weatherTemp} />
        <div className="main__container">
          <p className="main__description">
            Today is {weatherTemp.temperature[currentTemperatureUnit]} / You may
            want to wear:
          </p>
          <ul className="card__container">
            {filteredCards.map((item) => (
              <ItemCard
                key={item._id}
                item={item}
                onSelectCard={onSelectCard}
              />
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}

export default Main;
