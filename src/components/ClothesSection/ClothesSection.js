import React from "react";
import { ItemCard } from "../ItemCard/ItemCard";
import "./ClothesSection.css";

export function ClothesSection({ cards, handleAddClick, onCardClick }) {
  
  return (
    <section className="clothes__section">
      <div className="clothes__section-info">
        <h2 className="clothes__section-title">Your items</h2>
        <button className="clothes__add-button" type="button" onClick={handleAddClick}>
          + Add new
        </button>
      </div>
      <ul className="clothes__section-items">
       {cards.map((card) => (
        <ItemCard key={card.id} card={card} onCardClick={onCardClick}/>
       ))}
      </ul>
    </section>
  );
}
