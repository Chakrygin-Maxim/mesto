class FormValidator {

  constructor(validationElements, validationForm){
    this._validationForm = validationForm;
    this._validationElements = validationElements;
  };

  _resetErrors(formElement, inputSelector, submitButtonSelector, inactiveButtonClass, inputErrorClass, errorClass) {
    const inputList = Array.from(formElement.querySelectorAll(inputSelector));
    const buttonElement = formElement.querySelector(submitButtonSelector);

    this._toggleButtonState(inputList, buttonElement, inactiveButtonClass);

    inputList.forEach(inputElement => {
      this._hideInputError(formElement, inputElement, inputErrorClass, errorClass);
    });
  }

  // Проверяем что хотябы одно воле не валидно
  _hasInvalidInput(inputList) {
    return inputList.some(inputElement => {
      return !inputElement.validity.valid
    });
  }

  // Переключаем доступность кнопки submit
  _toggleButtonState(inputList, buttonElement, inactiveButtonClass) {
    if (this._hasInvalidInput(inputList)) {
      buttonElement.classList.add(inactiveButtonClass);
    } else {
      buttonElement.classList.remove(inactiveButtonClass);
    }
  }

  // Отображаем поля с ошибками
  _showInputError(formElement, inputElement, errorMessage, inputErrorClass, errorClass) {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.add(inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(errorClass);
  };

  // Скрываем поля с ошибками
  _hideInputError(formElement, inputElement, inputErrorClass, errorClass) {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.remove(inputErrorClass);
    errorElement.classList.remove(errorClass);
    errorElement.textContent = '';
  };

  // Проверям форму на валидность полей
  _checkInputValidity(formElement, inputElement, inputErrorClass, errorClass) {
    if (!inputElement.validity.valid) {
      this._showInputError(formElement, inputElement, inputElement.validationMessage, inputErrorClass, errorClass);
    } else {
      this._hideInputError(formElement, inputElement, inputErrorClass, errorClass);
    }
  };

  // Установка слушателей у полей ввода
  _setEventListeners(formElement, validationElements) {
    const inputList = Array.from(formElement.querySelectorAll(validationElements.inputSelector));
    const buttonElement = formElement.querySelector(validationElements.submitButtonSelector);

    this._toggleButtonState(inputList, buttonElement, validationElements.inactiveButtonClass);

    inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._checkInputValidity(formElement, inputElement, validationElements.inputErrorClass, validationElements.errorClass);
        this._toggleButtonState(inputList, buttonElement, validationElements.inactiveButtonClass);
      });
    });
  };

  // Включаем валидацию формы
  enableValidation() {
    const {inputSelector, submitButtonSelector,inactiveButtonClass, inputErrorClass, errorClass} = this._validationElements;
    this._resetErrors(this._validationForm, inputSelector, submitButtonSelector, inactiveButtonClass, inputErrorClass, errorClass);
    this._setEventListeners(this._validationForm, this._validationElements);
  }
};

export default FormValidator;