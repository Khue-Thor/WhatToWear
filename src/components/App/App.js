import { useState, useEffect } from "react";
import React from "react";
import './App.css';
import { Header } from '../Header/Header';
import { Main } from '../Main/Main';
import { location, API_KEY } from "../../utils/constants";
import { weatherApi } from '../../utils/weatherApi';
import { api } from "../../utils/api";
import { defaultClothingItems } from "../../utils/clothingItems";



function App() {
  const [weatherData, setWeatherData] = useState({});
  const [selectedCard, setSelectedCard] = useState(null);
  const [clothingitems, setClothingItems] = useState(defaultClothingItems);

  const handleCardClick = (card) => {
    setSelectedCard(card);
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
      <Header weatherData={weatherData}/>
      <Main weatherData={weatherData} cards={clothingitems} onCardClick={handleCardClick}/>
    </div>
  );
}

export default App;
