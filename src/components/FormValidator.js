class FormValidator {
  constructor(
    { inputSelector, submitButtonSelector, inactiveButtonClass, inputErrorClass, errorClass },
    validationForm,
  ) {
    this._inputSelector = inputSelector;
    this._submitButtonSelector = submitButtonSelector;
    this._inactiveButtonClass = inactiveButtonClass;
    this._inputErrorClass = inputErrorClass;
    this._errorClass = errorClass;
    this._validationForm = validationForm;
    this._buttonElement = this._validationForm.querySelector(this._submitButtonSelector);
  }

  // Проверяем что хотябы одно воле не валидно
  _hasInvalidInput(inputList) {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }

  // Включает кнопку submit
  _enableSubmitButton() {
    this._buttonElement.classList.remove(this._inactiveButtonClass);
  }

  // Отклюает кнопку submit
  _disableSubmitButton() {
    this._buttonElement.classList.add(this._inactiveButtonClass);
  }

  // Переключаем доступность кнопки submit
  _toggleButtonState(inputList) {
    if (this._hasInvalidInput(inputList)) {
      this._disableSubmitButton();
    } else {
      this._enableSubmitButton();
    }
  }

  // Отображаем поля с ошибками
  _showInputError(inputElement, errorMessage) {
    const errorElement = this._validationForm.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.add(this._inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._errorClass);
  }

  // Скрываем поля с ошибками
  _hideInputError(inputElement) {
    const errorElement = this._validationForm.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.remove(this._inputErrorClass);
    errorElement.classList.remove(this._errorClass);
    errorElement.textContent = '';
  }

  // Проверям форму на валидность полей
  _checkInputValidity(inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(inputElement);
    }
  }

  // Установка слушателей у полей ввода
  _setEventListeners() {
    const inputList = Array.from(this._validationForm.querySelectorAll(this._inputSelector));

    this._toggleButtonState(inputList);

    inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState(inputList);
      });
    });

    // После сабмита откючаем кнопку. Это нужно после добавление новой каточки.
    this._validationForm.addEventListener('submit', () => {
      this._disableSubmitButton();
    });
  }

  // Включаем валидацию формы
  enableValidation() {
    this._setEventListeners();
  }
}

export default FormValidator;
