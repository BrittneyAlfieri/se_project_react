import "../blocks/app/App.css";
import {
  Header,
  Main,
  Footer,
  ModalWithForm,
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
            <ModalWithForm
              title="New garment"
              onClose={handleCloseModal}
              buttonText="Add garment"
            >
              <div className="modal__text-container">
                <label className="modal__label" id="name-label">
                  Name
                  <input
                    className="modal__input"
                    id="name-input"
                    placeholder="Name"
                    type="text"
                    name="name"
                    minLength="1"
                    maxLength="30"
                  ></input>
                </label>
                <label className="modal__label" id="image-label">
                  Image
                  <input
                    className="modal__input"
                    id="image-input"
                    placeholder="Image URL"
                    type="url"
                    name="link"
                    minLength="1"
                    maxLength="30"
                  ></input>
                </label>
              </div>
              <p className="modal__weather-description">
                Select the weather type:
              </p>
              <div className="modal__radio-container">
                <div>
                  <input
                    className="modal__radio-button"
                    type="radio"
                    id="hot"
                    value="hot"
                  />
                  <label className="modal__radio-description">Hot</label>
                </div>
                <div>
                  <input
                    className="modal__radio-button"
                    type="radio"
                    id="warm"
                    value="warm"
                  />
                  <label className="modal__radio-description">Warm</label>
                </div>
                <div>
                  <input
                    className="modal__radio-button"
                    type="radio"
                    id="cold"
                    value="cold"
                  />
                  <label className="modal__radio-description">Cold</label>
                </div>
              </div>
            </ModalWithForm>
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
