import './index.css';

import {
    initialCards,
    validationItems,
    cardTemplate,
    cardListSelector,
    formProfileSelector,
    formMestoSelector,
    formPhotoSelector,
    nameSelector,
    jobSelector,
    editButton,
    addCardButton,
    nameInput,
    jobInput
} from '../utils/constants.js';

import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';

// Колбэк установки нового имени и должности профиля
const handlePopupProfileSubmit = (inputValues) => {
    userInfo.setUserInfo(inputValues.name, inputValues.job);
};

// Колбэк открытия карточки места по клику на нее
const handleCardClick = (elementPhoto) => {
    popupWithImage.open(elementPhoto);
}

// Колбэк добавляет новую карточку на форму
const handlePopupMestoSubmit = (inputValues) => {
    const newCard = new Card({
        name: inputValues.cardName,
        link: inputValues.link
    },
        cardTemplate,
        handleCardClick);

    const cardElement = newCard.generateCard();
    cardList.addItem(cardElement);
};

// Карточка профиля
const userInfo = new UserInfo({ nameSelector, jobSelector });

// Попап с картинкой
const popupWithImage = new PopupWithImage(formPhotoSelector);
popupWithImage.setEventListeners();

// Попап изменение профиля
const popupEditProfile = new PopupWithForm(handlePopupProfileSubmit, formProfileSelector);
popupEditProfile.setEventListeners();

// Попап добавление карточки
const popupNewCard = new PopupWithForm(handlePopupMestoSubmit, formMestoSelector);
popupNewCard.setEventListeners();

// Хранилище картинок
const cardList = new Section({
    items: initialCards,
    renderer: (cardItem) => {
        const newCard = new Card(cardItem, cardTemplate, handleCardClick);
        const cardElement = newCard.generateCard();
        cardList.addItem(cardElement);
    }
}, cardListSelector);

// Открывает форму изменения данных профиля
editButton.addEventListener('click', () => {
    const profileData = userInfo.getUserInfo();

    nameInput.value = profileData.name;
    jobInput.value = profileData.job;

    popupEditProfile.open();
});

// Открывает форму добавления новой карточки
addCardButton.addEventListener('click', () => {
    popupNewCard.open();
});

// Заполняет первоначальными карточками
cardList.renderItems();

// Включает валидацию формы профиля
const profileValidation = new FormValidator(validationItems, document.forms.formProfile);
profileValidation.enableValidation();

// Включает валидацию формы ввода новой карточки
const newCardValidation = new FormValidator(validationItems, document.forms.formNewCard);
newCardValidation.enableValidation();
