import React from "react";
import "./DeleteConfirmationModal.css";

export function DeleteConfirmationModal({ onCloseModal, handleDelete }) {
  
  return (
    <div className="modal__confirm">
      <div className="modal__confirm-container modal__content">
        <button className="modal__confirm-close" onClick={onCloseModal} />
        <div className="modal__messages-container">
          <p className="modal__message">Are you sure you want to delete this item?</p>
          <p className="modal__message">This action is irreversible.</p>
        </div>
        <div className="modal__buttons-container">
          <button className="modal__delete_confirm" onClick={handleDelete}>
            Yes, delete item
          </button>
          <button className="modal__delete_cancel" onClick={onCloseModal}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
