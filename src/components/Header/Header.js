import React from "react";
import "./Header.css";
import logoPath from "../../images/wtwr.svg";
import avatarPath from "../../images/avatar.svg";
import { currentDate } from "../../utils/constants";

export function Header({weatherData}) {
  const userName = "Terrence Tegegne";
  return (
    <div className="header">
      <div className="header__container">
        <div className="header__logo-container">
          <img src={logoPath} className="header__logo" />
          <p className="header__date-location">{currentDate}, {weatherData.name}</p>
        </div>

        <div className="header__info-container">
          <button className="header__add-clothes" type="button">
            + Add clothes
          </button>
          <p className="header__username">{userName}</p>
          <img className="header__avatar" alt="avatar" src={avatarPath} />
        </div>
      </div>
    </div>
  );
}
