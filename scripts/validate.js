const validationItems = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
};

// Убираем ошибки со всех полей ввода на форме
function removeErrors(formElement) {
  const inputList = Array.from(formElement.querySelectorAll(validationItems.inputSelector));
  inputList.forEach(inputElement => {
    hideInputError(formElement, inputElement, validationItems.inputErrorClass, validationItems.errorClass);
  });
};

// Проверяем что хотябы одно воле не валидно
function hasInvalidInput(inputList) {
  return inputList.some(inputElement => {
    return !inputElement.validity.valid
  });
};

// Переключаем доступность кнопки submit
function toggleButtonState(inputList, buttonElement, inactiveButtonClass) {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add(inactiveButtonClass);
  } else {
    buttonElement.classList.remove(inactiveButtonClass);
  };
};

// Отображаем поля с ошибками
const showInputError = function (formElement, inputElement, errorMessage, inputErrorClass, errorClass) {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.add(inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(errorClass);
};

// Скрываем поля с ошибками
const hideInputError = function (formElement, inputElement, inputErrorClass, errorClass) {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.remove(inputErrorClass);
  errorElement.classList.remove(errorClass);
  errorElement.textContent = '';
};

// Проверям форму на валидность полей
const checkInputValidity = function (formElement, inputElement, inputErrorClass, errorClass) {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage, inputErrorClass, errorClass);
  } else {
    hideInputError(formElement, inputElement, inputErrorClass, errorClass);
  };
};

// Установка слушателей у полей ввода
const setEventListeners = function (formElement, validationElements) {
  const inputList = Array.from(formElement.querySelectorAll(validationElements.inputSelector));
  const buttonElement = formElement.querySelector(validationElements.submitButtonSelector);

  toggleButtonState(inputList, buttonElement, validationElements.inactiveButtonClass);

  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
      checkInputValidity(formElement, inputElement, validationElements.inputErrorClass, validationElements.errorClass);
      toggleButtonState(inputList, buttonElement, validationElements.inactiveButtonClass);
    });
  });
};

// Включаем валидацию формы
function enableValidation(validationElements) {

  const formList = Array.from(document.querySelectorAll(validationElements.formSelector));
  formList.forEach(formElement => {
    setEventListeners(formElement, validationElements);
  })
};

// Первоначальная установка валидации форм
enableValidation(validationItems);