class Card {

    constructor(item, templateSelector, openPopupPhotoHandler) {
        this._name = item.name;
        this._link = item.link;
        this._likes = item.likes;
        this._templateSelector = templateSelector;
        this._openPopupPhotoHandler = openPopupPhotoHandler;
    }
 
    _getTemplate() {
        return document
            .querySelector(this._templateSelector)
            .content
            .cloneNode(true);
    }

    _setEventListeners() {
        this._element.querySelector('.element__photo')
            .addEventListener('click', evt => {
                this._openPopupPhotoHandler(evt.target);
            });

        this._element.querySelector('.element__button-like')
            .addEventListener('click', evt => {
                const eventTarget = evt.target;
                eventTarget.classList.toggle('element__button-like_status_liked');
            });

        this._element.querySelector('.element__button-trash')
            .addEventListener('click', evt => {
                evt.target.parentElement.remove();
            });
    }

    generateCard() {
        this._element = this._getTemplate();
        this._setEventListeners();

        const cardPhoto = this._element.querySelector('.element__photo');
        cardPhoto.src = this._link;
        cardPhoto.alt = this._name;

        this._element.querySelector('.element__info-name').textContent = this._name;
        this._element.querySelector('.element__likes').textContent = this._likes;

        return this._element;
    }
}

export default Card;