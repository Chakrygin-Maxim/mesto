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

// Открытие формы popup'a
const openPopup = function (form) {
    document.addEventListener('keydown', popupCloseByKeyDownESC);
    form.classList.add('popup_opened');
};

// Закрытие формы popup'a
const closePopup = function (form) {
    document.removeEventListener('keydown', popupCloseByKeyDownESC);
    form.classList.remove('popup_opened');

    //Убираем классы с ошибками у input полей
    //Убираем видимость ошибки
    //Очищаем текст ошибки
    removeErrors(form);
};

// Закрытие popup'a без сохранения при клике вне формы
const popupCloseByClickOnOverlay = function (evt) {
    if (evt.target == evt.currentTarget) {
        closePopup(evt.target);
    }
};

// Закрытие popup'a без сохранения при нажатии на кнопку 'ESC'
const popupCloseByKeyDownESC = function (evt) {
    if (evt.key === 'Escape') {
        const opendPopup = document.querySelector('.popup_opened');
        if (opendPopup) {
            closePopup(opendPopup);
        };
    };
};

// Закрытие popup'a без сохранения при клике на крестик
const closeButtonOnClick = function (evt) {
    closePopup(evt.target.parentElement.parentElement);
};

// Открытие формы редактирования профиля
const editButtonOnClick = function () {
    nameInput.value = profileName.innerText;
    jobInput.value = profileJob.innerText;

    openPopup(popupProfile);
    enableValidation(validationItems);
};

// Открытие формы добавления карточки
const addButtonOnClick = function () {
    cardNameInput.value = '';
    linkInput.value = '';

    openPopup(popupMesto);
    enableValidation(validationItems);
};

// Сохранение формы редактирования профиля
const popupSubmit = function (evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;

    closePopup(popupProfile);
};

// Сохранения формы добавления карточки
const popupMestoSubmit = function (evt) {
    evt.preventDefault();
    const newCard = {
        name: cardNameInput.value,
        link: linkInput.value
    };

    initialCards.push(newCard);
    addNewCard(newCard.link, newCard.name);
    closePopup(popupMesto);
};

// Добавить новую карту
const addNewCard = function (cardLink, name) {
    const newCard = addCard(cardLink, name);
    renderCard(newCard);
};

// Отрисовать карту на форме
const renderCard = function (newCard) {
    cardsElements.prepend(newCard);
};

// Добавление карточки на форму
const addCard = function (cardLink, name) {
    const cardElement = cardTemplate.cloneNode(true);

    const cardPhoto = cardElement.querySelector('.element__photo');
    cardPhoto.src = cardLink;
    cardPhoto.alt = name;

    // Открытие popup c картинкой для просмотра
    cardPhoto.addEventListener('click', evt => {
        popupImage.src = evt.target.src;
        popupImage.alt = evt.target.alt;
        popupPhotoCaption.textContent = evt.target.alt;

        openPopup(popupPhoto);
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

    return cardElement;
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
};

// Обработчики событий форм
editButton.addEventListener('click', editButtonOnClick);
addCardButton.addEventListener('click', addButtonOnClick);
popupProfileButton.addEventListener('submit', popupSubmit);
popupMestoButton.addEventListener('submit', popupMestoSubmit);

// Первоначальное заполнение карточек
initialCards.forEach(card => addNewCard(card.link, card.name));
setClosePopup();