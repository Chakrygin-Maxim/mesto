import {
    initialCards,
    validationItems,
    cardTemplate,
    cardListSelector,
    formProfileSelector,
    formMestoSelector,
    formPhotoSelector
} from './config.js';

import Card from './Card.js';
import FormValidator from './FormValidator.js';
import Section from './Section.js';
import Popup from './Popup.js';
import PopupWithImage from './PopupWithImage.js';
import PopupWithForm from './PopupWithForm.js';

// Определение переменных
const popupProfile = document.querySelector('.popup_form_profile');
const popupMesto = document.querySelector('.popup_form_mesto');
const popupMestoButton = popupMesto.querySelector('.popup__form');
const nameInput = popupProfile.querySelector('.popup__input_field_name');
const jobInput = popupProfile.querySelector('.popup__input_field_job');
const cardNameInput = popupMesto.querySelector('.popup__input_field_cardName');
const linkInput = popupMesto.querySelector('.popup__input_field_link');
const editButton = document.querySelector('.profile__button-edit');
const addCardButton = document.querySelector('.profile__button-add');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');

const handleCardClick = (elementPhoto) => {
    const popupWithImage = new PopupWithImage(elementPhoto, formPhotoSelector);
    popupWithImage.setEventListeners();
    popupWithImage.open();
}

const CardList = new Section({
    items: initialCards,
    renderer: (cardItem) => {
        const newCard = new Card(cardItem, cardTemplate, handleCardClick);
        const cardElement = newCard.generateCard();
        CardList.addItem(cardElement);
    }
}, cardListSelector);

const closePopup = (form) => {
    document.removeEventListener('keydown', popupCloseByKeyDownESC);
    form.classList.remove('popup_opened');
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

// Проверяем ошибки при открытии попапа
const checkPopup = (formElement) => {
    const formValidator = new FormValidator(validationItems, formElement);
    formValidator.enableValidation();
}

// Колбэк отображения данных профиля на форме
const handlePopupProfileSubmit = (inputValues) => {
    profileName.textContent = inputValues.name;
    profileJob.textContent = inputValues.job;
};

// Сохранения формы добавления карточки
const handlePopupMestoSubmit = (inputValues) => {

    const newCard = new Card({
        name: inputValues.cardName,
        link: inputValues.link
    },
        cardTemplate,
        handleCardClick);

    const cardElement = newCard.generateCard();
    CardList.addItem(cardElement);
};

// Открытие формы редактирования профиля
const editButtonOnClick = () => {
    nameInput.value = profileName.innerText;
    jobInput.value = profileJob.innerText;

    checkPopup(popupProfile);
    openPopup(handlePopupProfileSubmit, formProfileSelector);
};

// Открытие формы добавления карточки
const addButtonOnClick = () => {
    cardNameInput.value = '';
    linkInput.value = '';

    checkPopup(popupMesto);
    openPopup(handlePopupMestoSubmit, formMestoSelector);
};

const openPopup = (submitHandler, formSelector) => {
    const popupWithForm = new PopupWithForm(submitHandler, formSelector);
    popupWithForm.setEventListeners();
    popupWithForm.open();
}

// Обработчики событий форм
editButton.addEventListener('click', editButtonOnClick);
addCardButton.addEventListener('click', addButtonOnClick);

CardList.renderItems();
