import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import logoPath from "../../images/wtwr.svg";
import avatarPath from "../../images/avatar.svg";
import { currentDate } from "../../utils/constants";
import { ToggleSwitch } from "../ToggleSwitch/ToggleSwitch";

export function Header({ weatherData, hanleAddClick }) {
  const userName = "Terrence Tegegne";
  return (
    <div className="header">
      <div className="header__container">
        <div className="header__logo-container">
          <Link to={"/WhatToWear"}>
            <img src={logoPath} className="header__logo" />
          </Link>
          <p className="header__date-location">
            {currentDate}, {weatherData.name}
          </p>
        </div>

        <div className="header__info-container">
          <ToggleSwitch />
          <button className="header__add-clothes" type="button" onClick={hanleAddClick}>
            + Add clothes
          </button>
          <p className="header__username">{userName}</p>
          <Link to={"/profile"}>
            <img className="header__avatar" alt="avatar" src={avatarPath} />
          </Link>
        </div>
      </div>
    </div>
  );
}
