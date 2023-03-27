import {React, useState } from "react";
import { ModalWithForm } from "../ModalWithForm/ModalWithForm";

export default function AddItemModal ({ name, isOpen, isLoading, onAddItem, onCloseModal }) {
  const [itemName, setItemName] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [weather, setWeather] = useState("");

  function handleNameChange(e) {
    setItemName(e.target.value);
  }

  function handleImageChange(e) {
    setImageUrl(e.target.value);
  }

  function handleWeatherChange(e) {
    setWeather(e.target.value);
  }

  function handleSubmit() {
    onAddItem(itemName, imageUrl, weather);
  }

  return (
    <ModalWithForm
      title="New Garment"
      name={name}
      buttonText={isLoading ? "Saving..." : "Add garment"}
      onSubmit={handleSubmit}
      closeModal={onCloseModal}
    >
      <fieldset className="modal__form-fieldset">
        <label className="modal__form-label">Name</label>
        <input
          className="modal__form-input"
          type="text"
          name="clothName"
          value={itemName}
          onChange={handleNameChange}
          placeholder="Name"
          minLength="1"
          maxLength="30"
          required
        />
        <span className="modal__input-error"></span>
        <label className="modal__form-label">Image</label>
        <input
          className="modal__form-input"
          type="url"
          name="imageUrl"
          value={imageUrl}
          placeholder="Image URL"
          onChange={handleImageChange}
          required
        />
        <span className="modal__input-error"></span>
        <label className="modal__form-label">Select the weather type:</label>
        <div className="modal__form-input_type_radio">
          <div className="modal__form-choice">
            <input
              clase="moda"
              type="radio"
              id="choiceHot"
              name="weatherType"
              value="hot"
              checked={weather === "hot"}
              onChange={handleWeatherChange}
            />
            <label className="modal__label_radio" htmlFor="choiceHot">
              Hot
            </label>
          </div>

          <div className="modal__form-choice">
            <input
              type="radio"
              id="choiceHot"
              name="weatherType"
              value="warm"
              checked={weather === "warm"}
              onChange={handleWeatherChange}
            />
            <label className="modal__label_radio" htmlFor="choiceWarm">
              Warm
            </label>
          </div>

          <div className="modal__form-choice">
            <input
              type="radio"
              id="choiceHot"
              name="weatherType"
              value="cold"
              checked={weather === "cold"}
              onChange={handleWeatherChange}
            />
            <label className="modal__label_radio" htmlFor="choiceCold">
              Cold
            </label>
          </div>
        </div>
      </fieldset>
    </ModalWithForm>
  );
}