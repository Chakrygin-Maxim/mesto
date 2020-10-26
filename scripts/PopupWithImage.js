import Popup from "./Popup.js";

class PopupWithImage extends Popup {
    constructor({ src, alt }, popupSelector) {
        super(popupSelector);
        this._image = src;
        this._alt = alt;
        this._elementImage = this._popup.querySelector('.popup__image');
        this._photoCaption = this._popup.querySelector('.popup__caption');
    }

    open() {
        this._elementImage.src = this._image;
        this._elementImage.alt = this._alt;
        this._photoCaption.textContent = this._alt;
        super.open();
    }
}
export default PopupWithImage;
