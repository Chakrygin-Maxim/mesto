import {initialCards, validationItems, cardTemplate} from './config.js';
import Card from './Card.js';
import FormValidator from './FormValidator.js';

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

// Открытие формы popup'a
const openPopup = (form) => {
    document.addEventListener('keydown', popupCloseByKeyDownESC);
    form.classList.add('popup_opened');
};

const openPopupPhotoHandler = (elementPhoto)=> {
    popupImage.src = elementPhoto.src;
    popupImage.alt = elementPhoto.alt;
    popupPhotoCaption.textContent = elementPhoto.alt;

    openPopup(popupPhoto);
}

// Закрытие формы popup'a
const closePopup = (form) => {
    document.removeEventListener('keydown', popupCloseByKeyDownESC);
    form.classList.remove('popup_opened');
};

// Закрытие popup'a без сохранения при клике вне формы
const popupCloseByClickOnOverlay = (evt) => {
    if (evt.target === evt.currentTarget) {
        closePopup(evt.target);
    }
};

// Закрытие popup'a без сохранения при нажатии на кнопку 'ESC'
const popupCloseByKeyDownESC = (evt) => {
    if (evt.key === 'Escape') {
        const openedPopup = document.querySelector('.popup_opened');
        if (openedPopup) {
            closePopup(openedPopup);
        }
    }
};

// Закрытие popup'a без сохранения при клике на крестик
const closeButtonOnClick = (evt) => {
    closePopup(evt.target.parentElement.parentElement);
};

// Проверяем ошибки при открытии попапа
const checkPopup = (formElement) => {
    const formValidator = new FormValidator(validationItems, formElement);
    formValidator.enableValidation();
}

// Открытие формы редактирования профиля
const editButtonOnClick = () => {
    nameInput.value = profileName.innerText;
    jobInput.value = profileJob.innerText;

    checkPopup(popupProfile);
    openPopup(popupProfile);
};

// Открытие формы добавления карточки
const addButtonOnClick = () => {
    cardNameInput.value = '';
    linkInput.value = '';
    
    checkPopup(popupMesto);
    openPopup(popupMesto);
};

// Сохранение формы редактирования профиля
const popupProfileSubmit = (evt) => {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;

    closePopup(popupProfile);
};

// Сохранения формы добавления карточки
const popupMestoSubmit = (evt) => {
    evt.preventDefault();
    const newCard = {
        name: cardNameInput.value,
        link: linkInput.value
    };

    addNewCard(newCard);
    closePopup(popupMesto);
};

// Добавить новую карточку
const addNewCard = (cardItem) => {
    const newCard = new Card(cardItem, cardTemplate, openPopupPhotoHandler);
    const cardElement = newCard.generateCard();
    
    renderCard(cardElement);
};

// Отрисовать карту на форме
const renderCard = (newCard) => {
    cardsElements.prepend(newCard);
};

// установка закрытия попапов
function setClosePopup() {
    const popupList = Array.from(document.querySelectorAll('.popup'));
    popupList.forEach(popup => {
        popup.addEventListener('mousedown', popupCloseByClickOnOverlay);

        const closeButtonList = Array.from(popup.querySelectorAll('.popup__button-close'));
        closeButtonList.forEach(closeButton => {
            closeButton.addEventListener('click', closeButtonOnClick);
        });
    });
}

// Обработчики событий форм
editButton.addEventListener('click', editButtonOnClick);
addCardButton.addEventListener('click', addButtonOnClick);
popupProfileButton.addEventListener('submit', popupProfileSubmit);
popupMestoButton.addEventListener('submit', popupMestoSubmit);

// Первоначальное заполнение карточек
initialCards.forEach(cardItem => {
    const newCard = new Card(cardItem, cardTemplate, openPopupPhotoHandler);
    const cardElement = newCard.generateCard();
    cardsElements.append(cardElement);
});

setClosePopup();