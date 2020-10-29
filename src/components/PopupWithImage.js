import Popup from "./Popup.js";

class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._elementImage = this._popup.querySelector('.popup__image');
        this._photoCaption = this._popup.querySelector('.popup__caption');
    }

    open({ src, alt }) {
        this._elementImage.src = src;
        this._elementImage.alt = alt;
        this._photoCaption.textContent = alt;
        super.open();
    }
}
export default PopupWithImage;
