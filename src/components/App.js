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
  EditProfileModal,
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
import auth from "../utils/auth";
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
  const [token, setToken] = useState("");

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

  const handleAddItemSubmit = (token, { name, weather, imageUrl }) => {
    console.log(token, "handleadditemsubmit");
    api
      .addItem(token, { name, weather, imageUrl })
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
    history.push("/signin");
  };

  const handleRegisterModal = () => {
    history.push("/signup");
  };

  const handleEditProfileModal = () => {
    setActiveModal("edit");
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

  const handleSignOut = () => {
    localStorage.clear();
    setLoggedIn(false);
  };

  const handleCardDelete = (card) => {
    api
      .removeItem(token, card._id)
      .then(() => {
        setClothingItems((cards) => cards.filter((c) => c._id !== card._id));
        handleCloseModal();
      })
      .catch((err) => console.log(err));
  };

  const handleProfileUpdate = ({ name, avatar }) => {
    api
      .patchUserInfo(token, { name, avatar })
      .then(() => {
        handleCloseModal();
        setCurrentUser({ name, avatar });
      })
      .catch((error) => {
        console.log(error);
      });
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

        auth
          .getContent(token)
          .then((userData, event) => {
            setCurrentUser({
              name: userData.data.name,
              avatar: userData.data.avatar,
            });
            setLoggedIn(true);
            handleCloseModal();
          })
          .catch((error) => {
            console.log(error);
          });
      })

      .catch((error) => {
        console.log(error);
      });
  };

  const handleLikeClick = ({ _id }, isLiked) => {
    console.log({ isLiked });
    const token = localStorage.getItem("jwt");

    !isLiked
      ? api
          .addCardLike({ _id }, token)
          .then((updatedCard) => {
            updatedCard = updatedCard.data;

            setClothingItems((cards) =>
              cards.map((c) => (c._id === _id ? updatedCard : c))
            );
          })
          .catch((err) => console.log(err))
      : api
          .removeCardLike({ _id }, token)
          .then((updatedCard) => {
            updatedCard = updatedCard.data;
            setClothingItems((cards) =>
              cards.map((c) => (c._id === _id ? updatedCard : c))
            );
          })
          .catch((err) => console.log(err));
  };

  useEffect(() => {
    const tokenCheck = () => {
      const jwt = localStorage.getItem("jwt");
      if (jwt) {
        auth
          .getContent(jwt)
          .then((res) => {
            if (res) {
              setToken(jwt);
              setLoggedIn(true);
              const { name, avatar, _id } = res.data;
              setCurrentUser({ name, avatar, _id });
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
                onCardLike={handleLikeClick}
                currentUser={currentUser}
                loggedIn={loggedIn}
              />
            </Route>
            <ProtectedRoute path="/profile" loggedIn={loggedIn}>
              <Profile
                cards={clothingItems}
                onSelectCard={handleSelectedCard}
                onAddButtonClick={handleAddItemModal}
                currentUser={currentUser}
                onEditProfileButton={handleEditProfileModal}
                onCardLike={handleLikeClick}
                signOut={handleSignOut}
              />
            </ProtectedRoute>

            <Footer />
            {activeModal === "preview" && (
              <ItemModal
                selectedCard={selectedCard}
                onClose={handleCloseModal}
                onClickDelete={handleCardDelete}
                currentUser={currentUser}
                token={token}
              />
            )}

            {activeModal === "create" && (
              <AddItemModal
                onClose={handleCloseModal}
                onAddItem={handleAddItemSubmit}
                token={token}
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

            {activeModal === "edit" && (
              <EditProfileModal
                onClose={handleCloseModal}
                onEditProfile={handleProfileUpdate}
                token={token}
                currentUser={currentUser}
              />
            )}
          </div>
        </CurrentTemperatureUnitContext.Provider>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
