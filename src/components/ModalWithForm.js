import React from "react";
import closeButton from "../images/close-button.png";


const ModalWithForm = ({
  children,
  buttonText = "",
  title,
  name,
  onClose,
  onSubmit,
  onRegisterButton,
  onLoginButton,
  activeModal

}) => {

  const addRegisterButton = () => {
    if (activeModal === "login") {
      console.log(activeModal);
      return (
        <button onClick={onRegisterButton} className="modal__button" type="button">
          or Register
        </button>
      )
    }
    return null;
  }

  const addLoginButton = () => {
    if (activeModal === "register") {
      return (
        <button onClick={onLoginButton} className="modal__button" type="button">
          or Login
        </button>
      )
    }
    return null;
  }

  
  return (
    <div className={`modal modal_type_${name}`}>
      <div className="modal__content">
        <button className="modal__close" type="button" onClick={onClose}>
          <img className="modal__close-img" src={closeButton}></img>
        </button>
        <h3 className="modal__title">{title}</h3>
        <form>
          {children}
          <button onClick={onSubmit} className="modal__submit" type="submit">
            {buttonText}
          </button>
          {addRegisterButton()}
          {addLoginButton()}
        </form>
      </div>
    </div>
  );
};

export default ModalWithForm;
