import React from "react";
import './SideBar.css';
import avatar from "../../images/avatar.svg";

export function SideBar() {
  const userName = "Terrnace Tegegne";

  return (
    <div className="sidebar">
      <div className="sidebar__container">
        <img className="sidebar__avatar" src={avatar} alt="avatar"/>
        <p className="sidebar__username">{userName}</p>
      </div>
    </div>
  )
}