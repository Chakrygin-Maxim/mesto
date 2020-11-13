class Card {
  constructor(
    item,
    userId,
    templateSelector,
    openPopupPhotoHandler,
    openPopupDeleteConfirmHandler,
    handleButtonLikeClick,
  ) {
    this._name = item.name;
    this._link = item.link;
    this._likes = item.likes;
    this._cardId = item.id;
    this._ownerId = item.ownerId;
    this._userId = userId;
    this._templateSelector = templateSelector;
    this._openPopupPhotoHandler = openPopupPhotoHandler;
    this._openPopupDeleteConfirmHandler = openPopupDeleteConfirmHandler;
    this._handleButtonLikeClick = handleButtonLikeClick;
  }

  _getTemplate() {
    return document.querySelector(this._templateSelector).content.cloneNode(true);
  }

  _setLikesCount(likes) {
    this._likes = likes;
    this._likesCount.textContent = this._likes.length;
  }

  _isLiked() {
    return this._likes.find((like) => like._id === this._userId);
  }

  _setLikeButton() {
    if (this._isLiked()) {
      this._likeButton.classList.add('element__button-like_status_liked');
    } else {
      this._likeButton.classList.remove('element__button-like_status_liked');
    }
  }

  _handleButtonLike(evt) {
    this._handleButtonLikeClick(evt, this._cardId).then((data) => {
      this._setLikesCount(data.likes);
      this._setLikeButton();
    });
  }

  _setEventListeners() {
    this._element.querySelector('.element__photo').addEventListener('click', (evt) => {
      this._openPopupPhotoHandler(evt.target);
    });

    this._element.querySelector('.element__button-like').addEventListener('click', (evt) => {
      this._handleButtonLike(evt);
    });

    this._element.querySelector('.element__button-trash').addEventListener('click', (evt) => {
      this._openPopupDeleteConfirmHandler(this._cardId, evt.target.parentElement);
    });
  }

  _setElements() {
    this._likesCount = this._element.querySelector('.element__likes');
    this._likeButton = this._element.querySelector('.element__button-like');
    this._elementName = this._element.querySelector('.element__info-name');
    this._trashButton = this._element.querySelector('.element__button-trash');
  }

  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners();
    this._setElements();

    const cardPhoto = this._element.querySelector('.element__photo');
    cardPhoto.src = this._link;
    cardPhoto.alt = this._name;

    this._elementName.textContent = this._name;
    this._likesCount.textContent = this._likes.length;
    this._setLikeButton();

    if (this._userId === this._ownerId) {
      this._trashButton.classList.add('button-trash_visible');
    }

    return this._element;
  }
}

export default Card;
