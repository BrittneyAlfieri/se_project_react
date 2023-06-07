import React from "react";
import closeButton from "../images/close-button.png";

const ModalWithForm = ({ children, title, name, onClose, onSubmit }) => {
  return (
    <div className={`modal modal_type_${name}`}>
      <div className="modal__content">
        <button className="modal__close" type="button" onClick={onClose}>
          <img
            className="modal__close-img"
            src={closeButton}
            alt="'x' to close popup window"
          ></img>
        </button>
        <h3 className="modal__title">{title}</h3>
        <form
          onSubmit={(e) => {
            console.log("submitted");
            onSubmit(e);
          }}
        >
          {children}
        </form>
      </div>
    </div>
  );
};

export default ModalWithForm;
