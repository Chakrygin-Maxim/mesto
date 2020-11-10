import "./index.css";
import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import Api from "../components/Api.js";
import {
  validationItems,
  cardTemplate,
  cardListSelector,
  formProfileSelector,
  formProfileAvatar,
  formMestoSelector,
  formPhotoSelector,
  formDeleteConfirmSelector,
  nameSelector,
  jobSelector,
  avatarSelector,
  editButton,
  addCardButton,
  editAvatarButton,
  buttonLikeClass,
  nameInput,
  jobInput,
  cohort,
  token,
} from "../utils/constants.js";

// Инициализация API
const api = new Api(token, cohort);

// Переменная для хранения ID usera для отображения кнопки удаления карточки
let userId = "";

// Колбэк установки нового имени и должности профиля
const handlePopupProfileSubmit = (inputValues) => {
  return api.updateUserInfo(inputValues.name, inputValues.job).then((data) => {
    userInfo.setUserInfo(data.name, data.about);
  });
};

// Колбэк сохранение нового аватара пользователя
const handlePopupAvatarEdit = (inputValues) => {
  return api.updateAvatar(inputValues.avatarLink).then((data) => {
    userInfo.setUserInfo(data.name, data.about, data._id, data.avatar);
  });
};

// Колбэк удаления карточки
const handleCardDelete = (cardId, parentElement) => {
  return api.deleteCard(cardId).then((data) => {
    parentElement.remove();
    return data;
  });
};

// Колбэк открытия карточки места по клику на нее
const handleCardClick = (elementPhoto) => {
  popupWithImage.open(elementPhoto);
};

// Колбэк открытия формы подтверждения удаления собственной карточки
const handleCardClickTrash = (cardId, parentElement) => {
  popupDeleteConfirm.open(cardId, parentElement);
};

// Колбэк нажатия на кнопку лайк
const handleButtonLikeClick = (evt, cardId) => {
  const eventTarget = evt.target;
  if (eventTarget.classList.contains(buttonLikeClass)) {
    return api.removeLike(cardId);
  } else {
    return api.setLike(cardId);
  }
};

// Колбэк добавляет новую карточку на форму
const handlePopupMestoSubmit = (inputValues) => {
  return api.addCard(inputValues.cardName, inputValues.link).then((data) => {
    const newCard = new Card(
      {
        name: data.name,
        link: data.link,
        likes: data.likes,
        id: data._id,
        ownerId: data.owner._id,
      },
      userId,
      cardTemplate,
      handleCardClick,
      handleCardClickTrash,
      handleButtonLikeClick
    );
    const cardElement = newCard.generateCard();
    cardList.addItem(cardElement);
  });
};

// Карточка профиля
const userInfo = new UserInfo({ nameSelector, jobSelector, avatarSelector });

// Первоначальное заполнение профиля
setUserInfo = (userData) => {
  const { name, about, avatar, _id } = userData;
  userInfo.setUserInfo(name, about, _id, avatar);
  userId = _id;
};

// Первоначальное заполнение карточек
setInitialCads = (initialCards) => {
  const items = initialCards.map((card) => {
    return {
      name: card.name,
      link: card.link,
      likes: card.likes,
      id: card._id,
      ownerId: card.owner._id,
    };
  });
  cardList.renderItems(items);
};

// Синхронное получение данных пользователя и первоначальных карточек
Promise.all([api.getUserInfo(), api.getInitialCards()])
  .then(([userData, initialCards]) => {
    setUserInfo(userData);
    setInitialCads(initialCards);
  })
  .catch((err) => {
    console.log(`Ошибка: ${err}`);
  });

// Попап с картинкой
const popupWithImage = new PopupWithImage(formPhotoSelector);
popupWithImage.setEventListeners();

// Попап изменение профиля
const popupEditProfile = new PopupWithForm(
  handlePopupProfileSubmit,
  formProfileSelector
);
popupEditProfile.setEventListeners();

// Попап изменение профиля
const popupEditAvatar = new PopupWithForm(
  handlePopupAvatarEdit,
  formProfileAvatar
);
popupEditAvatar.setEventListeners();

// Попап подверждение удаления
const popupDeleteConfirm = new PopupWithForm(
  handleCardDelete,
  formDeleteConfirmSelector
);
popupDeleteConfirm.setEventListeners();

// Попап добавление карточки
const popupNewCard = new PopupWithForm(
  handlePopupMestoSubmit,
  formMestoSelector
);
popupNewCard.setEventListeners();

// Создаем секцию с карточками
const cardList = new Section(
  {
    renderer: (cardItem) => {
      const newCard = new Card(
        cardItem,
        userId,
        cardTemplate,
        handleCardClick,
        handleCardClickTrash,
        handleButtonLikeClick
      );
      const cardElement = newCard.generateCard();
      const cardElements = document.querySelector(cardListSelector);
      cardElements.append(cardElement);
    },
  },
  cardListSelector
);

// Открывает форму изменения данных профиля
editButton.addEventListener("click", () => {
  const profileData = userInfo.getUserInfo();

  nameInput.value = profileData.name;
  jobInput.value = profileData.job;

  popupEditProfile.open();
});

// Открывает форму добавления новой карточки
addCardButton.addEventListener("click", () => {
  popupNewCard.open();
});

// Открывает форму изменения аватара пользователя
editAvatarButton.addEventListener("click", () => {
  popupEditAvatar.open();
});

// Включает валидацию формы профиля
const profileValidation = new FormValidator(
  validationItems,
  document.forms.formProfile
);
profileValidation.enableValidation();

// Включает валидацию формы ввода новой карточки
const newCardValidation = new FormValidator(
  validationItems,
  document.forms.formNewCard
);
newCardValidation.enableValidation();

// Включает валидацию формы ввода новой карточки
const avatarValidation = new FormValidator(
  validationItems,
  document.forms.formAvatar
);
avatarValidation.enableValidation();
