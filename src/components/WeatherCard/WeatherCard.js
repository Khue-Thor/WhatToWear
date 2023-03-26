import { React, useContext } from "react";
import "./WeatherCard.css";
import sunPath from "../../images/sun.svg";
import cloudPath from "../../images/cloudunion.svg";
import { CurrentTemperatureUnitContext } from "../../context/CurrentTemperatureUnitContext";
export function WeatherCard({ weatherData }) {
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);
  const temperature = weatherData.main?.temp;
  return (
    <div className="weather__container">
      <div className="weather__temperature-container">
        {currentTemperatureUnit === "F" ? (
          <p className="weather__temperature">
            {Math.round(temperature)}°{currentTemperatureUnit}
          </p>
        ) : (
          <p className="weather__temperature">
           {Math.round(((temperature - 32) * 5) / 9)}°{currentTemperatureUnit}
          </p>
        )}
      </div>

      <div className="weather__images-container">
        <img className="weather__sunny" src={sunPath} alt="sun" />
        <img className="weather__cloud-union" src={cloudPath} alt="clouds" />
      </div>
    </div>
  );
}
