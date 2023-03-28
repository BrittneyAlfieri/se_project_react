import React from "react";
import { WeatherCard } from "./index";
import { ItemCard } from "./index";
import { defaultClothingItems } from "../utils/constants";
import { useMemo } from "react";

function Main({ weatherTemp, onSelectCard, weatherCondition, setTime }) {
  const weatherType = useMemo(() => {
    if (weatherTemp >= 86) {
      return "hot";
    } else if (weatherTemp >= 66 && weatherTemp <= 85) {
      return "warm";
    } else if (weatherTemp <= 65) {
      return "cold";
    }
  }, [weatherTemp]);

  const filteredCards = defaultClothingItems.filter((item) => {
    return item.weather.toLowerCase() === weatherType;
  });

  return (
    <main className="main">
      <section className="main__info">
        <WeatherCard
          day={true}
          type="sunny"
          weatherTemp={weatherTemp}
          weatherCondition={weatherCondition}
          // setTime={timeOfDay}
        />
        <div className="main__container">
          <p className="main__description">
            Today is {weatherTemp}°F / You may want to wear:
          </p>
          <ul className="card__container">
            {filteredCards.map((item) => (
              <ItemCard item={item} onSelectCard={onSelectCard} />
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}

export default Main;
