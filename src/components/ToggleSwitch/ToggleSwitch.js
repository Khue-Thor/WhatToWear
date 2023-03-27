import React from "react";
import "./ToggleSwitch.css";
import { CurrentTemperatureUnitContext } from "../../context/CurrentTemperatureUnitContext";

export function ToggleSwitch() {
  const { currentTemperatureUnit, handleToggleSwitchChange } = React.useContext(
    CurrentTemperatureUnitContext
  );

  return (
    <div className="toggleswitch__container">
      <label className="toggleswitch">
        <p className="toggleswitch__f">F</p>
        <p className="toggleswitch__c">C</p>
        <input
          className="toggleswitch__input"
          type="checkbox"
          value={currentTemperatureUnit}
          onClick={handleToggleSwitchChange}
        />
        <span className="toggleswitch__slider"></span>
      </label>
    </div>
  );
}
