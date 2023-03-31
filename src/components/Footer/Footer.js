import React from "react";
import './Footer.css';
import linkedin from "../../images/linkedin.svg"
import github from "../../images/github.svg"
import { date, currentDate } from "../../utils/constants";
import { CurrentTemperatureUnitContext } from "../../context/CurrentTemperatureUnitContext";
export function Footer() {

  return (
    <div className="footer">
      <div className="footer__container">
        <p className="footer__description">© Developed by Khuephamy Phialouang - {date}</p>
        <div className="footer__social-container">
          <a href="https://www.linkedin.com/in/khuephamy-phialouang-9b160723b?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BNfRdT1nrRFSc3HjPu5EG7g%3D%3D" target="_blank">
            <img src={linkedin} className="footer__social-icon"/>
          </a>

          <a href="https://github.com/Khue-Thor" target="_blank">
            <img src={github} className="footer__social-icon"/>
          </a>
        </div>
      </div>
    </div>
  )
}
