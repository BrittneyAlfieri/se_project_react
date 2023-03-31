import "../blocks/app/App.css";
import { Header, Main, Footer, ModalWithForm, ItemModal } from "./index";
import { useState, useEffect } from "react";
import {
  getForecastWeather,
  parseWeatherData,
  findCurrentLocation,
} from "../utils/weatherapi";

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [temp, setTemp] = useState(0);
  const [location, setLocation] = useState("");

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
      <div className="page__wrapper">
        <Header
          onAddButtonClick={handleCreateModal}
          currentLocation={location}
        />
        <Main weatherTemp={temp} onSelectCard={handleSelectedCard} />
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
    </div>
  );
}

export default App;
