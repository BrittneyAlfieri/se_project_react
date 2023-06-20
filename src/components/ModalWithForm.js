import React from "react";
import closeButton from "../images/close-button.png";

const ModalWithForm = ({
  children,
  title,
  name,
  onClose,
  onSubmit,
  buttonText = "",
}) => {
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
            onSubmit(e);
          }}
        >
          {children}
          <button className="modal__button" type="submit">
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ModalWithForm;
