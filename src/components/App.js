import "../blocks/app/App.css";
import { Header, Main, Footer, ModalWithForm } from "./index";

function App() {
  return (
    <div className="page">
      <div className="page__wrapper">
        <Header />
        <Main />
        <Footer />
        <ModalWithForm title="New garment" buttonText="Add garment">
          <div className="modal__text-container">
            <label className="modal__label" id="name-label">
              Name
              <input
                className="modal__input"
                id="name-input"
                placeholder="Name"
                type="text"
                name="name"
                minLength="1"
                maxLength="30"
              ></input>
            </label>
            <label className="modal__label" id="image-label">
              Image
              <input
                className="modal__input"
                id="image-input"
                placeholder="Image URL"
                type="url"
                name="link"
                minLength="1"
                maxLength="30"
              ></input>
            </label>
          </div>
          <p className="modal__weather-description">Select the weather type:</p>
          <div>
            <div>
              <input
                className="modal__radio-button"
                type="radio"
                id="hot"
                value="hot"
              />
              <label className="modal__radio-description">Hot</label>
            </div>
            <div>
              <input
                className="modal__radio-button"
                type="radio"
                id="warm"
                value="warm"
              />
              <label className="modal__radio-description">Warm</label>
            </div>
            <div>
              <input
                className="modal__radio-button"
                type="radio"
                id="cold"
                value="cold"
              />
              <label className="modal__radio-description">Cold</label>
            </div>
          </div>
        </ModalWithForm>
      </div>
    </div>
  );
}

export default App;
