import React from "react";
import { WeatherCard } from "./index";
import { ItemCard } from "./index";

function Main() {
  return (
    <main className="main">
      <section className="main__info">
        <WeatherCard day={true} type="fog" />
        <div className="main__container">
          <p className="main__description">
            Today is 75°/You may want to wear:
          </p>
          <ItemCard />
        </div>
      </section>
    </main>
  );
}

export default Main;
