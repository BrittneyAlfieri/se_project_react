import "../blocks/app/App.css";
import {
  Header,
  Main,
  Footer,
  AddItemModal,
  ItemModal,
  Profile,
} from "./index";
import { useState, useEffect } from "react";
import {
  getForecastWeather,
  parseWeatherData,
  findCurrentLocation,
} from "../utils/weatherapi";
import CurrentTemperatureUnitContext from "../contexts/CurrentTemperatureUnitContext";
import { Route } from "react-router-dom";

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [temp, setTemp] = useState(null);
  const [location, setLocation] = useState("");
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");

  const handleCreateModal = () => {
    setActiveModal("create");
  };

  const handleCloseModal = () => {
    setActiveModal("");
  };

  const handleToggleSwitchChange = () => {
    currentTemperatureUnit === "F"
      ? setCurrentTemperatureUnit("C")
      : setCurrentTemperatureUnit("F");
  };

  const handleSelectedCard = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };

  useEffect(() => {
    getForecastWeather()
      .then((data) => {
        const temperature = parseWeatherData(data);
        const location = findCurrentLocation(data);
        setTemp(temperature);
        setLocation(location);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="page">
      <CurrentTemperatureUnitContext.Provider
        value={{ currentTemperatureUnit, handleToggleSwitchChange }}
      >
        <div className="page__wrapper">
          <Header
            onAddButtonClick={handleCreateModal}
            currentLocation={location}
            onChange={handleToggleSwitchChange}
          />
          <Route exact path="/">
            <Main weatherTemp={temp} onSelectCard={handleSelectedCard} />
          </Route>
          <Route exact path="/profile">
            <Profile />
          </Route>
          <Footer />
          {activeModal === "create" && (
            <AddItemModal
              onClose={handleCloseModal}
              isOpen={handleCreateModal}
            />
          )}
          {activeModal === "preview" && (
            <ItemModal
              selectedCard={selectedCard}
              onClose={handleCloseModal}
            ></ItemModal>
          )}
        </div>
      </CurrentTemperatureUnitContext.Provider>
    </div>
  );
}

export default App;
