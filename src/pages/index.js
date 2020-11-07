import './index.css';
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import Api from '../components/Api.js';
import {
    validationItems,
    cardTemplate,
    cardListSelector,
    formProfileSelector,
    formMestoSelector,
    formPhotoSelector,
    nameSelector,
    jobSelector,
    avatarSelector,
    editButton,
    addCardButton,
    nameInput,
    jobInput,
    cohort,
    token
} from '../utils/constants.js';

// Инициализация API
const api = new Api(token, cohort);

// Колбэк установки нового имени и должности профиля
const handlePopupProfileSubmit = (inputValues) => {
    api.updateUserInfo(inputValues.name, inputValues.job)
        .then(data => {
            userInfo.setUserInfo(data.name, data.about)
        })
};

// Колбэк открытия карточки места по клику на нее
const handleCardClick = (elementPhoto) => {
    popupWithImage.open(elementPhoto);
}

// Колбэк добавляет новую карточку на форму
const handlePopupMestoSubmit = (inputValues) => {
    api.addCard(inputValues.cardName, inputValues.link)
        .then(data => {
            const newCard = new Card({
                name: data.name,
                link: data.link
            },
                cardTemplate,
                handleCardClick);
            const cardElement = newCard.generateCard();
            cardList.addItem(cardElement);
        })
};

// Карточка профиля
const userInfo = new UserInfo({ nameSelector, jobSelector, avatarSelector });

// Первоначальное заполнение профиля
api.getUserInfo().then(data => {
    const { name, about, avatar } = data;
    userInfo.setUserInfo(name, about, avatar);
})

// Попап с картинкой
const popupWithImage = new PopupWithImage(formPhotoSelector);
popupWithImage.setEventListeners();

// Попап изменение профиля
const popupEditProfile = new PopupWithForm(handlePopupProfileSubmit, formProfileSelector);
popupEditProfile.setEventListeners();

// Попап добавление карточки
const popupNewCard = new PopupWithForm(handlePopupMestoSubmit, formMestoSelector);
popupNewCard.setEventListeners();

// Создаем секцию с карточками
const cardList = new Section({
    renderer: (cardItem) => {
        const newCard = new Card(cardItem, cardTemplate, handleCardClick);
        const cardElement = newCard.generateCard();
        const cardElements = document.querySelector(cardListSelector);
        cardElements.append(cardElement);
    }
}, cardListSelector);

// Первоначальное заполнение карточек
api.getInitialCards().then(data => {
    const items = data.map(card => {
        return {
            name: card.name,
            link: card.link
        }
    })
    cardList.renderItems(items);
})

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

// Включает валидацию формы профиля
const profileValidation = new FormValidator(validationItems, document.forms.formProfile);
profileValidation.enableValidation();

// Включает валидацию формы ввода новой карточки
const newCardValidation = new FormValidator(validationItems, document.forms.formNewCard);
newCardValidation.enableValidation();
