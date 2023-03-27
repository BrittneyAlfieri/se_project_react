import React from "react";
import { WeatherCard } from "./index";
import { ItemCard } from "./index";
import { defaultClothingItems } from "../utils/constants";

function Main({ weatherTemp, onSelectCard }) {
  return (
    <main className="main">
      <section className="main__info">
        <WeatherCard day={true} type="fog" weatherTemp={weatherTemp} />
        <div className="main__container">
          <p className="main__description">
            Today is {weatherTemp} / You may want to wear:
          </p>
          <ul className="card__container">
            {defaultClothingItems.map((item) => (
              <ItemCard item={item} onSelectCard={onSelectCard} />
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}

export default Main;
