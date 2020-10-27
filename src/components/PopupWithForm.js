import Popup from "./Popup.js";

class PopupWithForm extends Popup {
    constructor(formSubmitHandler, popupSelector) {
        super(popupSelector);
        this._formSubmitHandler = formSubmitHandler;
        this._inputList = this._popup.querySelectorAll('.popup__input');
        this._popupForm = this._popup.querySelector('.popup__form');
    }

    _getInputValues() {
        this._inputValues = {};
        this._inputList.forEach(item => {
            this._inputValues[item.name] = item.value;
        })

        return this._inputValues;
    }

    _handleSubmit(evt) {
        evt.preventDefault();
        const inputValues = this._getInputValues();
        this._formSubmitHandler(inputValues);
        this.close();
    };

     _removeSubmitListener(){
        this._popup.removeEventListener('submit', this._handleSubmit);
     }

    setEventListeners() {
        super.setEventListeners();
        this._popup.addEventListener('submit', this._handleSubmit.bind(this));
    }

    close() {
        super.close();
        this._popupForm.reset();
        this._removeSubmitListener();
    }
}
export default PopupWithForm;
