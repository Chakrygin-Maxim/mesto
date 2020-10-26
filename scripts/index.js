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

// Определение переменных
const popupProfile = document.querySelector('.popup_form_profile');
const popupMesto = document.querySelector('.popup_form_mesto');
const popupProfileButton = popupProfile.querySelector('.popup__form');
const popupMestoButton = popupMesto.querySelector('.popup__form');
const nameInput = popupProfile.querySelector('.popup__input_field_name');
const jobInput = popupProfile.querySelector('.popup__input_field_job');
const cardNameInput = popupMesto.querySelector('.popup__input_field_cardName');
const linkInput = popupMesto.querySelector('.popup__input_field_link');
const editButton = document.querySelector('.profile__button-edit');
const addCardButton = document.querySelector('.profile__button-add');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');

const CardList = new Section({
    items: initialCards,
    renderer: (cardItem) => {
        const newCard = new Card(cardItem, cardTemplate, openPopupPhotoHandler);
        const cardElement = newCard.generateCard();
        CardList.addItem(cardElement);
    }
}, cardListSelector);

const openPopupPhotoHandler = (elementPhoto) => {
    const popupWithImage = new PopupWithImage(elementPhoto, formPhotoSelector);
    popupWithImage.setEventListeners();
    popupWithImage.open();
}

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

// Открытие формы редактирования профиля
const editButtonOnClick = () => {
    nameInput.value = profileName.innerText;
    jobInput.value = profileJob.innerText;

    checkPopup(popupProfile);
    
    const popup = new Popup(formProfileSelector);
    popup.setEventListeners();
    popup.open();
};

// Открытие формы добавления карточки
const addButtonOnClick = () => {
    cardNameInput.value = '';
    linkInput.value = '';

    checkPopup(popupMesto);

    const popup = new Popup(formMestoSelector);
    popup.setEventListeners();
    popup.open();
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

    const newCard = new Card({
        name: cardNameInput.value,
        link: linkInput.value
        },
        cardTemplate,
        openPopupPhotoHandler);

    const cardElement = newCard.generateCard();
    CardList.addItem(cardElement);

    closePopup(popupMesto);
};

// Обработчики событий форм
editButton.addEventListener('click', editButtonOnClick);
addCardButton.addEventListener('click', addButtonOnClick);
popupProfileButton.addEventListener('submit', popupProfileSubmit);
popupMestoButton.addEventListener('submit', popupMestoSubmit);

CardList.renderItems();
