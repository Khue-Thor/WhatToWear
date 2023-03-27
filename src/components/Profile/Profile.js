import React from "react";
import "./Profile.css";
import { ClothesSection } from "../ClothesSection/ClothesSection";
import { SideBar } from "../SideBar/SideBar";

export function Profile({ cards, handleAddClick, onCardClick }) {
  
  return (
    <div className="profile">
      <SideBar />
      <ClothesSection cards={cards} handleAddClick={handleAddClick} onCardClick={onCardClick} />
    </div>
  );
}
