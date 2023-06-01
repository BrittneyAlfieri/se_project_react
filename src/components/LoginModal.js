

const LoginModal = () => {
    return (
        <ModalWithForm
      title="Log in"
      onClose={onClose}
      onSubmit={handleSubmit}
      buttonText="Log in"
    >
      <div className="modal__text-container">
        <label className="modal__label" id="name-label">
          Email
          <input
            className="modal__input"
            id="email-input"
            placeholder="Email"
            type="email"
            name="email"
            minLength="1"
            maxLength="30"
          ></input>
        </label>
        <label className="modal__label" id="name-label">
          Password
          <input
            className="modal__input"
            id="password-input"
            placeholder="Password"
            type="text"
            name="password"
            minLength="1"
            maxLength="30"
          ></input>
        </label>
        
      </div>
      
      
    </ModalWithForm>
    )
}