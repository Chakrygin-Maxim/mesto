class Popup {

    constructor(popupSelector) {
        this._popup = document.querySelector(popupSelector);
    }

    _handleEscClose = evt => {
        if (evt.key === 'Escape') {
            this.close();
        }
    }

    _handleOverlayClose = evt => {
        if (evt.target === evt.currentTarget) {
            this.close();
        }
    }

    _handleButtonClose = (evt) => {
        if (evt.target.classList.contains('popup') || evt.target.classList.contains('popup__button-close')) {
            this.close();
        }
    }

    _addEventListeners(){
        this._popup.addEventListener('click', this._handleButtonClose);
        document.addEventListener('keydown', this._handleEscClose);
    }

    _removeEventListeners() {
        this._popup.removeEventListener('click', this._handleButtonClose);
        document.removeEventListener('keydown', this._handleEscClose);
    }

    open() {
        this._popup.classList.add('popup_opened');
    }

    close() {
        this._popup.classList.remove('popup_opened');
        this._removeEventListeners();
    }

    setEventListeners() {
        this._addEventListeners();
    }
}
export default Popup;
