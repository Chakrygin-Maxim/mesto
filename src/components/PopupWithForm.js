import Popup from "./Popup.js";

class PopupWithForm extends Popup {
  constructor(formSubmitHandler, popupSelector) {
    super(popupSelector);
    this._formSubmitHandler = formSubmitHandler;
    this._inputList = this._popup.querySelectorAll(".popup__input");
    this._popupForm = this._popup.querySelector(".popup__form");
    this._handleSubmit = this._handleSubmit.bind(this);
    this._buttonSubmit = this._popup.querySelector(".popup__button");
  }

  _getInputValues() {
    this._inputValues = {};
    this._inputList.forEach((item) => {
      this._inputValues[item.name] = item.value;
    });

    return this._inputValues;
  }

  _handleSubmit(evt) {
    evt.preventDefault();
    // Сохраняем предыдущее название кнопки сабмит
    const buttonSubmitName = this._buttonSubmit.textContent;

    new Promise((resolve) => {
      this._buttonSubmit.textContent = "Сохранение...";
      const inputValues = this._getInputValues();
      resolve(inputValues);
    })
      .then((inputValues) => {
          
        // Ставим в очередь промис Api и ждем его выполнения
        // для возвращения кнопки сабмит к первоначалному виду
        if (this._cardId) {
          return this._formSubmitHandler(this._cardId, this._parentElement);
        } else {
          return this._formSubmitHandler(inputValues);
        }
      })
      .catch((err) => {
        console.log(`Error ${err}`);
      })
      .finally((data) => {
        this.close();
        this._buttonSubmit.textContent = buttonSubmitName;
      });
  }

  setEventListeners() {
    super.setEventListeners();
    this._popup.addEventListener("submit", this._handleSubmit);
  }

  open(cardId, parentElement) {
    super.open();
    this._cardId = cardId;
    this._parentElement = parentElement;
  }

  close() {
    super.close();
    this._popupForm.reset();
  }
}
export default PopupWithForm;
