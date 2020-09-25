// Определение переменных
const popupProfile = document.querySelector('.popup_form_profile');
const popupMesto = document.querySelector('.popup_form_mesto');
const popupPhoto = document.querySelector('.popup_form_photo');
const popupProfileButton = popupProfile.querySelector('.popup__form');
const popupMestoButton = popupMesto.querySelector('.popup__form');
const popupImage = popupPhoto.querySelector('.popup__image');
const popupPhotoCaption = popupPhoto.querySelector('.popup__caption');
const nameInput = popupProfile.querySelector('.popup__input_field_name');
const jobInput = popupProfile.querySelector('.popup__input_field_job');
const cardNameInput = popupMesto.querySelector('.popup__input_field_cardName');
const linkInput = popupMesto.querySelector('.popup__input_field_link');
const editButton = document.querySelector('.profile__button-edit');
const addCardButton = document.querySelector('.profile__button-add');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');
const cardsElements = document.querySelector('.elements');
const cardTemplate = document.querySelector('#element-template').content;

// Первоначальные значения карточек
const initialCards = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];

// Изменение видимости popup'a
const renderPopup = function (form) {
    form.classList.toggle('popup_opened');
};

// Закрытие popup'a без сохранения при клике вне формы
const popupCloseByClickOnOverlay = function (evt) {
    if (evt.target == evt.currentTarget) {
        renderPopup(evt.target);
    }
};

// Закрытие popup'a без сохранения при нажатии на кнопку 'ESC'
const popupCloseByKeyDownESC = function (evt) {
    if (evt.key === 'Escape') {
        const opendPopup = document.querySelector('.popup_opened');
        if (opendPopup) {
            renderPopup(opendPopup);
        };
    };
};

// Закрытие popup'a без сохранения при клике на крестик
const closeButtonOnClick = function (evt) {
    renderPopup(evt.target.parentElement.parentElement);
}

// Открытие формы редактирования профиля
const editButtonOnClick = function () {
    nameInput.value = profileName.innerText;
    jobInput.value = profileJob.innerText;

    renderPopup(popupProfile);
};

// Открытие формы добавления карточки
const addButtonOnClick = function () {
    cardNameInput.value = '';
    linkInput.value = '';

    renderPopup(popupMesto);
};

// Сохранение формы редактирования профиля
const popupSubmit = function (evt) {
    evt.preventDefault();

    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;

    renderPopup(popupProfile);
};

// Сохранения формы добавления карточки
const popupMestoSubmit = function (evt) {
    evt.preventDefault();

    const newCard = {
        name: cardNameInput.value,
        link: linkInput.value
    };

    initialCards.push(newCard);
    addCards(newCard.link, newCard.name);
    renderPopup(popupMesto);
};

// Добавление карточки на форму
const addCards = function (cardLink, name) {
    const cardElement = cardTemplate.cloneNode(true);

    const cardPhoto = cardElement.querySelector('.element__photo');
    cardPhoto.src = cardLink;
    cardPhoto.alt = name;

    // Открытие popup c картинкой для просмотра
    cardPhoto.addEventListener('click', evt => {
        popupImage.src = evt.target.src;
        popupImage.alt = evt.target.alt;
        popupPhotoCaption.textContent = evt.target.alt;

        renderPopup(popupPhoto);
    });

    cardElement.querySelector('.element__info-name').textContent = name;

    const likeButton = cardElement.querySelector('.element__button-like');
    // Нажатие кнопки like/dislike 
    likeButton.addEventListener('click', evt => {
        const eventTarget = evt.target;
        eventTarget.classList.toggle('element__button-like_status_liked');
    });

    const delButton = cardElement.querySelector('.element__button-trash');
    delButton.addEventListener('click', evt => {
        evt.target.parentElement.remove();
    });

    cardsElements.prepend(cardElement);
};

// установка закрытия попапов
function setClosePopup() {
    const popupList = Array.from(document.querySelectorAll('.popup'));
    popupList.forEach(popup => {
        popup.addEventListener('click', popupCloseByClickOnOverlay);

        const closeButtonList = Array.from(popup.querySelectorAll('.popup__button-close'));
        closeButtonList.forEach(closeButton => {
            closeButton.addEventListener('click', closeButtonOnClick);
        });

    });

    document.addEventListener('keydown', popupCloseByKeyDownESC);
}

// Обработчики событий форм
editButton.addEventListener('click', editButtonOnClick);
addCardButton.addEventListener('click', addButtonOnClick);
popupProfileButton.addEventListener('submit', popupSubmit);
popupMestoButton.addEventListener('submit', popupMestoSubmit);

// Первоначальное заполнение карточек
initialCards.forEach(card => addCards(card.link, card.name));
setClosePopup();