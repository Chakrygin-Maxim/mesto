export const initialCards = [
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

export const validationItems = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible'
};

export const cardTemplate = '#element-template';
export const cardListSelector = '.elements';
export const formProfileSelector = '.popup_form_profile';
export const formMestoSelector = '.popup_form_mesto';
export const formPhotoSelector = '.popup_form_photo';
export const nameSelector = '.profile__name';
export const jobSelector = '.profile__job';
export const editButton = document.querySelector('.profile__button-edit');
export const addCardButton = document.querySelector('.profile__button-add');

const popupProfile = document.querySelector(formProfileSelector);
export const nameInput = popupProfile.querySelector('.popup__input_field_name');
export const jobInput = popupProfile.querySelector('.popup__input_field_job');
