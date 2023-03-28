import "../blocks/app/App.css";
import { Header, Main, Footer, ModalWithForm, ItemModal } from "./index";
import { useState, useEffect } from "react";
import {
  getForecastWeather,
  parseWeatherData,
  findCurrentLocation,
  findWeatherCondition,
  findTimeOfDay,
} from "../utils/weatherapi";

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [temp, setTemp] = useState(0);
  const [location, setLocation] = useState("");
  const [condition, setCondition] = useState("");
  const [timeOfDay, setTimeOfDay] = useState(0);

  const handleCreateModal = () => {
    setActiveModal("create");
  };

  const handleCloseModal = () => {
    setActiveModal("");
  };

  const handleSelectedCard = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };
  useEffect(() => {
    getForecastWeather().then((data) => {
      const temperature = parseWeatherData(data);
      const location = findCurrentLocation(data);
      const condition = findWeatherCondition(data);
      const time = findTimeOfDay(data);
      setTemp(temperature);
      setLocation(location);
      setCondition(condition);
      setTimeOfDay(time);
    });
  }, []);

  return (
    <div className="page">
      <div className="page__wrapper">
        <Header onCreateModal={handleCreateModal} currentLocation={location} />
        <Main
          weatherTemp={temp}
          onSelectCard={handleSelectedCard}
          weatherCondition={condition}
          setTime={timeOfDay}
        />
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
            <div>
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
    </div>
  );
}

export default App;
