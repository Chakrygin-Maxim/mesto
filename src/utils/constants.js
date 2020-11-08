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
export const formDeleteConfirmSelector = '.popup_form_confirm'; 
export const nameSelector = '.profile__name';
export const jobSelector = '.profile__job';
export const avatarSelector = '.profile__image';
export const editButton = document.querySelector('.profile__button-edit');
export const addCardButton = document.querySelector('.profile__button-add');
export const buttonLikeClass = 'element__button-like_status_liked';
export const token = '8a14ceb3-7392-4a44-a6bb-8080b9aa5657';
export const cohort = 'cohort-17';

const popupProfile = document.querySelector(formProfileSelector);
export const nameInput = popupProfile.querySelector('.popup__input_field_name');
export const jobInput = popupProfile.querySelector('.popup__input_field_job');
