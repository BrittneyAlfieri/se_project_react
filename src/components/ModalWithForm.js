import React from "react";
import closeButton from "../images/close-button.png";

const ModalWithForm = ({ children, buttonText = "", title, name, onClose }) => {
  return (
    <div className={`modal modal_type_${name}`}>
      <div className="modal__content">
        <button className="modal__close" type="button" onClick={onClose}>
          <img src={closeButton}></img>
        </button>
        <h3 className="modal__title">{title}</h3>
        <form>{children}</form>
        <button className="modal__submit" type="submit">
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default ModalWithForm;
