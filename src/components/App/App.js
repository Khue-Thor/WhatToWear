import { useState, useEffect } from "react";
import React from "react";
import './App.css';
import { Header } from '../Header/Header';
import { Main } from '../Main/Main';
import { location, API_KEY } from "../../utils/constants";
import { weatherApi } from '../../utils/weatherApi';



function App() {
  const [weatherData, setWeatherData] = useState({});


  useEffect(() => {
    weatherApi
      .getWeatherData(location, API_KEY)
      .then((setweatherInfo) => {
        setWeatherData(setweatherInfo);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="App">
      <Header weatherData={weatherData}/>
      <Main weatherData={weatherData}/>
    </div>
  );
}

export default App;
