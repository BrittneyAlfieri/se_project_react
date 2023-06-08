import "../blocks/app/App.css";
import {
  Header,
  Main,
  Footer,
  AddItemModal,
  ItemModal,
  Profile,
  ProtectedRoute,
  LoginModal,
  RegisterModal,
} from "./index";
import { useState, useEffect } from "react";
import {
  getForecastWeather,
  parseWeatherData,
  findCurrentLocation,
} from "../utils/weatherapi";
import CurrentTemperatureUnitContext from "../contexts/CurrentTemperatureUnitContext";
import { Route, useHistory } from "react-router-dom";
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
  const [currentUser, setCurrentUser] = useState({});
  const history = useHistory();

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

  const handleAddItemModal = () => {
    setActiveModal("create");
    history.push("/");
  };

  const handleLoginModal = () => {
    setActiveModal("login");
    history.push("/signin");
  };

  const handleRegisterModal = () => {
    setActiveModal("register");
    history.push("/signup");
  };

  const handleCloseModal = () => {
    setActiveModal("");
    history.push("/");
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
    auth
      .signup(name, avatar, email, password)
      .then(() => {
        console.log("Signup successful");
        handleCloseModal();
        setCurrentUser({ name, avatar });
        setLoggedIn(true);
        console.log("Updated currentUser:", currentUser);
        console.log("Updated loggedIn:", loggedIn);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSignIn = (email, password) => {
    auth
      .signin(email, password)
      .then((res) => {
        const token = res.token;
        localStorage.setItem("jwt", token);
        console.log(token);

        auth
          .getContent(token)
          .then((userData) => {
            setCurrentUser(userData.name, userData.avatar);
            setLoggedIn(true);
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    const tokenCheck = () => {
      const jwt = localStorage.getItem("jwt");
      if (jwt) {
        console.log(jwt);
        auth
          .getContent(jwt)
          .then((res) => {
            if (res) {
              setLoggedIn(true);
            }
          })
          .catch((error) => {
            console.log(error);
          });
      }
    };

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
              onAddButtonClick={handleAddItemModal}
              onLoginButton={handleLoginModal}
              onRegisterButton={handleRegisterModal}
              currentLocation={location}
              onChange={handleToggleSwitchChange}
              loggedIn={loggedIn}
              currentUser={currentUser}
            />
            <Route path="/create">
              <AddItemModal
                onClose={handleCloseModal}
                onAddItem={handleAddItemSubmit}
              />
            </Route>
            <Route path="/signin">
              <LoginModal
                onRegisterButton={handleRegisterModal}
                onClose={handleCloseModal}
                onSubmit={handleSignIn}
              />
            </Route>
            <Route path="/signup">
              <RegisterModal
                onLoginButton={handleLoginModal}
                onClose={handleCloseModal}
                onSubmit={handleSignUp}
              />
            </Route>
            <Route exact path="/">
              <Main
                weatherTemp={temp}
                cards={clothingItems}
                onSelectCard={handleSelectedCard}
              />
            </Route>
            <ProtectedRoute path="/profile">
              <Profile
                cards={clothingItems}
                onSelectCard={handleSelectedCard}
                onAddButtonClick={handleAddItemModal}
                loggedIn={loggedIn}
              />
            </ProtectedRoute>
            <Footer />
            {activeModal === "preview" && (
              <ItemModal
                selectedCard={selectedCard}
                onClose={handleCloseModal}
                onClickDelete={handleCardDelete}
              />
            )}

            {activeModal === "create" && (
              <AddItemModal
                onClose={handleCloseModal}
                onAddItem={handleAddItemSubmit}
              />
            )}

            {activeModal === "login" && (
              <LoginModal
                onRegisterButton={handleRegisterModal}
                onClose={handleCloseModal}
                onSubmit={handleSignIn}
              />
            )}

            {activeModal === "register" && (
              <RegisterModal
                onLoginButton={handleLoginModal}
                onClose={handleCloseModal}
                onSubmit={handleSignUp}
              />
            )}
          </div>
        </CurrentTemperatureUnitContext.Provider>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
