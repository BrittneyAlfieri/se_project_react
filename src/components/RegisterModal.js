import ModalWithForm from "./ModalWithForm";

const RegisterModal = ({name, avatar, email, password, onClose}) => {
    return (
        <ModalWithForm
      title="Sign up"
      onClose={onClose}
      buttonText="Next"
    >
      <div className="modal__text-container">
        <label className="modal__label" id="name-label">
          Email*
          <input
            className="modal__input"
            value={email}
            id="email-input"
            placeholder="Email"
            type="email"
            name="email"
            minLength="1"
            maxLength="30"
          ></input>
        </label>
        <label className="modal__label" id="name-label">
          Password*
          <input
            className="modal__input"
            value={password}
            id="password-input"
            placeholder="Password"
            type="text"
            name="password"
            minLength="1"
            maxLength="30"
          ></input>
        </label>
        <label className="modal__label" id="name-label">
          Name
          <input
            className="modal__input"
            value={name}
            id="name-input"
            placeholder="Name"
            type="text"
            name="name"
            minLength="1"
            maxLength="30"
          ></input>
        </label>
        <label className="modal__label" id="image-label">
          Avatar URL
          <input
            className="modal__input"
            value={avatar}
            id="image-input"
            placeholder="Avatar URL"
            type="url"
            name="avatarUrl"
            minLength="1"
          ></input>
        </label>
      </div>
      
      
    </ModalWithForm>
    )
}

export default RegisterModal;