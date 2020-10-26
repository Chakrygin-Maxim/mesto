import Popup from "./Popup.js";

class PopupWithForm extends Popup {
    constructor(formSubmitHandler, popupSelector) {
        super(popupSelector);
        this._formSubmitHandler = formSubmitHandler;
        this._inputList = this._popup.querySelectorAll('.popup__input')
    }

    _getInputValues() {
        this._inputValues = {};
        this._inputList.forEach(item => {
            this._inputValues[item.name] = item.value;
        })

        return this._inputValues;
    }

    _addSubmitHandler() {
        this._popup.addEventListener('submit', evt => {
            evt.preventDefault();
            const inputValues = this._getInputValues();
            this._formSubmitHandler(inputValues);
            super.close();
        });
    }

    setEventListeners() {
        super.setEventListeners();
        this._addSubmitHandler();
    }

    close() {
        super.close();
        this._popup.reset();
    }
}
export default PopupWithForm;
