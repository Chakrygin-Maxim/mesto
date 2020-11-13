class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
    this._handleButtonClose = this._handleButtonClose.bind(this);
    this._handleEscClose = this._handleEscClose.bind(this);
    this._handleCloseByClickOnOverlay = this._handleCloseByClickOnOverlay.bind(this);
  }

  _handleEscClose(evt) {
    if (evt.key === 'Escape') {
      this.close();
    }
  }

  _handleButtonClose(evt) {
    if (evt.target.classList.contains('popup__button-close')) {
      this.close();
    }
  }

  _handleCloseByClickOnOverlay(evt) {
    if (evt.target === evt.currentTarget) {
      this.close();
    }
  }

  _addEventListeners() {
    this._popup.addEventListener('click', this._handleButtonClose);
    this._popup.addEventListener('mousedown', this._handleCloseByClickOnOverlay);
  }

  open() {
    document.addEventListener('keydown', this._handleEscClose);
    this._popup.classList.add('popup_opened');
  }

  close() {
    document.removeEventListener('keydown', this._handleEscClose);
    this._popup.classList.remove('popup_opened');
  }

  setEventListeners() {
    this._addEventListeners();
  }
}
export default Popup;
