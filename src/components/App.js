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
import api from "../utils/api";

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [temp, setTemp] = useState(null);
  const [location, setLocation] = useState("");
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");
  const [clothingItems, setClothingItems] = useState([]);

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

  useEffect(() => {
    api
      .getItemList()
      .then((items) => {
        setClothingItems(items);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleAddItemSubmit = (item) => {
    api.addItem(item).then((newItem) => {
      setClothingItems([newItem, ...clothingItems]);
      handleCloseModal();
    });
  };

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

  const handleCardDelete = (card) => {
    api
      .removeItem(card.id)
      .then(() => {
        setClothingItems((cards) => cards.filter((c) => c.id !== card.id));
      })
      .catch((err) => console.log(err));
  };

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
            <Main
              weatherTemp={temp}
              cards={clothingItems}
              onSelectCard={handleSelectedCard}
              onClickDelete={handleCardDelete}
            />
          </Route>
          <Route exact path="/profile">
            <Profile
              cards={clothingItems}
              onSelectCard={handleSelectedCard}
              onClickDelete={handleCardDelete}
            />
          </Route>
          <Footer />
          {activeModal === "create" && (
            <AddItemModal
              onClose={handleCloseModal}
              onAddItem={handleAddItemSubmit}
            />
          )}
          {activeModal === "preview" && (
            <ItemModal
              selectedCard={selectedCard}
              onClose={handleCloseModal}
              onClickDelete={handleCardDelete}
            ></ItemModal>
          )}
        </div>
      </CurrentTemperatureUnitContext.Provider>
    </div>
  );
}

export default App;
