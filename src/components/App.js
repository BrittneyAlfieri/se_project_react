import "../blocks/app/App.css";
import {
  Header,
  Main,
  Footer,
  AddItemModal,
  ItemModal,
  Profile,
  ProtectedRoute,
} from "./index";
import { useState, useEffect } from "react";
import {
  getForecastWeather,
  parseWeatherData,
  findCurrentLocation,
} from "../utils/weatherapi";
import CurrentTemperatureUnitContext from "../contexts/CurrentTemperatureUnitContext";
import { Route} from "react-router-dom";
import api from "../utils/api";
import auth from "../auth";
import CurrentUserContext from "../contexts/CurrentUserContext";

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [temp, setTemp] = useState(null);
  const [location, setLocation] = useState("");
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");
  const [clothingItems, setClothingItems] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState[null];

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
    api
      .addItem(item)
      .then((newItem) => {
        setClothingItems([newItem, ...clothingItems]);
        handleCloseModal();
      })
      .catch((err) => console.log(err));
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
        handleCloseModal();
      })
      .catch((err) => console.log(err));
  };

  const handleSignUp = (name, email, password, avatar) => {
    auth.signup(name, avatar, email, password)
      .then(() => {
        handleCloseModal();
        setCurrentUser(name, avatar);
        setLoggedIn(true);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSignIn = (email, password) => {
    auth.signin(email, password)
      .then((res) => {
        const token = res.token; 
        localStorage.setItem("jwt", token);
        setCurrentUser(res.user);
        setLoggedIn(true);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  
  useEffect(() => {
    const tokenCheck = () => {
      const jwt = localStorage.getItem('jwt');
      if (jwt) {
        auth.getContent(jwt)
          .then((res) => {
            if (res) {
              setLoggedIn(true);
            }
          })
          .catch((error) => {
            console.log(error);
          });
      }
    }
  
    tokenCheck();
  }, []);



  return (
    <CurrentUserContext.Provider value={currentUser}>
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
            <ProtectedRoute path="/profile">
              <Profile
                cards={clothingItems}
                onSelectCard={handleSelectedCard}
                onAddButtonClick={handleCreateModal}
                loggedIn = {loggedIn}
              />
            </ProtectedRoute>
            <Route exact path="/">
              <Main
                weatherTemp={temp}
                cards={clothingItems}
                onSelectCard={handleSelectedCard}
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
    </CurrentUserContext.Provider>  
  );
}

export default App;
