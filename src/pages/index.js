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
    jobSelector
} from '../utils/constants.js';

import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';

// Определение переменных
const popupProfile = document.querySelector('.popup_form_profile');
const popupMesto = document.querySelector('.popup_form_mesto');
const nameInput = popupProfile.querySelector('.popup__input_field_name');
const jobInput = popupProfile.querySelector('.popup__input_field_job');
const editButton = document.querySelector('.profile__button-edit');
const addCardButton = document.querySelector('.profile__button-add');

// Колбэк открытия карточки места по клику на нее
const handleCardClick = (elementPhoto) => {
    const popupWithImage = new PopupWithImage(elementPhoto, formPhotoSelector);
    popupWithImage.setEventListeners();
    popupWithImage.open();
}
// Колбэк установки нового имени и должности профиля
const handlePopupProfileSubmit = (inputValues) => {
    userInfo.setUserInfo(inputValues.name, inputValues.job);
 };

// Карточка профиля
const userInfo = new UserInfo({nameSelector, jobSelector});

// Хранилище картинок
const cardList = new Section({
    items: initialCards,
    renderer: (cardItem) => {
        const newCard = new Card(cardItem, cardTemplate, handleCardClick);
        const cardElement = newCard.generateCard();
        cardList.addItem(cardElement);
    }
}, cardListSelector);

// Проверяет ошибки при открытии попапа
const checkPopup = (formElement) => {
    const formValidator = new FormValidator(validationItems, formElement);
    formValidator.enableValidation();
}

// Добавляет новую карточку на форму
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

// Инициализирует форму редактирования профиля пользователя
const editButtonOnClick = () => {
    const profileData = userInfo.getUserInfo();
    
    nameInput.value = profileData.name;
    jobInput.value = profileData.job;

    checkPopup(popupProfile);
    openPopup(handlePopupProfileSubmit, formProfileSelector);
};

// Инициализирует форму добавления карточки
const addButtonOnClick = () => {
    checkPopup(popupMesto);
    openPopup(handlePopupMestoSubmit, formMestoSelector);
};

// Открывает popup с формой по переденным параметрам
const openPopup = (submitHandler, formSelector) => {
    const popupWithForm = new PopupWithForm(submitHandler, formSelector);
    popupWithForm.setEventListeners();
    popupWithForm.open();
}

// Обработчики событий форм
editButton.addEventListener('click', editButtonOnClick);
addCardButton.addEventListener('click', addButtonOnClick);

// Заполняет первоначальными карточками
cardList.renderItems();
