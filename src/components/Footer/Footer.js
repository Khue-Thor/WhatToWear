import React from "react";
import './Footer.css';
import { date, currentDate } from "../../utils/constants";
import { CurrentTemperatureUnitContext } from "../../context/CurrentTemperatureUnitContext";
export function Footer() {

  return (
    <div className="footer">
      <div className="footer__container">
        <p className="footer__description">© Developed by Khuephamy Phialouang - {date}</p>
        <div className="footer__social-container">

        </div>
      </div>
    </div>
  )
}
