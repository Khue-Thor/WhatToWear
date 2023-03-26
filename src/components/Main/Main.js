import React from "react";
import { WeatherCard } from "../WeatherCard/WeatherCard";
import { ItemCard } from "../ItemCard/ItemCard";
import "./Main.css";

export function Main({ weatherData, cards, onCardClick }) {
  
  const temperature = weatherData.main?.temp;
  const getWeatherType = () => {
    if (temperature >= 86) {
      return "hot";
    } else if (temperature >= 66 && temperature <= 85) {
      return "warm";
    } else if (temperature <= 65) {
      return "cold";
    }
  };
  const weatherType = getWeatherType();

  return (
    <main>
      
    </main>
  )
}