import { useState, useEffect } from "react";
import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import { Header } from "../Header/Header";
import { Main } from "../Main/Main";
import { Profile } from "../Profile/Profile";
import { location, API_KEY } from "../../utils/constants";
import { weatherApi } from "../../utils/weatherApi";
import { api } from "../../utils/api";
import { defaultClothingItems } from "../../utils/clothingItems";
import { CurrentTemperatureUnitContext } from "../../context/CurrentTemperatureUnitContext";
import AddItemModal from "../AddItemModal/AddItemModal";

function App() {
  const [weatherData, setWeatherData] = useState({});
  const [selectedCard, setSelectedCard] = useState(null);
  const [clothingitems, setClothingItems] = useState(defaultClothingItems);
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");
  const [isAddItemModalOpen, setIsAddItemModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleAddClick = () => setIsAddItemModalOpen(true);

  const handleCardClick = (card) => {
    setSelectedCard(card);
  };

  const closeModal = () => {
    // setIsImagePreviewOpen(false);
    setIsAddItemModalOpen(false);
    // setDeleteModalOpen(false);
  };

  const handleToggleSwitchChange = () => {
    currentTemperatureUnit === "F"
      ? setCurrentTemperatureUnit("C")
      : setCurrentTemperatureUnit("F");
  };

  useEffect(() => {
    const closeByEscape = (e) => {
      if (e.key === "Escape") {
        closeModal();
      }
    };

    document.addEventListener("keydown", closeByEscape);
    return () => document.removeEventListener("keydown", closeByEscape);
  }, []);

  useEffect(() => {
    function handleOverlayClose(e) {
      if ({ isAddItemModalOpen } && !e.target.closest(".modal__content")) {
        // setIsImagePreviewOpen(false);
        setIsAddItemModalOpen(false);
        // setDeleteModalOpen(false);
      }
    }
    document.addEventListener("mousedown", handleOverlayClose);

    return () => {
      document.removeEventListener("mousedown", handleOverlayClose);
    };
  });

  useEffect(() => {
    weatherApi
      .getWeatherData(location, API_KEY)
      .then((setweatherInfo) => {
        setWeatherData(setweatherInfo);
      })
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    api
      .getItems()
      .then((clothing) => {
        setClothingItems(clothing);
      })
      .catch((error) => console.error(error));
  }, []);

  function handleAddItemSubmit(name, imageUrl, weather) {
    setIsLoading(true);
    api.addItem({name, imageUrl, weather})
      .then((item) => {
        setClothingItems([item, ...clothingitems])
        closeModal();
      })
      .catch((err) => console.error(err))
      .finally(() => setIsLoading(false));
  }

  return (
    <div className="App">
      <CurrentTemperatureUnitContext.Provider
        value={{ currentTemperatureUnit, handleToggleSwitchChange }}
      >
        <div className="App__content">
          <Header weatherData={weatherData} hanleAddClick={handleAddClick} />
          <Switch>
            <Route exact path={"/"}>
              <Main weatherData={weatherData} cards={clothingitems} onCardClick={handleCardClick} />
            </Route>
            <Route path={"/profile"}>
              <Profile cards={clothingitems} handleAddClick={handleAddClick}/>
            </Route>
          </Switch>
        </div>
      </CurrentTemperatureUnitContext.Provider>
      {isAddItemModalOpen && (
        <AddItemModal
          name="create"
          isLoading={isLoading}
          isOpen={isAddItemModalOpen}
          onCloseModal={closeModal}
          onAddItem={handleAddItemSubmit}
        />
      )}
    </div>
  );
}

export default App;
