import { useState, useEffect } from "react";
import React from "react";
import "./App.css";
import { Header } from "../Header/Header";
import { Main } from "../Main/Main";
import { location, API_KEY } from "../../utils/constants";
import { weatherApi } from "../../utils/weatherApi";
import { api } from "../../utils/api";
import { defaultClothingItems } from "../../utils/clothingItems";
import { CurrentTemperatureUnitContext } from "../../context/CurrentTemperatureUnitContext";
import AddItemModal from '../AddItemModal/AddItemModal';

function App() {
  const [weatherData, setWeatherData] = useState({});
  const [selectedCard, setSelectedCard] = useState(null);
  const [clothingitems, setClothingItems] = useState(defaultClothingItems);
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");
  const [isAddItemModalOpen, setIsAddItemModalOpen] = useState(false);

  const handleCardClick = (card) => {
    setSelectedCard(card);
  };

  const handleToggleSwitchChange = () => {
    currentTemperatureUnit === "F"
      ? setCurrentTemperatureUnit("C")
      : setCurrentTemperatureUnit("F");
  };

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

  return (
    <div className="App">
      <CurrentTemperatureUnitContext.Provider   value={{ currentTemperatureUnit, handleToggleSwitchChange }}>
        <div className="App__content">
          <Header weatherData={weatherData} />
          <Main weatherData={weatherData} cards={clothingitems} onCardClick={handleCardClick} />
          
        </div>
      </CurrentTemperatureUnitContext.Provider>
    </div>
  );
}

export default App;
