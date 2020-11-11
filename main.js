/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/Api.js":
/*!*******************************!*\
  !*** ./src/components/Api.js ***!
  \*******************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Api = /*#__PURE__*/function () {
  function Api(token, cohort) {
    _classCallCheck(this, Api);

    this._token = token;
    this._cohort = cohort;
    this._url = "https://mesto.nomoreparties.co/v1/";
  }

  _createClass(Api, [{
    key: "_handleResponse",
    value: function _handleResponse(res) {
      if (!res.ok) {
        return Promise.reject("\u041E\u0448\u0438\u0431\u043A\u0430: ".concat(res.status));
      }

      return res.json();
    }
  }, {
    key: "getUserInfo",
    value: function getUserInfo() {
      return fetch("".concat(this._url).concat(this._cohort, "/users/me"), {
        headers: {
          authorization: this._token,
          "content-type": "application/json"
        }
      }).then(this._handleResponse);
    }
  }, {
    key: "updateUserInfo",
    value: function updateUserInfo(name, about) {
      return fetch("".concat(this._url).concat(this._cohort, "/users/me"), {
        method: "PATCH",
        headers: {
          authorization: this._token,
          "content-type": "application/json"
        },
        body: JSON.stringify({
          name: name,
          about: about
        })
      }).then(this._handleResponse);
    }
  }, {
    key: "getInitialCards",
    value: function getInitialCards() {
      return fetch("".concat(this._url).concat(this._cohort, "/cards"), {
        headers: {
          authorization: this._token,
          "content-type": "application/json"
        }
      }).then(this._handleResponse);
    }
  }, {
    key: "addCard",
    value: function addCard(name, link) {
      return fetch("".concat(this._url).concat(this._cohort, "/cards"), {
        method: "POST",
        headers: {
          authorization: this._token,
          "content-type": "application/json"
        },
        body: JSON.stringify({
          name: name,
          link: link
        })
      }).then(this._handleResponse);
    }
  }, {
    key: "deleteCard",
    value: function deleteCard(cardId) {
      return fetch("".concat(this._url).concat(this._cohort, "/cards/").concat(cardId), {
        method: "DELETE",
        headers: {
          authorization: this._token,
          "content-type": "application/json"
        }
      }).then(this._handleResponse);
    }
  }, {
    key: "setLike",
    value: function setLike(cardId) {
      return fetch("".concat(this._url).concat(this._cohort, "/cards/likes/").concat(cardId), {
        method: "PUT",
        headers: {
          authorization: this._token,
          "content-type": "application/json"
        }
      }).then(this._handleResponse);
    }
  }, {
    key: "removeLike",
    value: function removeLike(cardId) {
      return fetch("".concat(this._url).concat(this._cohort, "/cards/likes/").concat(cardId), {
        method: "DELETE",
        headers: {
          authorization: this._token,
          "content-type": "application/json"
        }
      }).then(this._handleResponse);
    }
  }, {
    key: "updateAvatar",
    value: function updateAvatar(avatar) {
      return fetch("".concat(this._url).concat(this._cohort, "/users/me/avatar"), {
        method: "PATCH",
        headers: {
          authorization: this._token,
          "content-type": "application/json"
        },
        body: JSON.stringify({
          avatar: avatar
        })
      }).then(this._handleResponse);
    }
  }]);

  return Api;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Api);

/***/ }),

/***/ "./src/components/Card.js":
/*!********************************!*\
  !*** ./src/components/Card.js ***!
  \********************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Card = /*#__PURE__*/function () {
  function Card(item, userId, templateSelector, openPopupPhotoHandler, openPopupDeleteConfirmHandler, handleButtonLikeClick) {
    _classCallCheck(this, Card);

    this._name = item.name;
    this._link = item.link;
    this._likes = item.likes;
    this._cardId = item.id;
    this._ownerId = item.ownerId;
    this._userId = userId;
    this._templateSelector = templateSelector;
    this._openPopupPhotoHandler = openPopupPhotoHandler;
    this._openPopupDeleteConfirmHandler = openPopupDeleteConfirmHandler;
    this._handleButtonLikeClick = handleButtonLikeClick;
  }

  _createClass(Card, [{
    key: "_getTemplate",
    value: function _getTemplate() {
      return document.querySelector(this._templateSelector).content.cloneNode(true);
    }
  }, {
    key: "_setLikesCount",
    value: function _setLikesCount(likes) {
      this._likes = likes;
      this._likesCount.textContent = this._likes.length;
    }
  }, {
    key: "_isLiked",
    value: function _isLiked() {
      var _this = this;

      return this._likes.find(function (like) {
        return like._id === _this._userId;
      });
    }
  }, {
    key: "_setLikeButton",
    value: function _setLikeButton() {
      if (this._isLiked()) {
        this._likeButton.classList.add("element__button-like_status_liked");
      } else {
        this._likeButton.classList.remove("element__button-like_status_liked");
      }
    }
  }, {
    key: "_handleButtonLike",
    value: function _handleButtonLike(evt) {
      var _this2 = this;

      this._handleButtonLikeClick(evt, this._cardId).then(function (data) {
        _this2._setLikesCount(data.likes);

        _this2._setLikeButton();
      });
    }
  }, {
    key: "_setEventListeners",
    value: function _setEventListeners() {
      var _this3 = this;

      this._element.querySelector(".element__photo").addEventListener("click", function (evt) {
        _this3._openPopupPhotoHandler(evt.target);
      });

      this._element.querySelector(".element__button-like").addEventListener("click", function (evt) {
        _this3._handleButtonLike(evt);
      });

      this._element.querySelector(".element__button-trash").addEventListener("click", function (evt) {
        _this3._openPopupDeleteConfirmHandler(_this3._cardId, evt.target.parentElement);
      });
    }
  }, {
    key: "_setElements",
    value: function _setElements() {
      this._likesCount = this._element.querySelector(".element__likes");
      this._likeButton = this._element.querySelector(".element__button-like");
      this._elementName = this._element.querySelector(".element__info-name");
      this._trashButton = this._element.querySelector(".element__button-trash");
    }
  }, {
    key: "generateCard",
    value: function generateCard() {
      this._element = this._getTemplate();

      this._setEventListeners();

      this._setElements();

      var cardPhoto = this._element.querySelector(".element__photo");

      cardPhoto.src = this._link;
      cardPhoto.alt = this._name;
      this._elementName.textContent = this._name;
      this._likesCount.textContent = this._likes.length;

      this._setLikeButton();

      if (this._userId === this._ownerId) {
        this._trashButton.classList.add("button-trash_visible");
      }

      return this._element;
    }
  }]);

  return Card;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Card);

/***/ }),

/***/ "./src/components/FormValidator.js":
/*!*****************************************!*\
  !*** ./src/components/FormValidator.js ***!
  \*****************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var FormValidator = /*#__PURE__*/function () {
  function FormValidator(_ref, validationForm) {
    var inputSelector = _ref.inputSelector,
        submitButtonSelector = _ref.submitButtonSelector,
        inactiveButtonClass = _ref.inactiveButtonClass,
        inputErrorClass = _ref.inputErrorClass,
        errorClass = _ref.errorClass;

    _classCallCheck(this, FormValidator);

    this._inputSelector = inputSelector;
    this._submitButtonSelector = submitButtonSelector;
    this._inactiveButtonClass = inactiveButtonClass;
    this._inputErrorClass = inputErrorClass;
    this._errorClass = errorClass;
    this._validationForm = validationForm;
    this._buttonElement = this._validationForm.querySelector(this._submitButtonSelector);
  } // Проверяем что хотябы одно воле не валидно


  _createClass(FormValidator, [{
    key: "_hasInvalidInput",
    value: function _hasInvalidInput(inputList) {
      return inputList.some(function (inputElement) {
        return !inputElement.validity.valid;
      });
    } // Включает кнопку submit

  }, {
    key: "_enableSubmitButton",
    value: function _enableSubmitButton() {
      this._buttonElement.classList.remove(this._inactiveButtonClass);
    } // Отклюает кнопку submit

  }, {
    key: "_disableSubmitButton",
    value: function _disableSubmitButton() {
      this._buttonElement.classList.add(this._inactiveButtonClass);
    } // Переключаем доступность кнопки submit

  }, {
    key: "_toggleButtonState",
    value: function _toggleButtonState(inputList) {
      if (this._hasInvalidInput(inputList)) {
        this._disableSubmitButton();
      } else {
        this._enableSubmitButton();
      }
    } // Отображаем поля с ошибками

  }, {
    key: "_showInputError",
    value: function _showInputError(inputElement, errorMessage) {
      var errorElement = this._validationForm.querySelector("#".concat(inputElement.id, "-error"));

      inputElement.classList.add(this._inputErrorClass);
      errorElement.textContent = errorMessage;
      errorElement.classList.add(this._errorClass);
    } // Скрываем поля с ошибками

  }, {
    key: "_hideInputError",
    value: function _hideInputError(inputElement) {
      var errorElement = this._validationForm.querySelector("#".concat(inputElement.id, "-error"));

      inputElement.classList.remove(this._inputErrorClass);
      errorElement.classList.remove(this._errorClass);
      errorElement.textContent = "";
    } // Проверям форму на валидность полей

  }, {
    key: "_checkInputValidity",
    value: function _checkInputValidity(inputElement) {
      if (!inputElement.validity.valid) {
        this._showInputError(inputElement, inputElement.validationMessage);
      } else {
        this._hideInputError(inputElement);
      }
    } // Установка слушателей у полей ввода

  }, {
    key: "_setEventListeners",
    value: function _setEventListeners() {
      var _this = this;

      var inputList = Array.from(this._validationForm.querySelectorAll(this._inputSelector));

      this._toggleButtonState(inputList);

      inputList.forEach(function (inputElement) {
        inputElement.addEventListener("input", function () {
          _this._checkInputValidity(inputElement);

          _this._toggleButtonState(inputList);
        });
      }); // После сабмита откючаем кнопку. Это нужно после добавление новой каточки.

      this._validationForm.addEventListener("submit", function () {
        _this._disableSubmitButton();
      });
    } // Включаем валидацию формы

  }, {
    key: "enableValidation",
    value: function enableValidation() {
      this._setEventListeners();
    }
  }]);

  return FormValidator;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FormValidator);

/***/ }),

/***/ "./src/components/Popup.js":
/*!*********************************!*\
  !*** ./src/components/Popup.js ***!
  \*********************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Popup = /*#__PURE__*/function () {
  function Popup(popupSelector) {
    _classCallCheck(this, Popup);

    this._popup = document.querySelector(popupSelector);
    this._handleButtonClose = this._handleButtonClose.bind(this);
    this._handleEscClose = this._handleEscClose.bind(this);
    this._handleCloseByClickOnOverlay = this._handleCloseByClickOnOverlay.bind(this);
  }

  _createClass(Popup, [{
    key: "_handleEscClose",
    value: function _handleEscClose(evt) {
      if (evt.key === "Escape") {
        this.close();
      }
    }
  }, {
    key: "_handleButtonClose",
    value: function _handleButtonClose(evt) {
      if (evt.target.classList.contains("popup__button-close")) {
        this.close();
      }
    }
  }, {
    key: "_handleCloseByClickOnOverlay",
    value: function _handleCloseByClickOnOverlay(evt) {
      if (evt.target === evt.currentTarget) {
        this.close();
      }
    }
  }, {
    key: "_addEventListeners",
    value: function _addEventListeners() {
      this._popup.addEventListener("click", this._handleButtonClose);

      this._popup.addEventListener("mousedown", this._handleCloseByClickOnOverlay);
    }
  }, {
    key: "open",
    value: function open() {
      document.addEventListener("keydown", this._handleEscClose);

      this._popup.classList.add("popup_opened");
    }
  }, {
    key: "close",
    value: function close() {
      document.removeEventListener("keydown", this._handleEscClose);

      this._popup.classList.remove("popup_opened");
    }
  }, {
    key: "setEventListeners",
    value: function setEventListeners() {
      this._addEventListeners();
    }
  }]);

  return Popup;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Popup);

/***/ }),

/***/ "./src/components/PopupWithForm.js":
/*!*****************************************!*\
  !*** ./src/components/PopupWithForm.js ***!
  \*****************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _Popup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Popup.js */ "./src/components/Popup.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var PopupWithForm = /*#__PURE__*/function (_Popup) {
  _inherits(PopupWithForm, _Popup);

  var _super = _createSuper(PopupWithForm);

  function PopupWithForm(formSubmitHandler, popupSelector) {
    var _this;

    _classCallCheck(this, PopupWithForm);

    _this = _super.call(this, popupSelector);
    _this._formSubmitHandler = formSubmitHandler;
    _this._inputList = _this._popup.querySelectorAll(".popup__input");
    _this._popupForm = _this._popup.querySelector(".popup__form");
    _this._handleSubmit = _this._handleSubmit.bind(_assertThisInitialized(_this));
    _this._buttonSubmit = _this._popup.querySelector(".popup__button");
    return _this;
  }

  _createClass(PopupWithForm, [{
    key: "_getInputValues",
    value: function _getInputValues() {
      var _this2 = this;

      this._inputValues = {};

      this._inputList.forEach(function (item) {
        _this2._inputValues[item.name] = item.value;
      });

      return this._inputValues;
    }
  }, {
    key: "_handleSubmit",
    value: function _handleSubmit(evt) {
      var _this3 = this;

      evt.preventDefault(); // Сохраняем предыдущее название кнопки сабмит

      var buttonSubmitName = this._buttonSubmit.textContent;
      new Promise(function (resolve) {
        _this3._buttonSubmit.textContent = "Сохранение...";

        var inputValues = _this3._getInputValues();

        resolve(inputValues);
      }).then(function (inputValues) {
        // Ставим в очередь промис Api и ждем его выполнения
        // для возвращения кнопки сабмит к первоначалному виду
        if (_this3._cardId) {
          return _this3._formSubmitHandler(_this3._cardId, _this3._parentElement);
        } else {
          return _this3._formSubmitHandler(inputValues);
        }
      })["catch"](function (err) {
        console.log("Error ".concat(err));
      })["finally"](function (data) {
        _this3.close();

        _this3._buttonSubmit.textContent = buttonSubmitName;
      });
    }
  }, {
    key: "setEventListeners",
    value: function setEventListeners() {
      _get(_getPrototypeOf(PopupWithForm.prototype), "setEventListeners", this).call(this);

      this._popup.addEventListener("submit", this._handleSubmit);
    }
  }, {
    key: "open",
    value: function open(cardId, parentElement) {
      _get(_getPrototypeOf(PopupWithForm.prototype), "open", this).call(this);

      this._cardId = cardId;
      this._parentElement = parentElement;
    }
  }, {
    key: "close",
    value: function close() {
      _get(_getPrototypeOf(PopupWithForm.prototype), "close", this).call(this);

      this._popupForm.reset();
    }
  }]);

  return PopupWithForm;
}(_Popup_js__WEBPACK_IMPORTED_MODULE_0__.default);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PopupWithForm);

/***/ }),

/***/ "./src/components/PopupWithImage.js":
/*!******************************************!*\
  !*** ./src/components/PopupWithImage.js ***!
  \******************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _Popup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Popup.js */ "./src/components/Popup.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var PopupWithImage = /*#__PURE__*/function (_Popup) {
  _inherits(PopupWithImage, _Popup);

  var _super = _createSuper(PopupWithImage);

  function PopupWithImage(popupSelector) {
    var _this;

    _classCallCheck(this, PopupWithImage);

    _this = _super.call(this, popupSelector);
    _this._elementImage = _this._popup.querySelector(".popup__image");
    _this._photoCaption = _this._popup.querySelector(".popup__caption");
    return _this;
  }

  _createClass(PopupWithImage, [{
    key: "open",
    value: function open(_ref) {
      var src = _ref.src,
          alt = _ref.alt;
      this._elementImage.src = src;
      this._elementImage.alt = alt;
      this._photoCaption.textContent = alt;

      _get(_getPrototypeOf(PopupWithImage.prototype), "open", this).call(this);
    }
  }]);

  return PopupWithImage;
}(_Popup_js__WEBPACK_IMPORTED_MODULE_0__.default);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PopupWithImage);

/***/ }),

/***/ "./src/components/Section.js":
/*!***********************************!*\
  !*** ./src/components/Section.js ***!
  \***********************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Section = /*#__PURE__*/function () {
  function Section(_ref, containerSelector) {
    var renderer = _ref.renderer;

    _classCallCheck(this, Section);

    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }

  _createClass(Section, [{
    key: "addItem",
    value: function addItem(element) {
      this._container.prepend(element);
    }
  }, {
    key: "renderItems",
    value: function renderItems(cards) {
      var _this = this;

      cards.forEach(function (item) {
        _this._renderer(item);
      });
    }
  }]);

  return Section;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Section);

/***/ }),

/***/ "./src/components/UserInfo.js":
/*!************************************!*\
  !*** ./src/components/UserInfo.js ***!
  \************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var UserInfo = /*#__PURE__*/function () {
  function UserInfo(_ref) {
    var nameSelector = _ref.nameSelector,
        jobSelector = _ref.jobSelector,
        avatarSelector = _ref.avatarSelector;

    _classCallCheck(this, UserInfo);

    this._userNameSelector = nameSelector;
    this._userJobSelector = jobSelector;
    this._userAvatarSelector = avatarSelector;
    this._userName = document.querySelector(this._userNameSelector);
    this._userJob = document.querySelector(this._userJobSelector);
    this._userAvatar = document.querySelector(this._userAvatarSelector);
  }

  _createClass(UserInfo, [{
    key: "getUserInfo",
    value: function getUserInfo() {
      return {
        name: this._userName.textContent,
        job: this._userJob.textContent,
        id: this._id
      };
    }
  }, {
    key: "setUserInfo",
    value: function setUserInfo(userName, userJob, id, userAvatar) {
      this._userName.textContent = userName;
      this._userJob.textContent = userJob;

      if (id) {
        this._id = id;
      }

      if (userAvatar) {
        this._userAvatar.src = userAvatar;
        this._userAvatar.alt = userName;
      }
    }
  }]);

  return UserInfo;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UserInfo);

/***/ }),

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Card_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Card.js */ "./src/components/Card.js");
/* harmony import */ var _components_FormValidator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/FormValidator.js */ "./src/components/FormValidator.js");
/* harmony import */ var _components_Section_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Section.js */ "./src/components/Section.js");
/* harmony import */ var _components_PopupWithImage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/PopupWithImage.js */ "./src/components/PopupWithImage.js");
/* harmony import */ var _components_PopupWithForm_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/PopupWithForm.js */ "./src/components/PopupWithForm.js");
/* harmony import */ var _components_UserInfo_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/UserInfo.js */ "./src/components/UserInfo.js");
/* harmony import */ var _components_Api_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Api.js */ "./src/components/Api.js");
/* harmony import */ var _utils_constants_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/constants.js */ "./src/utils/constants.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }









 // Инициализация API

var api = new _components_Api_js__WEBPACK_IMPORTED_MODULE_3__.default(_utils_constants_js__WEBPACK_IMPORTED_MODULE_2__.token, _utils_constants_js__WEBPACK_IMPORTED_MODULE_2__.cohort); // Переменная для хранения ID usera для отображения кнопки удаления карточки

var userId = ""; // Колбэк установки нового имени и должности профиля

var handlePopupProfileSubmit = function handlePopupProfileSubmit(inputValues) {
  return api.updateUserInfo(inputValues.name, inputValues.job).then(function (data) {
    userInfo.setUserInfo(data.name, data.about);
  });
}; // Колбэк сохранение нового аватара пользователя


var handlePopupAvatarEdit = function handlePopupAvatarEdit(inputValues) {
  return api.updateAvatar(inputValues.avatarLink).then(function (data) {
    userInfo.setUserInfo(data.name, data.about, data._id, data.avatar);
  });
}; // Колбэк удаления карточки


var handleCardDelete = function handleCardDelete(cardId, parentElement) {
  return api.deleteCard(cardId).then(function (data) {
    parentElement.remove();
    return data;
  });
}; // Колбэк открытия карточки места по клику на нее


var handleCardClick = function handleCardClick(elementPhoto) {
  popupWithImage.open(elementPhoto);
}; // Колбэк открытия формы подтверждения удаления собственной карточки


var handleCardClickTrash = function handleCardClickTrash(cardId, parentElement) {
  popupDeleteConfirm.open(cardId, parentElement);
}; // Колбэк нажатия на кнопку лайк


var handleButtonLikeClick = function handleButtonLikeClick(evt, cardId) {
  var eventTarget = evt.target;

  if (eventTarget.classList.contains(_utils_constants_js__WEBPACK_IMPORTED_MODULE_2__.buttonLikeClass)) {
    return api.removeLike(cardId);
  } else {
    return api.setLike(cardId);
  }
}; // Колбэк добавляет новую карточку на форму


var handlePopupMestoSubmit = function handlePopupMestoSubmit(inputValues) {
  return api.addCard(inputValues.cardName, inputValues.link).then(function (data) {
    var newCard = new _components_Card_js__WEBPACK_IMPORTED_MODULE_4__.default({
      name: data.name,
      link: data.link,
      likes: data.likes,
      id: data._id,
      ownerId: data.owner._id
    }, userId, _utils_constants_js__WEBPACK_IMPORTED_MODULE_2__.cardTemplate, handleCardClick, handleCardClickTrash, handleButtonLikeClick);
    var cardElement = newCard.generateCard();
    cardList.addItem(cardElement);
  });
}; // Карточка профиля


var userInfo = new _components_UserInfo_js__WEBPACK_IMPORTED_MODULE_5__.default({
  nameSelector: _utils_constants_js__WEBPACK_IMPORTED_MODULE_2__.nameSelector,
  jobSelector: _utils_constants_js__WEBPACK_IMPORTED_MODULE_2__.jobSelector,
  avatarSelector: _utils_constants_js__WEBPACK_IMPORTED_MODULE_2__.avatarSelector
}); // Первоначальное заполнение профиля

var setUserInfo = function setUserInfo(userData) {
  var name = userData.name,
      about = userData.about,
      avatar = userData.avatar,
      _id = userData._id;
  userInfo.setUserInfo(name, about, _id, avatar);
  userId = _id;
}; // Первоначальное заполнение карточек


var setInitialCads = function setInitialCads(initialCards) {
  var items = initialCards.map(function (card) {
    return {
      name: card.name,
      link: card.link,
      likes: card.likes,
      id: card._id,
      ownerId: card.owner._id
    };
  });
  cardList.renderItems(items);
}; // Синхронное получение данных пользователя и первоначальных карточек


Promise.all([api.getUserInfo(), api.getInitialCards()]).then(function (_ref) {
  var _ref2 = _slicedToArray(_ref, 2),
      userData = _ref2[0],
      initialCards = _ref2[1];

  setUserInfo(userData);
  setInitialCads(initialCards);
})["catch"](function (err) {
  console.log("\u041E\u0448\u0438\u0431\u043A\u0430: ".concat(err));
}); // Попап с картинкой

var popupWithImage = new _components_PopupWithImage_js__WEBPACK_IMPORTED_MODULE_0__.default(_utils_constants_js__WEBPACK_IMPORTED_MODULE_2__.formPhotoSelector);
popupWithImage.setEventListeners(); // Попап изменение профиля

var popupEditProfile = new _components_PopupWithForm_js__WEBPACK_IMPORTED_MODULE_1__.default(handlePopupProfileSubmit, _utils_constants_js__WEBPACK_IMPORTED_MODULE_2__.formProfileSelector);
popupEditProfile.setEventListeners(); // Попап изменение профиля

var popupEditAvatar = new _components_PopupWithForm_js__WEBPACK_IMPORTED_MODULE_1__.default(handlePopupAvatarEdit, _utils_constants_js__WEBPACK_IMPORTED_MODULE_2__.formProfileAvatar);
popupEditAvatar.setEventListeners(); // Попап подверждение удаления

var popupDeleteConfirm = new _components_PopupWithForm_js__WEBPACK_IMPORTED_MODULE_1__.default(handleCardDelete, _utils_constants_js__WEBPACK_IMPORTED_MODULE_2__.formDeleteConfirmSelector);
popupDeleteConfirm.setEventListeners(); // Попап добавление карточки

var popupNewCard = new _components_PopupWithForm_js__WEBPACK_IMPORTED_MODULE_1__.default(handlePopupMestoSubmit, _utils_constants_js__WEBPACK_IMPORTED_MODULE_2__.formMestoSelector);
popupNewCard.setEventListeners(); // Создаем секцию с карточками

var cardList = new _components_Section_js__WEBPACK_IMPORTED_MODULE_6__.default({
  renderer: function renderer(cardItem) {
    var newCard = new _components_Card_js__WEBPACK_IMPORTED_MODULE_4__.default(cardItem, userId, _utils_constants_js__WEBPACK_IMPORTED_MODULE_2__.cardTemplate, handleCardClick, handleCardClickTrash, handleButtonLikeClick);
    var cardElement = newCard.generateCard();
    var cardElements = document.querySelector(_utils_constants_js__WEBPACK_IMPORTED_MODULE_2__.cardListSelector);
    cardElements.append(cardElement);
  }
}, _utils_constants_js__WEBPACK_IMPORTED_MODULE_2__.cardListSelector); // Открывает форму изменения данных профиля

_utils_constants_js__WEBPACK_IMPORTED_MODULE_2__.editButton.addEventListener("click", function () {
  var profileData = userInfo.getUserInfo();
  _utils_constants_js__WEBPACK_IMPORTED_MODULE_2__.nameInput.value = profileData.name;
  _utils_constants_js__WEBPACK_IMPORTED_MODULE_2__.jobInput.value = profileData.job;
  popupEditProfile.open();
}); // Открывает форму добавления новой карточки

_utils_constants_js__WEBPACK_IMPORTED_MODULE_2__.addCardButton.addEventListener("click", function () {
  popupNewCard.open();
}); // Открывает форму изменения аватара пользователя

_utils_constants_js__WEBPACK_IMPORTED_MODULE_2__.editAvatarButton.addEventListener("click", function () {
  popupEditAvatar.open();
}); // Включает валидацию формы профиля

var profileValidation = new _components_FormValidator_js__WEBPACK_IMPORTED_MODULE_7__.default(_utils_constants_js__WEBPACK_IMPORTED_MODULE_2__.validationItems, document.forms.formProfile);
profileValidation.enableValidation(); // Включает валидацию формы ввода новой карточки

var newCardValidation = new _components_FormValidator_js__WEBPACK_IMPORTED_MODULE_7__.default(_utils_constants_js__WEBPACK_IMPORTED_MODULE_2__.validationItems, document.forms.formNewCard);
newCardValidation.enableValidation(); // Включает валидацию формы ввода новой карточки

var avatarValidation = new _components_FormValidator_js__WEBPACK_IMPORTED_MODULE_7__.default(_utils_constants_js__WEBPACK_IMPORTED_MODULE_2__.validationItems, document.forms.formAvatar);
avatarValidation.enableValidation();

/***/ }),

/***/ "./src/utils/constants.js":
/*!********************************!*\
  !*** ./src/utils/constants.js ***!
  \********************************/
/*! namespace exports */
/*! export addCardButton [provided] [no usage info] [missing usage info prevents renaming] */
/*! export avatarSelector [provided] [no usage info] [missing usage info prevents renaming] */
/*! export buttonLikeClass [provided] [no usage info] [missing usage info prevents renaming] */
/*! export cardListSelector [provided] [no usage info] [missing usage info prevents renaming] */
/*! export cardTemplate [provided] [no usage info] [missing usage info prevents renaming] */
/*! export cohort [provided] [no usage info] [missing usage info prevents renaming] */
/*! export editAvatarButton [provided] [no usage info] [missing usage info prevents renaming] */
/*! export editButton [provided] [no usage info] [missing usage info prevents renaming] */
/*! export formDeleteConfirmSelector [provided] [no usage info] [missing usage info prevents renaming] */
/*! export formMestoSelector [provided] [no usage info] [missing usage info prevents renaming] */
/*! export formPhotoSelector [provided] [no usage info] [missing usage info prevents renaming] */
/*! export formProfileAvatar [provided] [no usage info] [missing usage info prevents renaming] */
/*! export formProfileSelector [provided] [no usage info] [missing usage info prevents renaming] */
/*! export jobInput [provided] [no usage info] [missing usage info prevents renaming] */
/*! export jobSelector [provided] [no usage info] [missing usage info prevents renaming] */
/*! export nameInput [provided] [no usage info] [missing usage info prevents renaming] */
/*! export nameSelector [provided] [no usage info] [missing usage info prevents renaming] */
/*! export token [provided] [no usage info] [missing usage info prevents renaming] */
/*! export validationItems [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "validationItems": () => /* binding */ validationItems,
/* harmony export */   "cardTemplate": () => /* binding */ cardTemplate,
/* harmony export */   "cardListSelector": () => /* binding */ cardListSelector,
/* harmony export */   "formProfileSelector": () => /* binding */ formProfileSelector,
/* harmony export */   "formProfileAvatar": () => /* binding */ formProfileAvatar,
/* harmony export */   "formMestoSelector": () => /* binding */ formMestoSelector,
/* harmony export */   "formPhotoSelector": () => /* binding */ formPhotoSelector,
/* harmony export */   "formDeleteConfirmSelector": () => /* binding */ formDeleteConfirmSelector,
/* harmony export */   "nameSelector": () => /* binding */ nameSelector,
/* harmony export */   "jobSelector": () => /* binding */ jobSelector,
/* harmony export */   "avatarSelector": () => /* binding */ avatarSelector,
/* harmony export */   "editButton": () => /* binding */ editButton,
/* harmony export */   "addCardButton": () => /* binding */ addCardButton,
/* harmony export */   "editAvatarButton": () => /* binding */ editAvatarButton,
/* harmony export */   "buttonLikeClass": () => /* binding */ buttonLikeClass,
/* harmony export */   "token": () => /* binding */ token,
/* harmony export */   "cohort": () => /* binding */ cohort,
/* harmony export */   "nameInput": () => /* binding */ nameInput,
/* harmony export */   "jobInput": () => /* binding */ jobInput
/* harmony export */ });
var validationItems = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
};
var cardTemplate = '#element-template';
var cardListSelector = '.elements';
var formProfileSelector = '.popup_form_profile';
var formProfileAvatar = '.popup_form_avatar';
var formMestoSelector = '.popup_form_mesto';
var formPhotoSelector = '.popup_form_photo';
var formDeleteConfirmSelector = '.popup_form_confirm';
var nameSelector = '.profile__name';
var jobSelector = '.profile__job';
var avatarSelector = '.profile__image';
var editButton = document.querySelector('.profile__button-edit');
var addCardButton = document.querySelector('.profile__button-add');
var editAvatarButton = document.querySelector('.profile__image-container');
var buttonLikeClass = 'element__button-like_status_liked';
var token = '8a14ceb3-7392-4a44-a6bb-8080b9aa5657';
var cohort = 'cohort-17';
var popupProfile = document.querySelector(formProfileSelector);
var nameInput = popupProfile.querySelector('.popup__input_field_name');
var jobInput = popupProfile.querySelector('.popup__input_field_job');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/pages/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tZXN0by8uL3NyYy9jb21wb25lbnRzL0FwaS5qcyIsIndlYnBhY2s6Ly9tZXN0by8uL3NyYy9jb21wb25lbnRzL0NhcmQuanMiLCJ3ZWJwYWNrOi8vbWVzdG8vLi9zcmMvY29tcG9uZW50cy9Gb3JtVmFsaWRhdG9yLmpzIiwid2VicGFjazovL21lc3RvLy4vc3JjL2NvbXBvbmVudHMvUG9wdXAuanMiLCJ3ZWJwYWNrOi8vbWVzdG8vLi9zcmMvY29tcG9uZW50cy9Qb3B1cFdpdGhGb3JtLmpzIiwid2VicGFjazovL21lc3RvLy4vc3JjL2NvbXBvbmVudHMvUG9wdXBXaXRoSW1hZ2UuanMiLCJ3ZWJwYWNrOi8vbWVzdG8vLi9zcmMvY29tcG9uZW50cy9TZWN0aW9uLmpzIiwid2VicGFjazovL21lc3RvLy4vc3JjL2NvbXBvbmVudHMvVXNlckluZm8uanMiLCJ3ZWJwYWNrOi8vbWVzdG8vLi9zcmMvcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbWVzdG8vLi9zcmMvdXRpbHMvY29uc3RhbnRzLmpzIiwid2VicGFjazovL21lc3RvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL21lc3RvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9tZXN0by93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL21lc3RvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vbWVzdG8vd2VicGFjay9zdGFydHVwIl0sIm5hbWVzIjpbIkFwaSIsInRva2VuIiwiY29ob3J0IiwiX3Rva2VuIiwiX2NvaG9ydCIsIl91cmwiLCJyZXMiLCJvayIsIlByb21pc2UiLCJyZWplY3QiLCJzdGF0dXMiLCJqc29uIiwiZmV0Y2giLCJoZWFkZXJzIiwiYXV0aG9yaXphdGlvbiIsInRoZW4iLCJfaGFuZGxlUmVzcG9uc2UiLCJuYW1lIiwiYWJvdXQiLCJtZXRob2QiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImxpbmsiLCJjYXJkSWQiLCJhdmF0YXIiLCJDYXJkIiwiaXRlbSIsInVzZXJJZCIsInRlbXBsYXRlU2VsZWN0b3IiLCJvcGVuUG9wdXBQaG90b0hhbmRsZXIiLCJvcGVuUG9wdXBEZWxldGVDb25maXJtSGFuZGxlciIsImhhbmRsZUJ1dHRvbkxpa2VDbGljayIsIl9uYW1lIiwiX2xpbmsiLCJfbGlrZXMiLCJsaWtlcyIsIl9jYXJkSWQiLCJpZCIsIl9vd25lcklkIiwib3duZXJJZCIsIl91c2VySWQiLCJfdGVtcGxhdGVTZWxlY3RvciIsIl9vcGVuUG9wdXBQaG90b0hhbmRsZXIiLCJfb3BlblBvcHVwRGVsZXRlQ29uZmlybUhhbmRsZXIiLCJfaGFuZGxlQnV0dG9uTGlrZUNsaWNrIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiY29udGVudCIsImNsb25lTm9kZSIsIl9saWtlc0NvdW50IiwidGV4dENvbnRlbnQiLCJsZW5ndGgiLCJmaW5kIiwibGlrZSIsIl9pZCIsIl9pc0xpa2VkIiwiX2xpa2VCdXR0b24iLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJldnQiLCJkYXRhIiwiX3NldExpa2VzQ291bnQiLCJfc2V0TGlrZUJ1dHRvbiIsIl9lbGVtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsInRhcmdldCIsIl9oYW5kbGVCdXR0b25MaWtlIiwicGFyZW50RWxlbWVudCIsIl9lbGVtZW50TmFtZSIsIl90cmFzaEJ1dHRvbiIsIl9nZXRUZW1wbGF0ZSIsIl9zZXRFdmVudExpc3RlbmVycyIsIl9zZXRFbGVtZW50cyIsImNhcmRQaG90byIsInNyYyIsImFsdCIsIkZvcm1WYWxpZGF0b3IiLCJ2YWxpZGF0aW9uRm9ybSIsImlucHV0U2VsZWN0b3IiLCJzdWJtaXRCdXR0b25TZWxlY3RvciIsImluYWN0aXZlQnV0dG9uQ2xhc3MiLCJpbnB1dEVycm9yQ2xhc3MiLCJlcnJvckNsYXNzIiwiX2lucHV0U2VsZWN0b3IiLCJfc3VibWl0QnV0dG9uU2VsZWN0b3IiLCJfaW5hY3RpdmVCdXR0b25DbGFzcyIsIl9pbnB1dEVycm9yQ2xhc3MiLCJfZXJyb3JDbGFzcyIsIl92YWxpZGF0aW9uRm9ybSIsIl9idXR0b25FbGVtZW50IiwiaW5wdXRMaXN0Iiwic29tZSIsImlucHV0RWxlbWVudCIsInZhbGlkaXR5IiwidmFsaWQiLCJfaGFzSW52YWxpZElucHV0IiwiX2Rpc2FibGVTdWJtaXRCdXR0b24iLCJfZW5hYmxlU3VibWl0QnV0dG9uIiwiZXJyb3JNZXNzYWdlIiwiZXJyb3JFbGVtZW50IiwiX3Nob3dJbnB1dEVycm9yIiwidmFsaWRhdGlvbk1lc3NhZ2UiLCJfaGlkZUlucHV0RXJyb3IiLCJBcnJheSIsImZyb20iLCJxdWVyeVNlbGVjdG9yQWxsIiwiX3RvZ2dsZUJ1dHRvblN0YXRlIiwiZm9yRWFjaCIsIl9jaGVja0lucHV0VmFsaWRpdHkiLCJQb3B1cCIsInBvcHVwU2VsZWN0b3IiLCJfcG9wdXAiLCJfaGFuZGxlQnV0dG9uQ2xvc2UiLCJiaW5kIiwiX2hhbmRsZUVzY0Nsb3NlIiwiX2hhbmRsZUNsb3NlQnlDbGlja09uT3ZlcmxheSIsImtleSIsImNsb3NlIiwiY29udGFpbnMiLCJjdXJyZW50VGFyZ2V0IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIl9hZGRFdmVudExpc3RlbmVycyIsIlBvcHVwV2l0aEZvcm0iLCJmb3JtU3VibWl0SGFuZGxlciIsIl9mb3JtU3VibWl0SGFuZGxlciIsIl9pbnB1dExpc3QiLCJfcG9wdXBGb3JtIiwiX2hhbmRsZVN1Ym1pdCIsIl9idXR0b25TdWJtaXQiLCJfaW5wdXRWYWx1ZXMiLCJ2YWx1ZSIsInByZXZlbnREZWZhdWx0IiwiYnV0dG9uU3VibWl0TmFtZSIsInJlc29sdmUiLCJpbnB1dFZhbHVlcyIsIl9nZXRJbnB1dFZhbHVlcyIsIl9wYXJlbnRFbGVtZW50IiwiZXJyIiwiY29uc29sZSIsImxvZyIsInJlc2V0IiwiUG9wdXBXaXRoSW1hZ2UiLCJfZWxlbWVudEltYWdlIiwiX3Bob3RvQ2FwdGlvbiIsIlNlY3Rpb24iLCJjb250YWluZXJTZWxlY3RvciIsInJlbmRlcmVyIiwiX3JlbmRlcmVyIiwiX2NvbnRhaW5lciIsImVsZW1lbnQiLCJwcmVwZW5kIiwiY2FyZHMiLCJVc2VySW5mbyIsIm5hbWVTZWxlY3RvciIsImpvYlNlbGVjdG9yIiwiYXZhdGFyU2VsZWN0b3IiLCJfdXNlck5hbWVTZWxlY3RvciIsIl91c2VySm9iU2VsZWN0b3IiLCJfdXNlckF2YXRhclNlbGVjdG9yIiwiX3VzZXJOYW1lIiwiX3VzZXJKb2IiLCJfdXNlckF2YXRhciIsImpvYiIsInVzZXJOYW1lIiwidXNlckpvYiIsInVzZXJBdmF0YXIiLCJhcGkiLCJoYW5kbGVQb3B1cFByb2ZpbGVTdWJtaXQiLCJ1cGRhdGVVc2VySW5mbyIsInVzZXJJbmZvIiwic2V0VXNlckluZm8iLCJoYW5kbGVQb3B1cEF2YXRhckVkaXQiLCJ1cGRhdGVBdmF0YXIiLCJhdmF0YXJMaW5rIiwiaGFuZGxlQ2FyZERlbGV0ZSIsImRlbGV0ZUNhcmQiLCJoYW5kbGVDYXJkQ2xpY2siLCJlbGVtZW50UGhvdG8iLCJwb3B1cFdpdGhJbWFnZSIsIm9wZW4iLCJoYW5kbGVDYXJkQ2xpY2tUcmFzaCIsInBvcHVwRGVsZXRlQ29uZmlybSIsImV2ZW50VGFyZ2V0IiwiYnV0dG9uTGlrZUNsYXNzIiwicmVtb3ZlTGlrZSIsInNldExpa2UiLCJoYW5kbGVQb3B1cE1lc3RvU3VibWl0IiwiYWRkQ2FyZCIsImNhcmROYW1lIiwibmV3Q2FyZCIsIm93bmVyIiwiY2FyZFRlbXBsYXRlIiwiY2FyZEVsZW1lbnQiLCJnZW5lcmF0ZUNhcmQiLCJjYXJkTGlzdCIsImFkZEl0ZW0iLCJ1c2VyRGF0YSIsInNldEluaXRpYWxDYWRzIiwiaW5pdGlhbENhcmRzIiwiaXRlbXMiLCJtYXAiLCJjYXJkIiwicmVuZGVySXRlbXMiLCJhbGwiLCJnZXRVc2VySW5mbyIsImdldEluaXRpYWxDYXJkcyIsImZvcm1QaG90b1NlbGVjdG9yIiwic2V0RXZlbnRMaXN0ZW5lcnMiLCJwb3B1cEVkaXRQcm9maWxlIiwiZm9ybVByb2ZpbGVTZWxlY3RvciIsInBvcHVwRWRpdEF2YXRhciIsImZvcm1Qcm9maWxlQXZhdGFyIiwiZm9ybURlbGV0ZUNvbmZpcm1TZWxlY3RvciIsInBvcHVwTmV3Q2FyZCIsImZvcm1NZXN0b1NlbGVjdG9yIiwiY2FyZEl0ZW0iLCJjYXJkRWxlbWVudHMiLCJjYXJkTGlzdFNlbGVjdG9yIiwiYXBwZW5kIiwiZWRpdEJ1dHRvbiIsInByb2ZpbGVEYXRhIiwibmFtZUlucHV0Iiwiam9iSW5wdXQiLCJhZGRDYXJkQnV0dG9uIiwiZWRpdEF2YXRhckJ1dHRvbiIsInByb2ZpbGVWYWxpZGF0aW9uIiwidmFsaWRhdGlvbkl0ZW1zIiwiZm9ybXMiLCJmb3JtUHJvZmlsZSIsImVuYWJsZVZhbGlkYXRpb24iLCJuZXdDYXJkVmFsaWRhdGlvbiIsImZvcm1OZXdDYXJkIiwiYXZhdGFyVmFsaWRhdGlvbiIsImZvcm1BdmF0YXIiLCJmb3JtU2VsZWN0b3IiLCJwb3B1cFByb2ZpbGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUFNQSxHO0FBQ0osZUFBWUMsS0FBWixFQUFtQkMsTUFBbkIsRUFBMkI7QUFBQTs7QUFDekIsU0FBS0MsTUFBTCxHQUFjRixLQUFkO0FBQ0EsU0FBS0csT0FBTCxHQUFlRixNQUFmO0FBQ0EsU0FBS0csSUFBTCxHQUFZLG9DQUFaO0FBQ0Q7Ozs7b0NBRWVDLEcsRUFBSztBQUNuQixVQUFJLENBQUNBLEdBQUcsQ0FBQ0MsRUFBVCxFQUFhO0FBQ1gsZUFBT0MsT0FBTyxDQUFDQyxNQUFSLGlEQUEwQkgsR0FBRyxDQUFDSSxNQUE5QixFQUFQO0FBQ0Q7O0FBQ0QsYUFBT0osR0FBRyxDQUFDSyxJQUFKLEVBQVA7QUFDRDs7O2tDQUVhO0FBQ1osYUFBT0MsS0FBSyxXQUFJLEtBQUtQLElBQVQsU0FBZ0IsS0FBS0QsT0FBckIsZ0JBQXlDO0FBQ25EUyxlQUFPLEVBQUU7QUFDUEMsdUJBQWEsRUFBRSxLQUFLWCxNQURiO0FBRVAsMEJBQWdCO0FBRlQ7QUFEMEMsT0FBekMsQ0FBTCxDQUtKWSxJQUxJLENBS0MsS0FBS0MsZUFMTixDQUFQO0FBTUQ7OzttQ0FFY0MsSSxFQUFNQyxLLEVBQU87QUFDMUIsYUFBT04sS0FBSyxXQUFJLEtBQUtQLElBQVQsU0FBZ0IsS0FBS0QsT0FBckIsZ0JBQXlDO0FBQ25EZSxjQUFNLEVBQUUsT0FEMkM7QUFFbkROLGVBQU8sRUFBRTtBQUNQQyx1QkFBYSxFQUFFLEtBQUtYLE1BRGI7QUFFUCwwQkFBZ0I7QUFGVCxTQUYwQztBQU1uRGlCLFlBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFMLENBQWU7QUFBRUwsY0FBSSxFQUFKQSxJQUFGO0FBQVFDLGVBQUssRUFBTEE7QUFBUixTQUFmO0FBTjZDLE9BQXpDLENBQUwsQ0FPSkgsSUFQSSxDQU9DLEtBQUtDLGVBUE4sQ0FBUDtBQVFEOzs7c0NBRWlCO0FBQ2hCLGFBQU9KLEtBQUssV0FBSSxLQUFLUCxJQUFULFNBQWdCLEtBQUtELE9BQXJCLGFBQXNDO0FBQ2hEUyxlQUFPLEVBQUU7QUFDUEMsdUJBQWEsRUFBRSxLQUFLWCxNQURiO0FBRVAsMEJBQWdCO0FBRlQ7QUFEdUMsT0FBdEMsQ0FBTCxDQUtKWSxJQUxJLENBS0MsS0FBS0MsZUFMTixDQUFQO0FBTUQ7Ozs0QkFFT0MsSSxFQUFNTSxJLEVBQU07QUFDbEIsYUFBT1gsS0FBSyxXQUFJLEtBQUtQLElBQVQsU0FBZ0IsS0FBS0QsT0FBckIsYUFBc0M7QUFDaERlLGNBQU0sRUFBRSxNQUR3QztBQUVoRE4sZUFBTyxFQUFFO0FBQ1BDLHVCQUFhLEVBQUUsS0FBS1gsTUFEYjtBQUVQLDBCQUFnQjtBQUZULFNBRnVDO0FBTWhEaUIsWUFBSSxFQUFFQyxJQUFJLENBQUNDLFNBQUwsQ0FBZTtBQUFFTCxjQUFJLEVBQUpBLElBQUY7QUFBUU0sY0FBSSxFQUFKQTtBQUFSLFNBQWY7QUFOMEMsT0FBdEMsQ0FBTCxDQU9KUixJQVBJLENBT0MsS0FBS0MsZUFQTixDQUFQO0FBUUQ7OzsrQkFFVVEsTSxFQUFRO0FBQ2pCLGFBQU9aLEtBQUssV0FBSSxLQUFLUCxJQUFULFNBQWdCLEtBQUtELE9BQXJCLG9CQUFzQ29CLE1BQXRDLEdBQWdEO0FBQzFETCxjQUFNLEVBQUUsUUFEa0Q7QUFFMUROLGVBQU8sRUFBRTtBQUNQQyx1QkFBYSxFQUFFLEtBQUtYLE1BRGI7QUFFUCwwQkFBZ0I7QUFGVDtBQUZpRCxPQUFoRCxDQUFMLENBTUpZLElBTkksQ0FNQyxLQUFLQyxlQU5OLENBQVA7QUFPRDs7OzRCQUVPUSxNLEVBQVE7QUFDZCxhQUFPWixLQUFLLFdBQUksS0FBS1AsSUFBVCxTQUFnQixLQUFLRCxPQUFyQiwwQkFBNENvQixNQUE1QyxHQUFzRDtBQUNoRUwsY0FBTSxFQUFFLEtBRHdEO0FBRWhFTixlQUFPLEVBQUU7QUFDUEMsdUJBQWEsRUFBRSxLQUFLWCxNQURiO0FBRVAsMEJBQWdCO0FBRlQ7QUFGdUQsT0FBdEQsQ0FBTCxDQU1KWSxJQU5JLENBTUMsS0FBS0MsZUFOTixDQUFQO0FBT0Q7OzsrQkFFVVEsTSxFQUFRO0FBQ2pCLGFBQU9aLEtBQUssV0FBSSxLQUFLUCxJQUFULFNBQWdCLEtBQUtELE9BQXJCLDBCQUE0Q29CLE1BQTVDLEdBQXNEO0FBQ2hFTCxjQUFNLEVBQUUsUUFEd0Q7QUFFaEVOLGVBQU8sRUFBRTtBQUNQQyx1QkFBYSxFQUFFLEtBQUtYLE1BRGI7QUFFUCwwQkFBZ0I7QUFGVDtBQUZ1RCxPQUF0RCxDQUFMLENBTUpZLElBTkksQ0FNQyxLQUFLQyxlQU5OLENBQVA7QUFPRDs7O2lDQUVZUyxNLEVBQVE7QUFDbkIsYUFBT2IsS0FBSyxXQUFJLEtBQUtQLElBQVQsU0FBZ0IsS0FBS0QsT0FBckIsdUJBQWdEO0FBQzFEZSxjQUFNLEVBQUUsT0FEa0Q7QUFFMUROLGVBQU8sRUFBRTtBQUNQQyx1QkFBYSxFQUFFLEtBQUtYLE1BRGI7QUFFUCwwQkFBZ0I7QUFGVCxTQUZpRDtBQU0xRGlCLFlBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFMLENBQWU7QUFBRUcsZ0JBQU0sRUFBTkE7QUFBRixTQUFmO0FBTm9ELE9BQWhELENBQUwsQ0FPSlYsSUFQSSxDQU9DLEtBQUtDLGVBUE4sQ0FBUDtBQVFEOzs7Ozs7QUFHSCxpRUFBZWhCLEdBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDaEdNMEIsSTtBQUNKLGdCQUNFQyxJQURGLEVBRUVDLE1BRkYsRUFHRUMsZ0JBSEYsRUFJRUMscUJBSkYsRUFLRUMsNkJBTEYsRUFNRUMscUJBTkYsRUFPRTtBQUFBOztBQUNBLFNBQUtDLEtBQUwsR0FBYU4sSUFBSSxDQUFDVixJQUFsQjtBQUNBLFNBQUtpQixLQUFMLEdBQWFQLElBQUksQ0FBQ0osSUFBbEI7QUFDQSxTQUFLWSxNQUFMLEdBQWNSLElBQUksQ0FBQ1MsS0FBbkI7QUFDQSxTQUFLQyxPQUFMLEdBQWVWLElBQUksQ0FBQ1csRUFBcEI7QUFDQSxTQUFLQyxRQUFMLEdBQWdCWixJQUFJLENBQUNhLE9BQXJCO0FBQ0EsU0FBS0MsT0FBTCxHQUFlYixNQUFmO0FBQ0EsU0FBS2MsaUJBQUwsR0FBeUJiLGdCQUF6QjtBQUNBLFNBQUtjLHNCQUFMLEdBQThCYixxQkFBOUI7QUFDQSxTQUFLYyw4QkFBTCxHQUFzQ2IsNkJBQXRDO0FBQ0EsU0FBS2Msc0JBQUwsR0FBOEJiLHFCQUE5QjtBQUNEOzs7O21DQUVjO0FBQ2IsYUFBT2MsUUFBUSxDQUNaQyxhQURJLENBQ1UsS0FBS0wsaUJBRGYsRUFFSk0sT0FGSSxDQUVJQyxTQUZKLENBRWMsSUFGZCxDQUFQO0FBR0Q7OzttQ0FFY2IsSyxFQUFPO0FBQ3BCLFdBQUtELE1BQUwsR0FBY0MsS0FBZDtBQUNBLFdBQUtjLFdBQUwsQ0FBaUJDLFdBQWpCLEdBQStCLEtBQUtoQixNQUFMLENBQVlpQixNQUEzQztBQUNEOzs7K0JBRVU7QUFBQTs7QUFDVCxhQUFPLEtBQUtqQixNQUFMLENBQVlrQixJQUFaLENBQWlCLFVBQUNDLElBQUQ7QUFBQSxlQUFVQSxJQUFJLENBQUNDLEdBQUwsS0FBYSxLQUFJLENBQUNkLE9BQTVCO0FBQUEsT0FBakIsQ0FBUDtBQUNEOzs7cUNBRWdCO0FBQ2YsVUFBSSxLQUFLZSxRQUFMLEVBQUosRUFBcUI7QUFDbkIsYUFBS0MsV0FBTCxDQUFpQkMsU0FBakIsQ0FBMkJDLEdBQTNCLENBQStCLG1DQUEvQjtBQUNELE9BRkQsTUFFTztBQUNMLGFBQUtGLFdBQUwsQ0FBaUJDLFNBQWpCLENBQTJCRSxNQUEzQixDQUFrQyxtQ0FBbEM7QUFDRDtBQUNGOzs7c0NBRWlCQyxHLEVBQUs7QUFBQTs7QUFDckIsV0FBS2hCLHNCQUFMLENBQTRCZ0IsR0FBNUIsRUFBaUMsS0FBS3hCLE9BQXRDLEVBQStDdEIsSUFBL0MsQ0FBb0QsVUFBQytDLElBQUQsRUFBVTtBQUM1RCxjQUFJLENBQUNDLGNBQUwsQ0FBb0JELElBQUksQ0FBQzFCLEtBQXpCOztBQUNBLGNBQUksQ0FBQzRCLGNBQUw7QUFDRCxPQUhEO0FBSUQ7Ozt5Q0FFb0I7QUFBQTs7QUFDbkIsV0FBS0MsUUFBTCxDQUNHbEIsYUFESCxDQUNpQixpQkFEakIsRUFFR21CLGdCQUZILENBRW9CLE9BRnBCLEVBRTZCLFVBQUNMLEdBQUQsRUFBUztBQUNsQyxjQUFJLENBQUNsQixzQkFBTCxDQUE0QmtCLEdBQUcsQ0FBQ00sTUFBaEM7QUFDRCxPQUpIOztBQU1BLFdBQUtGLFFBQUwsQ0FDR2xCLGFBREgsQ0FDaUIsdUJBRGpCLEVBRUdtQixnQkFGSCxDQUVvQixPQUZwQixFQUU2QixVQUFDTCxHQUFELEVBQVM7QUFDbEMsY0FBSSxDQUFDTyxpQkFBTCxDQUF1QlAsR0FBdkI7QUFDRCxPQUpIOztBQU1BLFdBQUtJLFFBQUwsQ0FDR2xCLGFBREgsQ0FDaUIsd0JBRGpCLEVBRUdtQixnQkFGSCxDQUVvQixPQUZwQixFQUU2QixVQUFDTCxHQUFELEVBQVM7QUFDbEMsY0FBSSxDQUFDakIsOEJBQUwsQ0FDRSxNQUFJLENBQUNQLE9BRFAsRUFFRXdCLEdBQUcsQ0FBQ00sTUFBSixDQUFXRSxhQUZiO0FBSUQsT0FQSDtBQVFEOzs7bUNBRWM7QUFDYixXQUFLbkIsV0FBTCxHQUFtQixLQUFLZSxRQUFMLENBQWNsQixhQUFkLENBQTRCLGlCQUE1QixDQUFuQjtBQUNBLFdBQUtVLFdBQUwsR0FBbUIsS0FBS1EsUUFBTCxDQUFjbEIsYUFBZCxDQUE0Qix1QkFBNUIsQ0FBbkI7QUFDQSxXQUFLdUIsWUFBTCxHQUFvQixLQUFLTCxRQUFMLENBQWNsQixhQUFkLENBQTRCLHFCQUE1QixDQUFwQjtBQUNBLFdBQUt3QixZQUFMLEdBQW9CLEtBQUtOLFFBQUwsQ0FBY2xCLGFBQWQsQ0FBNEIsd0JBQTVCLENBQXBCO0FBQ0Q7OzttQ0FFYztBQUNiLFdBQUtrQixRQUFMLEdBQWdCLEtBQUtPLFlBQUwsRUFBaEI7O0FBQ0EsV0FBS0Msa0JBQUw7O0FBQ0EsV0FBS0MsWUFBTDs7QUFFQSxVQUFNQyxTQUFTLEdBQUcsS0FBS1YsUUFBTCxDQUFjbEIsYUFBZCxDQUE0QixpQkFBNUIsQ0FBbEI7O0FBQ0E0QixlQUFTLENBQUNDLEdBQVYsR0FBZ0IsS0FBSzFDLEtBQXJCO0FBQ0F5QyxlQUFTLENBQUNFLEdBQVYsR0FBZ0IsS0FBSzVDLEtBQXJCO0FBRUEsV0FBS3FDLFlBQUwsQ0FBa0JuQixXQUFsQixHQUFnQyxLQUFLbEIsS0FBckM7QUFDQSxXQUFLaUIsV0FBTCxDQUFpQkMsV0FBakIsR0FBK0IsS0FBS2hCLE1BQUwsQ0FBWWlCLE1BQTNDOztBQUNBLFdBQUtZLGNBQUw7O0FBRUEsVUFBSSxLQUFLdkIsT0FBTCxLQUFpQixLQUFLRixRQUExQixFQUFvQztBQUNsQyxhQUFLZ0MsWUFBTCxDQUFrQmIsU0FBbEIsQ0FBNEJDLEdBQTVCLENBQWdDLHNCQUFoQztBQUNEOztBQUVELGFBQU8sS0FBS00sUUFBWjtBQUNEOzs7Ozs7QUFHSCxpRUFBZXZDLElBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDdEdNb0QsYTtBQUNKLCtCQVFFQyxjQVJGLEVBU0U7QUFBQSxRQVBFQyxhQU9GLFFBUEVBLGFBT0Y7QUFBQSxRQU5FQyxvQkFNRixRQU5FQSxvQkFNRjtBQUFBLFFBTEVDLG1CQUtGLFFBTEVBLG1CQUtGO0FBQUEsUUFKRUMsZUFJRixRQUpFQSxlQUlGO0FBQUEsUUFIRUMsVUFHRixRQUhFQSxVQUdGOztBQUFBOztBQUNBLFNBQUtDLGNBQUwsR0FBc0JMLGFBQXRCO0FBQ0EsU0FBS00scUJBQUwsR0FBNkJMLG9CQUE3QjtBQUNBLFNBQUtNLG9CQUFMLEdBQTRCTCxtQkFBNUI7QUFDQSxTQUFLTSxnQkFBTCxHQUF3QkwsZUFBeEI7QUFDQSxTQUFLTSxXQUFMLEdBQW1CTCxVQUFuQjtBQUNBLFNBQUtNLGVBQUwsR0FBdUJYLGNBQXZCO0FBQ0EsU0FBS1ksY0FBTCxHQUFzQixLQUFLRCxlQUFMLENBQXFCM0MsYUFBckIsQ0FDcEIsS0FBS3VDLHFCQURlLENBQXRCO0FBR0QsRyxDQUVEOzs7OztxQ0FDaUJNLFMsRUFBVztBQUMxQixhQUFPQSxTQUFTLENBQUNDLElBQVYsQ0FBZSxVQUFDQyxZQUFELEVBQWtCO0FBQ3RDLGVBQU8sQ0FBQ0EsWUFBWSxDQUFDQyxRQUFiLENBQXNCQyxLQUE5QjtBQUNELE9BRk0sQ0FBUDtBQUdELEssQ0FFRDs7OzswQ0FDc0I7QUFDcEIsV0FBS0wsY0FBTCxDQUFvQmpDLFNBQXBCLENBQThCRSxNQUE5QixDQUFxQyxLQUFLMkIsb0JBQTFDO0FBQ0QsSyxDQUVEOzs7OzJDQUN1QjtBQUNyQixXQUFLSSxjQUFMLENBQW9CakMsU0FBcEIsQ0FBOEJDLEdBQTlCLENBQWtDLEtBQUs0QixvQkFBdkM7QUFDRCxLLENBRUQ7Ozs7dUNBQ21CSyxTLEVBQVc7QUFDNUIsVUFBSSxLQUFLSyxnQkFBTCxDQUFzQkwsU0FBdEIsQ0FBSixFQUFzQztBQUNwQyxhQUFLTSxvQkFBTDtBQUNELE9BRkQsTUFFTztBQUNMLGFBQUtDLG1CQUFMO0FBQ0Q7QUFDRixLLENBRUQ7Ozs7b0NBQ2dCTCxZLEVBQWNNLFksRUFBYztBQUMxQyxVQUFNQyxZQUFZLEdBQUcsS0FBS1gsZUFBTCxDQUFxQjNDLGFBQXJCLFlBQ2YrQyxZQUFZLENBQUN4RCxFQURFLFlBQXJCOztBQUdBd0Qsa0JBQVksQ0FBQ3BDLFNBQWIsQ0FBdUJDLEdBQXZCLENBQTJCLEtBQUs2QixnQkFBaEM7QUFDQWEsa0JBQVksQ0FBQ2xELFdBQWIsR0FBMkJpRCxZQUEzQjtBQUNBQyxrQkFBWSxDQUFDM0MsU0FBYixDQUF1QkMsR0FBdkIsQ0FBMkIsS0FBSzhCLFdBQWhDO0FBQ0QsSyxDQUVEOzs7O29DQUNnQkssWSxFQUFjO0FBQzVCLFVBQU1PLFlBQVksR0FBRyxLQUFLWCxlQUFMLENBQXFCM0MsYUFBckIsWUFDZitDLFlBQVksQ0FBQ3hELEVBREUsWUFBckI7O0FBR0F3RCxrQkFBWSxDQUFDcEMsU0FBYixDQUF1QkUsTUFBdkIsQ0FBOEIsS0FBSzRCLGdCQUFuQztBQUNBYSxrQkFBWSxDQUFDM0MsU0FBYixDQUF1QkUsTUFBdkIsQ0FBOEIsS0FBSzZCLFdBQW5DO0FBQ0FZLGtCQUFZLENBQUNsRCxXQUFiLEdBQTJCLEVBQTNCO0FBQ0QsSyxDQUVEOzs7O3dDQUNvQjJDLFksRUFBYztBQUNoQyxVQUFJLENBQUNBLFlBQVksQ0FBQ0MsUUFBYixDQUFzQkMsS0FBM0IsRUFBa0M7QUFDaEMsYUFBS00sZUFBTCxDQUFxQlIsWUFBckIsRUFBbUNBLFlBQVksQ0FBQ1MsaUJBQWhEO0FBQ0QsT0FGRCxNQUVPO0FBQ0wsYUFBS0MsZUFBTCxDQUFxQlYsWUFBckI7QUFDRDtBQUNGLEssQ0FFRDs7Ozt5Q0FDcUI7QUFBQTs7QUFDbkIsVUFBTUYsU0FBUyxHQUFHYSxLQUFLLENBQUNDLElBQU4sQ0FDaEIsS0FBS2hCLGVBQUwsQ0FBcUJpQixnQkFBckIsQ0FBc0MsS0FBS3RCLGNBQTNDLENBRGdCLENBQWxCOztBQUlBLFdBQUt1QixrQkFBTCxDQUF3QmhCLFNBQXhCOztBQUVBQSxlQUFTLENBQUNpQixPQUFWLENBQWtCLFVBQUNmLFlBQUQsRUFBa0I7QUFDbENBLG9CQUFZLENBQUM1QixnQkFBYixDQUE4QixPQUE5QixFQUF1QyxZQUFNO0FBQzNDLGVBQUksQ0FBQzRDLG1CQUFMLENBQXlCaEIsWUFBekI7O0FBQ0EsZUFBSSxDQUFDYyxrQkFBTCxDQUF3QmhCLFNBQXhCO0FBQ0QsU0FIRDtBQUlELE9BTEQsRUFQbUIsQ0FjbkI7O0FBQ0EsV0FBS0YsZUFBTCxDQUFxQnhCLGdCQUFyQixDQUFzQyxRQUF0QyxFQUFnRCxZQUFNO0FBQ3BELGFBQUksQ0FBQ2dDLG9CQUFMO0FBQ0QsT0FGRDtBQUdELEssQ0FFRDs7Ozt1Q0FDbUI7QUFDakIsV0FBS3pCLGtCQUFMO0FBQ0Q7Ozs7OztBQUdILGlFQUFlSyxhQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ3hHTWlDLEs7QUFDSixpQkFBWUMsYUFBWixFQUEyQjtBQUFBOztBQUN6QixTQUFLQyxNQUFMLEdBQWNuRSxRQUFRLENBQUNDLGFBQVQsQ0FBdUJpRSxhQUF2QixDQUFkO0FBQ0EsU0FBS0Usa0JBQUwsR0FBMEIsS0FBS0Esa0JBQUwsQ0FBd0JDLElBQXhCLENBQTZCLElBQTdCLENBQTFCO0FBQ0EsU0FBS0MsZUFBTCxHQUF1QixLQUFLQSxlQUFMLENBQXFCRCxJQUFyQixDQUEwQixJQUExQixDQUF2QjtBQUNBLFNBQUtFLDRCQUFMLEdBQW9DLEtBQUtBLDRCQUFMLENBQWtDRixJQUFsQyxDQUNsQyxJQURrQyxDQUFwQztBQUdEOzs7O29DQUVldEQsRyxFQUFLO0FBQ25CLFVBQUlBLEdBQUcsQ0FBQ3lELEdBQUosS0FBWSxRQUFoQixFQUEwQjtBQUN4QixhQUFLQyxLQUFMO0FBQ0Q7QUFDRjs7O3VDQUVrQjFELEcsRUFBSztBQUN0QixVQUFJQSxHQUFHLENBQUNNLE1BQUosQ0FBV1QsU0FBWCxDQUFxQjhELFFBQXJCLENBQThCLHFCQUE5QixDQUFKLEVBQTBEO0FBQ3hELGFBQUtELEtBQUw7QUFDRDtBQUNGOzs7aURBRTRCMUQsRyxFQUFLO0FBQ2hDLFVBQUlBLEdBQUcsQ0FBQ00sTUFBSixLQUFlTixHQUFHLENBQUM0RCxhQUF2QixFQUFzQztBQUNwQyxhQUFLRixLQUFMO0FBQ0Q7QUFDRjs7O3lDQUVvQjtBQUNuQixXQUFLTixNQUFMLENBQVkvQyxnQkFBWixDQUE2QixPQUE3QixFQUFzQyxLQUFLZ0Qsa0JBQTNDOztBQUNBLFdBQUtELE1BQUwsQ0FBWS9DLGdCQUFaLENBQ0UsV0FERixFQUVFLEtBQUttRCw0QkFGUDtBQUlEOzs7MkJBRU07QUFDTHZFLGNBQVEsQ0FBQ29CLGdCQUFULENBQTBCLFNBQTFCLEVBQXFDLEtBQUtrRCxlQUExQzs7QUFDQSxXQUFLSCxNQUFMLENBQVl2RCxTQUFaLENBQXNCQyxHQUF0QixDQUEwQixjQUExQjtBQUNEOzs7NEJBRU87QUFDTmIsY0FBUSxDQUFDNEUsbUJBQVQsQ0FBNkIsU0FBN0IsRUFBd0MsS0FBS04sZUFBN0M7O0FBQ0EsV0FBS0gsTUFBTCxDQUFZdkQsU0FBWixDQUFzQkUsTUFBdEIsQ0FBNkIsY0FBN0I7QUFDRDs7O3dDQUVtQjtBQUNsQixXQUFLK0Qsa0JBQUw7QUFDRDs7Ozs7O0FBRUgsaUVBQWVaLEtBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbERBOztJQUVNYSxhOzs7OztBQUNKLHlCQUFZQyxpQkFBWixFQUErQmIsYUFBL0IsRUFBOEM7QUFBQTs7QUFBQTs7QUFDNUMsOEJBQU1BLGFBQU47QUFDQSxVQUFLYyxrQkFBTCxHQUEwQkQsaUJBQTFCO0FBQ0EsVUFBS0UsVUFBTCxHQUFrQixNQUFLZCxNQUFMLENBQVlOLGdCQUFaLENBQTZCLGVBQTdCLENBQWxCO0FBQ0EsVUFBS3FCLFVBQUwsR0FBa0IsTUFBS2YsTUFBTCxDQUFZbEUsYUFBWixDQUEwQixjQUExQixDQUFsQjtBQUNBLFVBQUtrRixhQUFMLEdBQXFCLE1BQUtBLGFBQUwsQ0FBbUJkLElBQW5CLCtCQUFyQjtBQUNBLFVBQUtlLGFBQUwsR0FBcUIsTUFBS2pCLE1BQUwsQ0FBWWxFLGFBQVosQ0FBMEIsZ0JBQTFCLENBQXJCO0FBTjRDO0FBTzdDOzs7O3NDQUVpQjtBQUFBOztBQUNoQixXQUFLb0YsWUFBTCxHQUFvQixFQUFwQjs7QUFDQSxXQUFLSixVQUFMLENBQWdCbEIsT0FBaEIsQ0FBd0IsVUFBQ2xGLElBQUQsRUFBVTtBQUNoQyxjQUFJLENBQUN3RyxZQUFMLENBQWtCeEcsSUFBSSxDQUFDVixJQUF2QixJQUErQlUsSUFBSSxDQUFDeUcsS0FBcEM7QUFDRCxPQUZEOztBQUlBLGFBQU8sS0FBS0QsWUFBWjtBQUNEOzs7a0NBRWF0RSxHLEVBQUs7QUFBQTs7QUFDakJBLFNBQUcsQ0FBQ3dFLGNBQUosR0FEaUIsQ0FFakI7O0FBQ0EsVUFBTUMsZ0JBQWdCLEdBQUcsS0FBS0osYUFBTCxDQUFtQi9FLFdBQTVDO0FBRUEsVUFBSTNDLE9BQUosQ0FBWSxVQUFDK0gsT0FBRCxFQUFhO0FBQ3ZCLGNBQUksQ0FBQ0wsYUFBTCxDQUFtQi9FLFdBQW5CLEdBQWlDLGVBQWpDOztBQUNBLFlBQU1xRixXQUFXLEdBQUcsTUFBSSxDQUFDQyxlQUFMLEVBQXBCOztBQUNBRixlQUFPLENBQUNDLFdBQUQsQ0FBUDtBQUNELE9BSkQsRUFLR3pILElBTEgsQ0FLUSxVQUFDeUgsV0FBRCxFQUFpQjtBQUVyQjtBQUNBO0FBQ0EsWUFBSSxNQUFJLENBQUNuRyxPQUFULEVBQWtCO0FBQ2hCLGlCQUFPLE1BQUksQ0FBQ3lGLGtCQUFMLENBQXdCLE1BQUksQ0FBQ3pGLE9BQTdCLEVBQXNDLE1BQUksQ0FBQ3FHLGNBQTNDLENBQVA7QUFDRCxTQUZELE1BRU87QUFDTCxpQkFBTyxNQUFJLENBQUNaLGtCQUFMLENBQXdCVSxXQUF4QixDQUFQO0FBQ0Q7QUFDRixPQWRILFdBZVMsVUFBQ0csR0FBRCxFQUFTO0FBQ2RDLGVBQU8sQ0FBQ0MsR0FBUixpQkFBcUJGLEdBQXJCO0FBQ0QsT0FqQkgsYUFrQlcsVUFBQzdFLElBQUQsRUFBVTtBQUNqQixjQUFJLENBQUN5RCxLQUFMOztBQUNBLGNBQUksQ0FBQ1csYUFBTCxDQUFtQi9FLFdBQW5CLEdBQWlDbUYsZ0JBQWpDO0FBQ0QsT0FyQkg7QUFzQkQ7Ozt3Q0FFbUI7QUFDbEI7O0FBQ0EsV0FBS3JCLE1BQUwsQ0FBWS9DLGdCQUFaLENBQTZCLFFBQTdCLEVBQXVDLEtBQUsrRCxhQUE1QztBQUNEOzs7eUJBRUl6RyxNLEVBQVE2QyxhLEVBQWU7QUFDMUI7O0FBQ0EsV0FBS2hDLE9BQUwsR0FBZWIsTUFBZjtBQUNBLFdBQUtrSCxjQUFMLEdBQXNCckUsYUFBdEI7QUFDRDs7OzRCQUVPO0FBQ047O0FBQ0EsV0FBSzJELFVBQUwsQ0FBZ0JjLEtBQWhCO0FBQ0Q7Ozs7RUE5RHlCL0IsOEM7O0FBZ0U1QixpRUFBZWEsYUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsRUE7O0lBRU1tQixjOzs7OztBQUNKLDBCQUFZL0IsYUFBWixFQUEyQjtBQUFBOztBQUFBOztBQUN6Qiw4QkFBTUEsYUFBTjtBQUNBLFVBQUtnQyxhQUFMLEdBQXFCLE1BQUsvQixNQUFMLENBQVlsRSxhQUFaLENBQTBCLGVBQTFCLENBQXJCO0FBQ0EsVUFBS2tHLGFBQUwsR0FBcUIsTUFBS2hDLE1BQUwsQ0FBWWxFLGFBQVosQ0FBMEIsaUJBQTFCLENBQXJCO0FBSHlCO0FBSTFCOzs7OytCQUVrQjtBQUFBLFVBQVo2QixHQUFZLFFBQVpBLEdBQVk7QUFBQSxVQUFQQyxHQUFPLFFBQVBBLEdBQU87QUFDakIsV0FBS21FLGFBQUwsQ0FBbUJwRSxHQUFuQixHQUF5QkEsR0FBekI7QUFDQSxXQUFLb0UsYUFBTCxDQUFtQm5FLEdBQW5CLEdBQXlCQSxHQUF6QjtBQUNBLFdBQUtvRSxhQUFMLENBQW1COUYsV0FBbkIsR0FBaUMwQixHQUFqQzs7QUFDQTtBQUNEOzs7O0VBWjBCa0MsOEM7O0FBYzdCLGlFQUFlZ0MsY0FBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNoQk1HLE87QUFDSix5QkFBMEJDLGlCQUExQixFQUE2QztBQUFBLFFBQS9CQyxRQUErQixRQUEvQkEsUUFBK0I7O0FBQUE7O0FBQzNDLFNBQUtDLFNBQUwsR0FBaUJELFFBQWpCO0FBQ0EsU0FBS0UsVUFBTCxHQUFrQnhHLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1Qm9HLGlCQUF2QixDQUFsQjtBQUNEOzs7OzRCQUVPSSxPLEVBQVM7QUFDZixXQUFLRCxVQUFMLENBQWdCRSxPQUFoQixDQUF3QkQsT0FBeEI7QUFDRDs7O2dDQUVXRSxLLEVBQU87QUFBQTs7QUFDakJBLFdBQUssQ0FBQzVDLE9BQU4sQ0FBYyxVQUFDbEYsSUFBRCxFQUFVO0FBQ3RCLGFBQUksQ0FBQzBILFNBQUwsQ0FBZTFILElBQWY7QUFDRCxPQUZEO0FBR0Q7Ozs7OztBQUVILGlFQUFldUgsT0FBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNoQk1RLFE7QUFDSiwwQkFBMkQ7QUFBQSxRQUE3Q0MsWUFBNkMsUUFBN0NBLFlBQTZDO0FBQUEsUUFBL0JDLFdBQStCLFFBQS9CQSxXQUErQjtBQUFBLFFBQWxCQyxjQUFrQixRQUFsQkEsY0FBa0I7O0FBQUE7O0FBQ3pELFNBQUtDLGlCQUFMLEdBQXlCSCxZQUF6QjtBQUNBLFNBQUtJLGdCQUFMLEdBQXdCSCxXQUF4QjtBQUNBLFNBQUtJLG1CQUFMLEdBQTJCSCxjQUEzQjtBQUNBLFNBQUtJLFNBQUwsR0FBaUJuSCxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsS0FBSytHLGlCQUE1QixDQUFqQjtBQUNBLFNBQUtJLFFBQUwsR0FBZ0JwSCxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsS0FBS2dILGdCQUE1QixDQUFoQjtBQUNBLFNBQUtJLFdBQUwsR0FBbUJySCxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsS0FBS2lILG1CQUE1QixDQUFuQjtBQUNEOzs7O2tDQUVhO0FBQ1osYUFBTztBQUNML0ksWUFBSSxFQUFFLEtBQUtnSixTQUFMLENBQWU5RyxXQURoQjtBQUVMaUgsV0FBRyxFQUFFLEtBQUtGLFFBQUwsQ0FBYy9HLFdBRmQ7QUFHTGIsVUFBRSxFQUFFLEtBQUtpQjtBQUhKLE9BQVA7QUFLRDs7O2dDQUVXOEcsUSxFQUFVQyxPLEVBQVNoSSxFLEVBQUlpSSxVLEVBQVk7QUFDN0MsV0FBS04sU0FBTCxDQUFlOUcsV0FBZixHQUE2QmtILFFBQTdCO0FBQ0EsV0FBS0gsUUFBTCxDQUFjL0csV0FBZCxHQUE0Qm1ILE9BQTVCOztBQUVBLFVBQUloSSxFQUFKLEVBQVE7QUFDTixhQUFLaUIsR0FBTCxHQUFXakIsRUFBWDtBQUNEOztBQUVELFVBQUlpSSxVQUFKLEVBQWdCO0FBQ2QsYUFBS0osV0FBTCxDQUFpQnZGLEdBQWpCLEdBQXVCMkYsVUFBdkI7QUFDQSxhQUFLSixXQUFMLENBQWlCdEYsR0FBakIsR0FBdUJ3RixRQUF2QjtBQUNEO0FBQ0Y7Ozs7OztBQUVILGlFQUFlWCxRQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtDQXVCQTs7QUFDQSxJQUFNYyxHQUFHLEdBQUcsSUFBSXhLLHVEQUFKLENBQVFDLHNEQUFSLEVBQWVDLHVEQUFmLENBQVosQyxDQUVBOztBQUNBLElBQUkwQixNQUFNLEdBQUcsRUFBYixDLENBRUE7O0FBQ0EsSUFBTTZJLHdCQUF3QixHQUFHLFNBQTNCQSx3QkFBMkIsQ0FBQ2pDLFdBQUQsRUFBaUI7QUFDaEQsU0FBT2dDLEdBQUcsQ0FBQ0UsY0FBSixDQUFtQmxDLFdBQVcsQ0FBQ3ZILElBQS9CLEVBQXFDdUgsV0FBVyxDQUFDNEIsR0FBakQsRUFBc0RySixJQUF0RCxDQUEyRCxVQUFDK0MsSUFBRCxFQUFVO0FBQzFFNkcsWUFBUSxDQUFDQyxXQUFULENBQXFCOUcsSUFBSSxDQUFDN0MsSUFBMUIsRUFBZ0M2QyxJQUFJLENBQUM1QyxLQUFyQztBQUNELEdBRk0sQ0FBUDtBQUdELENBSkQsQyxDQU1BOzs7QUFDQSxJQUFNMkoscUJBQXFCLEdBQUcsU0FBeEJBLHFCQUF3QixDQUFDckMsV0FBRCxFQUFpQjtBQUM3QyxTQUFPZ0MsR0FBRyxDQUFDTSxZQUFKLENBQWlCdEMsV0FBVyxDQUFDdUMsVUFBN0IsRUFBeUNoSyxJQUF6QyxDQUE4QyxVQUFDK0MsSUFBRCxFQUFVO0FBQzdENkcsWUFBUSxDQUFDQyxXQUFULENBQXFCOUcsSUFBSSxDQUFDN0MsSUFBMUIsRUFBZ0M2QyxJQUFJLENBQUM1QyxLQUFyQyxFQUE0QzRDLElBQUksQ0FBQ1AsR0FBakQsRUFBc0RPLElBQUksQ0FBQ3JDLE1BQTNEO0FBQ0QsR0FGTSxDQUFQO0FBR0QsQ0FKRCxDLENBTUE7OztBQUNBLElBQU11SixnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLENBQUN4SixNQUFELEVBQVM2QyxhQUFULEVBQTJCO0FBQ2xELFNBQU9tRyxHQUFHLENBQUNTLFVBQUosQ0FBZXpKLE1BQWYsRUFBdUJULElBQXZCLENBQTRCLFVBQUMrQyxJQUFELEVBQVU7QUFDM0NPLGlCQUFhLENBQUNULE1BQWQ7QUFDQSxXQUFPRSxJQUFQO0FBQ0QsR0FITSxDQUFQO0FBSUQsQ0FMRCxDLENBT0E7OztBQUNBLElBQU1vSCxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQUNDLFlBQUQsRUFBa0I7QUFDeENDLGdCQUFjLENBQUNDLElBQWYsQ0FBb0JGLFlBQXBCO0FBQ0QsQ0FGRCxDLENBSUE7OztBQUNBLElBQU1HLG9CQUFvQixHQUFHLFNBQXZCQSxvQkFBdUIsQ0FBQzlKLE1BQUQsRUFBUzZDLGFBQVQsRUFBMkI7QUFDdERrSCxvQkFBa0IsQ0FBQ0YsSUFBbkIsQ0FBd0I3SixNQUF4QixFQUFnQzZDLGFBQWhDO0FBQ0QsQ0FGRCxDLENBSUE7OztBQUNBLElBQU1yQyxxQkFBcUIsR0FBRyxTQUF4QkEscUJBQXdCLENBQUM2QixHQUFELEVBQU1yQyxNQUFOLEVBQWlCO0FBQzdDLE1BQU1nSyxXQUFXLEdBQUczSCxHQUFHLENBQUNNLE1BQXhCOztBQUNBLE1BQUlxSCxXQUFXLENBQUM5SCxTQUFaLENBQXNCOEQsUUFBdEIsQ0FBK0JpRSxnRUFBL0IsQ0FBSixFQUFxRDtBQUNuRCxXQUFPakIsR0FBRyxDQUFDa0IsVUFBSixDQUFlbEssTUFBZixDQUFQO0FBQ0QsR0FGRCxNQUVPO0FBQ0wsV0FBT2dKLEdBQUcsQ0FBQ21CLE9BQUosQ0FBWW5LLE1BQVosQ0FBUDtBQUNEO0FBQ0YsQ0FQRCxDLENBU0E7OztBQUNBLElBQU1vSyxzQkFBc0IsR0FBRyxTQUF6QkEsc0JBQXlCLENBQUNwRCxXQUFELEVBQWlCO0FBQzlDLFNBQU9nQyxHQUFHLENBQUNxQixPQUFKLENBQVlyRCxXQUFXLENBQUNzRCxRQUF4QixFQUFrQ3RELFdBQVcsQ0FBQ2pILElBQTlDLEVBQW9EUixJQUFwRCxDQUF5RCxVQUFDK0MsSUFBRCxFQUFVO0FBQ3hFLFFBQU1pSSxPQUFPLEdBQUcsSUFBSXJLLHdEQUFKLENBQ2Q7QUFDRVQsVUFBSSxFQUFFNkMsSUFBSSxDQUFDN0MsSUFEYjtBQUVFTSxVQUFJLEVBQUV1QyxJQUFJLENBQUN2QyxJQUZiO0FBR0VhLFdBQUssRUFBRTBCLElBQUksQ0FBQzFCLEtBSGQ7QUFJRUUsUUFBRSxFQUFFd0IsSUFBSSxDQUFDUCxHQUpYO0FBS0VmLGFBQU8sRUFBRXNCLElBQUksQ0FBQ2tJLEtBQUwsQ0FBV3pJO0FBTHRCLEtBRGMsRUFRZDNCLE1BUmMsRUFTZHFLLDZEQVRjLEVBVWRmLGVBVmMsRUFXZEksb0JBWGMsRUFZZHRKLHFCQVpjLENBQWhCO0FBY0EsUUFBTWtLLFdBQVcsR0FBR0gsT0FBTyxDQUFDSSxZQUFSLEVBQXBCO0FBQ0FDLFlBQVEsQ0FBQ0MsT0FBVCxDQUFpQkgsV0FBakI7QUFDRCxHQWpCTSxDQUFQO0FBa0JELENBbkJELEMsQ0FxQkE7OztBQUNBLElBQU12QixRQUFRLEdBQUcsSUFBSWpCLDREQUFKLENBQWE7QUFBRUMsY0FBWSxFQUFaQSw2REFBRjtBQUFnQkMsYUFBVyxFQUFYQSw0REFBaEI7QUFBNkJDLGdCQUFjLEVBQWRBLCtEQUFjQTtBQUEzQyxDQUFiLENBQWpCLEMsQ0FFQTs7QUFDQSxJQUFNZSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDMEIsUUFBRCxFQUFjO0FBQUEsTUFDeEJyTCxJQUR3QixHQUNLcUwsUUFETCxDQUN4QnJMLElBRHdCO0FBQUEsTUFDbEJDLEtBRGtCLEdBQ0tvTCxRQURMLENBQ2xCcEwsS0FEa0I7QUFBQSxNQUNYTyxNQURXLEdBQ0s2SyxRQURMLENBQ1g3SyxNQURXO0FBQUEsTUFDSDhCLEdBREcsR0FDSytJLFFBREwsQ0FDSC9JLEdBREc7QUFFaENvSCxVQUFRLENBQUNDLFdBQVQsQ0FBcUIzSixJQUFyQixFQUEyQkMsS0FBM0IsRUFBa0NxQyxHQUFsQyxFQUF1QzlCLE1BQXZDO0FBQ0FHLFFBQU0sR0FBRzJCLEdBQVQ7QUFDRCxDQUpELEMsQ0FNQTs7O0FBQ0EsSUFBTWdKLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsQ0FBQ0MsWUFBRCxFQUFrQjtBQUN2QyxNQUFNQyxLQUFLLEdBQUdELFlBQVksQ0FBQ0UsR0FBYixDQUFpQixVQUFDQyxJQUFELEVBQVU7QUFDdkMsV0FBTztBQUNMMUwsVUFBSSxFQUFFMEwsSUFBSSxDQUFDMUwsSUFETjtBQUVMTSxVQUFJLEVBQUVvTCxJQUFJLENBQUNwTCxJQUZOO0FBR0xhLFdBQUssRUFBRXVLLElBQUksQ0FBQ3ZLLEtBSFA7QUFJTEUsUUFBRSxFQUFFcUssSUFBSSxDQUFDcEosR0FKSjtBQUtMZixhQUFPLEVBQUVtSyxJQUFJLENBQUNYLEtBQUwsQ0FBV3pJO0FBTGYsS0FBUDtBQU9ELEdBUmEsQ0FBZDtBQVNBNkksVUFBUSxDQUFDUSxXQUFULENBQXFCSCxLQUFyQjtBQUNELENBWEQsQyxDQWFBOzs7QUFDQWpNLE9BQU8sQ0FBQ3FNLEdBQVIsQ0FBWSxDQUFDckMsR0FBRyxDQUFDc0MsV0FBSixFQUFELEVBQW9CdEMsR0FBRyxDQUFDdUMsZUFBSixFQUFwQixDQUFaLEVBQ0doTSxJQURILENBQ1EsZ0JBQThCO0FBQUE7QUFBQSxNQUE1QnVMLFFBQTRCO0FBQUEsTUFBbEJFLFlBQWtCOztBQUNsQzVCLGFBQVcsQ0FBQzBCLFFBQUQsQ0FBWDtBQUNBQyxnQkFBYyxDQUFDQyxZQUFELENBQWQ7QUFDRCxDQUpILFdBS1MsVUFBQzdELEdBQUQsRUFBUztBQUNkQyxTQUFPLENBQUNDLEdBQVIsaURBQXVCRixHQUF2QjtBQUNELENBUEgsRSxDQVNBOztBQUNBLElBQU15QyxjQUFjLEdBQUcsSUFBSXJDLGtFQUFKLENBQW1CaUUsa0VBQW5CLENBQXZCO0FBQ0E1QixjQUFjLENBQUM2QixpQkFBZixHLENBRUE7O0FBQ0EsSUFBTUMsZ0JBQWdCLEdBQUcsSUFBSXRGLGlFQUFKLENBQ3ZCNkMsd0JBRHVCLEVBRXZCMEMsb0VBRnVCLENBQXpCO0FBSUFELGdCQUFnQixDQUFDRCxpQkFBakIsRyxDQUVBOztBQUNBLElBQU1HLGVBQWUsR0FBRyxJQUFJeEYsaUVBQUosQ0FDdEJpRCxxQkFEc0IsRUFFdEJ3QyxrRUFGc0IsQ0FBeEI7QUFJQUQsZUFBZSxDQUFDSCxpQkFBaEIsRyxDQUVBOztBQUNBLElBQU0xQixrQkFBa0IsR0FBRyxJQUFJM0QsaUVBQUosQ0FDekJvRCxnQkFEeUIsRUFFekJzQywwRUFGeUIsQ0FBM0I7QUFJQS9CLGtCQUFrQixDQUFDMEIsaUJBQW5CLEcsQ0FFQTs7QUFDQSxJQUFNTSxZQUFZLEdBQUcsSUFBSTNGLGlFQUFKLENBQ25CZ0Usc0JBRG1CLEVBRW5CNEIsa0VBRm1CLENBQXJCO0FBSUFELFlBQVksQ0FBQ04saUJBQWIsRyxDQUVBOztBQUNBLElBQU1iLFFBQVEsR0FBRyxJQUFJbEQsMkRBQUosQ0FDZjtBQUNFRSxVQUFRLEVBQUUsa0JBQUNxRSxRQUFELEVBQWM7QUFDdEIsUUFBTTFCLE9BQU8sR0FBRyxJQUFJckssd0RBQUosQ0FDZCtMLFFBRGMsRUFFZDdMLE1BRmMsRUFHZHFLLDZEQUhjLEVBSWRmLGVBSmMsRUFLZEksb0JBTGMsRUFNZHRKLHFCQU5jLENBQWhCO0FBUUEsUUFBTWtLLFdBQVcsR0FBR0gsT0FBTyxDQUFDSSxZQUFSLEVBQXBCO0FBQ0EsUUFBTXVCLFlBQVksR0FBRzVLLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QjRLLGlFQUF2QixDQUFyQjtBQUNBRCxnQkFBWSxDQUFDRSxNQUFiLENBQW9CMUIsV0FBcEI7QUFDRDtBQWJILENBRGUsRUFnQmZ5QixpRUFoQmUsQ0FBakIsQyxDQW1CQTs7QUFDQUUsNEVBQUEsQ0FBNEIsT0FBNUIsRUFBcUMsWUFBTTtBQUN6QyxNQUFNQyxXQUFXLEdBQUduRCxRQUFRLENBQUNtQyxXQUFULEVBQXBCO0FBRUFpQixrRUFBQSxHQUFrQkQsV0FBVyxDQUFDN00sSUFBOUI7QUFDQStNLGlFQUFBLEdBQWlCRixXQUFXLENBQUMxRCxHQUE3QjtBQUVBOEMsa0JBQWdCLENBQUM3QixJQUFqQjtBQUNELENBUEQsRSxDQVNBOztBQUNBNEMsK0VBQUEsQ0FBK0IsT0FBL0IsRUFBd0MsWUFBTTtBQUM1Q1YsY0FBWSxDQUFDbEMsSUFBYjtBQUNELENBRkQsRSxDQUlBOztBQUNBNkMsa0ZBQUEsQ0FBa0MsT0FBbEMsRUFBMkMsWUFBTTtBQUMvQ2QsaUJBQWUsQ0FBQy9CLElBQWhCO0FBQ0QsQ0FGRCxFLENBSUE7O0FBQ0EsSUFBTThDLGlCQUFpQixHQUFHLElBQUlySixpRUFBSixDQUN4QnNKLGdFQUR3QixFQUV4QnRMLFFBQVEsQ0FBQ3VMLEtBQVQsQ0FBZUMsV0FGUyxDQUExQjtBQUlBSCxpQkFBaUIsQ0FBQ0ksZ0JBQWxCLEcsQ0FFQTs7QUFDQSxJQUFNQyxpQkFBaUIsR0FBRyxJQUFJMUosaUVBQUosQ0FDeEJzSixnRUFEd0IsRUFFeEJ0TCxRQUFRLENBQUN1TCxLQUFULENBQWVJLFdBRlMsQ0FBMUI7QUFJQUQsaUJBQWlCLENBQUNELGdCQUFsQixHLENBRUE7O0FBQ0EsSUFBTUcsZ0JBQWdCLEdBQUcsSUFBSTVKLGlFQUFKLENBQ3ZCc0osZ0VBRHVCLEVBRXZCdEwsUUFBUSxDQUFDdUwsS0FBVCxDQUFlTSxVQUZRLENBQXpCO0FBSUFELGdCQUFnQixDQUFDSCxnQkFBakIsRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDak9PLElBQU1ILGVBQWUsR0FBRztBQUMzQlEsY0FBWSxFQUFFLGNBRGE7QUFFM0I1SixlQUFhLEVBQUUsZUFGWTtBQUczQkMsc0JBQW9CLEVBQUUsZ0JBSEs7QUFJM0JDLHFCQUFtQixFQUFFLHdCQUpNO0FBSzNCQyxpQkFBZSxFQUFFLHlCQUxVO0FBTTNCQyxZQUFVLEVBQUU7QUFOZSxDQUF4QjtBQVNBLElBQU02RyxZQUFZLEdBQUcsbUJBQXJCO0FBQ0EsSUFBTTBCLGdCQUFnQixHQUFHLFdBQXpCO0FBQ0EsSUFBTVIsbUJBQW1CLEdBQUcscUJBQTVCO0FBQ0EsSUFBTUUsaUJBQWlCLEdBQUcsb0JBQTFCO0FBQ0EsSUFBTUcsaUJBQWlCLEdBQUcsbUJBQTFCO0FBQ0EsSUFBTVIsaUJBQWlCLEdBQUcsbUJBQTFCO0FBQ0EsSUFBTU0seUJBQXlCLEdBQUcscUJBQWxDO0FBQ0EsSUFBTTNELFlBQVksR0FBRyxnQkFBckI7QUFDQSxJQUFNQyxXQUFXLEdBQUcsZUFBcEI7QUFDQSxJQUFNQyxjQUFjLEdBQUcsaUJBQXZCO0FBQ0EsSUFBTWdFLFVBQVUsR0FBRy9LLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1Qix1QkFBdkIsQ0FBbkI7QUFDQSxJQUFNa0wsYUFBYSxHQUFHbkwsUUFBUSxDQUFDQyxhQUFULENBQXVCLHNCQUF2QixDQUF0QjtBQUNBLElBQU1tTCxnQkFBZ0IsR0FBR3BMLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QiwyQkFBdkIsQ0FBekI7QUFDQSxJQUFNMEksZUFBZSxHQUFHLG1DQUF4QjtBQUNBLElBQU14TCxLQUFLLEdBQUcsc0NBQWQ7QUFDQSxJQUFNQyxNQUFNLEdBQUcsV0FBZjtBQUVQLElBQU0yTyxZQUFZLEdBQUcvTCxRQUFRLENBQUNDLGFBQVQsQ0FBdUJvSyxtQkFBdkIsQ0FBckI7QUFDTyxJQUFNWSxTQUFTLEdBQUdjLFlBQVksQ0FBQzlMLGFBQWIsQ0FBMkIsMEJBQTNCLENBQWxCO0FBQ0EsSUFBTWlMLFFBQVEsR0FBR2EsWUFBWSxDQUFDOUwsYUFBYixDQUEyQix5QkFBM0IsQ0FBakIsQzs7Ozs7O1VDNUJQO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3JCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsc0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7VUNOQTtVQUNBO1VBQ0E7VUFDQSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgQXBpIHtcclxuICBjb25zdHJ1Y3Rvcih0b2tlbiwgY29ob3J0KSB7XHJcbiAgICB0aGlzLl90b2tlbiA9IHRva2VuO1xyXG4gICAgdGhpcy5fY29ob3J0ID0gY29ob3J0O1xyXG4gICAgdGhpcy5fdXJsID0gXCJodHRwczovL21lc3RvLm5vbW9yZXBhcnRpZXMuY28vdjEvXCI7XHJcbiAgfVxyXG5cclxuICBfaGFuZGxlUmVzcG9uc2UocmVzKSB7XHJcbiAgICBpZiAoIXJlcy5vaykge1xyXG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoYNCe0YjQuNCx0LrQsDogJHtyZXMuc3RhdHVzfWApO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlcy5qc29uKCk7XHJcbiAgfVxyXG5cclxuICBnZXRVc2VySW5mbygpIHtcclxuICAgIHJldHVybiBmZXRjaChgJHt0aGlzLl91cmx9JHt0aGlzLl9jb2hvcnR9L3VzZXJzL21lYCwge1xyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgYXV0aG9yaXphdGlvbjogdGhpcy5fdG9rZW4sXHJcbiAgICAgICAgXCJjb250ZW50LXR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgIH0sXHJcbiAgICB9KS50aGVuKHRoaXMuX2hhbmRsZVJlc3BvbnNlKTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZVVzZXJJbmZvKG5hbWUsIGFib3V0KSB7XHJcbiAgICByZXR1cm4gZmV0Y2goYCR7dGhpcy5fdXJsfSR7dGhpcy5fY29ob3J0fS91c2Vycy9tZWAsIHtcclxuICAgICAgbWV0aG9kOiBcIlBBVENIXCIsXHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBhdXRob3JpemF0aW9uOiB0aGlzLl90b2tlbixcclxuICAgICAgICBcImNvbnRlbnQtdHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgfSxcclxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBuYW1lLCBhYm91dCB9KSxcclxuICAgIH0pLnRoZW4odGhpcy5faGFuZGxlUmVzcG9uc2UpO1xyXG4gIH1cclxuXHJcbiAgZ2V0SW5pdGlhbENhcmRzKCkge1xyXG4gICAgcmV0dXJuIGZldGNoKGAke3RoaXMuX3VybH0ke3RoaXMuX2NvaG9ydH0vY2FyZHNgLCB7XHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBhdXRob3JpemF0aW9uOiB0aGlzLl90b2tlbixcclxuICAgICAgICBcImNvbnRlbnQtdHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgfSxcclxuICAgIH0pLnRoZW4odGhpcy5faGFuZGxlUmVzcG9uc2UpO1xyXG4gIH1cclxuXHJcbiAgYWRkQ2FyZChuYW1lLCBsaW5rKSB7XHJcbiAgICByZXR1cm4gZmV0Y2goYCR7dGhpcy5fdXJsfSR7dGhpcy5fY29ob3J0fS9jYXJkc2AsIHtcclxuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIGF1dGhvcml6YXRpb246IHRoaXMuX3Rva2VuLFxyXG4gICAgICAgIFwiY29udGVudC10eXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICB9LFxyXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IG5hbWUsIGxpbmsgfSksXHJcbiAgICB9KS50aGVuKHRoaXMuX2hhbmRsZVJlc3BvbnNlKTtcclxuICB9XHJcblxyXG4gIGRlbGV0ZUNhcmQoY2FyZElkKSB7XHJcbiAgICByZXR1cm4gZmV0Y2goYCR7dGhpcy5fdXJsfSR7dGhpcy5fY29ob3J0fS9jYXJkcy8ke2NhcmRJZH1gLCB7XHJcbiAgICAgIG1ldGhvZDogXCJERUxFVEVcIixcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIGF1dGhvcml6YXRpb246IHRoaXMuX3Rva2VuLFxyXG4gICAgICAgIFwiY29udGVudC10eXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICB9LFxyXG4gICAgfSkudGhlbih0aGlzLl9oYW5kbGVSZXNwb25zZSk7XHJcbiAgfVxyXG5cclxuICBzZXRMaWtlKGNhcmRJZCkge1xyXG4gICAgcmV0dXJuIGZldGNoKGAke3RoaXMuX3VybH0ke3RoaXMuX2NvaG9ydH0vY2FyZHMvbGlrZXMvJHtjYXJkSWR9YCwge1xyXG4gICAgICBtZXRob2Q6IFwiUFVUXCIsXHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBhdXRob3JpemF0aW9uOiB0aGlzLl90b2tlbixcclxuICAgICAgICBcImNvbnRlbnQtdHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgfSxcclxuICAgIH0pLnRoZW4odGhpcy5faGFuZGxlUmVzcG9uc2UpO1xyXG4gIH1cclxuXHJcbiAgcmVtb3ZlTGlrZShjYXJkSWQpIHtcclxuICAgIHJldHVybiBmZXRjaChgJHt0aGlzLl91cmx9JHt0aGlzLl9jb2hvcnR9L2NhcmRzL2xpa2VzLyR7Y2FyZElkfWAsIHtcclxuICAgICAgbWV0aG9kOiBcIkRFTEVURVwiLFxyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgYXV0aG9yaXphdGlvbjogdGhpcy5fdG9rZW4sXHJcbiAgICAgICAgXCJjb250ZW50LXR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgIH0sXHJcbiAgICB9KS50aGVuKHRoaXMuX2hhbmRsZVJlc3BvbnNlKTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZUF2YXRhcihhdmF0YXIpIHtcclxuICAgIHJldHVybiBmZXRjaChgJHt0aGlzLl91cmx9JHt0aGlzLl9jb2hvcnR9L3VzZXJzL21lL2F2YXRhcmAsIHtcclxuICAgICAgbWV0aG9kOiBcIlBBVENIXCIsXHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBhdXRob3JpemF0aW9uOiB0aGlzLl90b2tlbixcclxuICAgICAgICBcImNvbnRlbnQtdHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgfSxcclxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBhdmF0YXIgfSksXHJcbiAgICB9KS50aGVuKHRoaXMuX2hhbmRsZVJlc3BvbnNlKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFwaTtcclxuIiwiY2xhc3MgQ2FyZCB7XHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBpdGVtLFxyXG4gICAgdXNlcklkLFxyXG4gICAgdGVtcGxhdGVTZWxlY3RvcixcclxuICAgIG9wZW5Qb3B1cFBob3RvSGFuZGxlcixcclxuICAgIG9wZW5Qb3B1cERlbGV0ZUNvbmZpcm1IYW5kbGVyLFxyXG4gICAgaGFuZGxlQnV0dG9uTGlrZUNsaWNrXHJcbiAgKSB7XHJcbiAgICB0aGlzLl9uYW1lID0gaXRlbS5uYW1lO1xyXG4gICAgdGhpcy5fbGluayA9IGl0ZW0ubGluaztcclxuICAgIHRoaXMuX2xpa2VzID0gaXRlbS5saWtlcztcclxuICAgIHRoaXMuX2NhcmRJZCA9IGl0ZW0uaWQ7XHJcbiAgICB0aGlzLl9vd25lcklkID0gaXRlbS5vd25lcklkO1xyXG4gICAgdGhpcy5fdXNlcklkID0gdXNlcklkO1xyXG4gICAgdGhpcy5fdGVtcGxhdGVTZWxlY3RvciA9IHRlbXBsYXRlU2VsZWN0b3I7XHJcbiAgICB0aGlzLl9vcGVuUG9wdXBQaG90b0hhbmRsZXIgPSBvcGVuUG9wdXBQaG90b0hhbmRsZXI7XHJcbiAgICB0aGlzLl9vcGVuUG9wdXBEZWxldGVDb25maXJtSGFuZGxlciA9IG9wZW5Qb3B1cERlbGV0ZUNvbmZpcm1IYW5kbGVyO1xyXG4gICAgdGhpcy5faGFuZGxlQnV0dG9uTGlrZUNsaWNrID0gaGFuZGxlQnV0dG9uTGlrZUNsaWNrO1xyXG4gIH1cclxuXHJcbiAgX2dldFRlbXBsYXRlKCkge1xyXG4gICAgcmV0dXJuIGRvY3VtZW50XHJcbiAgICAgIC5xdWVyeVNlbGVjdG9yKHRoaXMuX3RlbXBsYXRlU2VsZWN0b3IpXHJcbiAgICAgIC5jb250ZW50LmNsb25lTm9kZSh0cnVlKTtcclxuICB9XHJcblxyXG4gIF9zZXRMaWtlc0NvdW50KGxpa2VzKSB7XHJcbiAgICB0aGlzLl9saWtlcyA9IGxpa2VzO1xyXG4gICAgdGhpcy5fbGlrZXNDb3VudC50ZXh0Q29udGVudCA9IHRoaXMuX2xpa2VzLmxlbmd0aDtcclxuICB9XHJcblxyXG4gIF9pc0xpa2VkKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2xpa2VzLmZpbmQoKGxpa2UpID0+IGxpa2UuX2lkID09PSB0aGlzLl91c2VySWQpO1xyXG4gIH1cclxuXHJcbiAgX3NldExpa2VCdXR0b24oKSB7XHJcbiAgICBpZiAodGhpcy5faXNMaWtlZCgpKSB7XHJcbiAgICAgIHRoaXMuX2xpa2VCdXR0b24uY2xhc3NMaXN0LmFkZChcImVsZW1lbnRfX2J1dHRvbi1saWtlX3N0YXR1c19saWtlZFwiKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuX2xpa2VCdXR0b24uY2xhc3NMaXN0LnJlbW92ZShcImVsZW1lbnRfX2J1dHRvbi1saWtlX3N0YXR1c19saWtlZFwiKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIF9oYW5kbGVCdXR0b25MaWtlKGV2dCkge1xyXG4gICAgdGhpcy5faGFuZGxlQnV0dG9uTGlrZUNsaWNrKGV2dCwgdGhpcy5fY2FyZElkKS50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgIHRoaXMuX3NldExpa2VzQ291bnQoZGF0YS5saWtlcyk7XHJcbiAgICAgIHRoaXMuX3NldExpa2VCdXR0b24oKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgX3NldEV2ZW50TGlzdGVuZXJzKCkge1xyXG4gICAgdGhpcy5fZWxlbWVudFxyXG4gICAgICAucXVlcnlTZWxlY3RvcihcIi5lbGVtZW50X19waG90b1wiKVxyXG4gICAgICAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldnQpID0+IHtcclxuICAgICAgICB0aGlzLl9vcGVuUG9wdXBQaG90b0hhbmRsZXIoZXZ0LnRhcmdldCk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgIHRoaXMuX2VsZW1lbnRcclxuICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCIuZWxlbWVudF9fYnV0dG9uLWxpa2VcIilcclxuICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZ0KSA9PiB7XHJcbiAgICAgICAgdGhpcy5faGFuZGxlQnV0dG9uTGlrZShldnQpO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICB0aGlzLl9lbGVtZW50XHJcbiAgICAgIC5xdWVyeVNlbGVjdG9yKFwiLmVsZW1lbnRfX2J1dHRvbi10cmFzaFwiKVxyXG4gICAgICAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldnQpID0+IHtcclxuICAgICAgICB0aGlzLl9vcGVuUG9wdXBEZWxldGVDb25maXJtSGFuZGxlcihcclxuICAgICAgICAgIHRoaXMuX2NhcmRJZCxcclxuICAgICAgICAgIGV2dC50YXJnZXQucGFyZW50RWxlbWVudFxyXG4gICAgICAgICk7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgX3NldEVsZW1lbnRzKCkge1xyXG4gICAgdGhpcy5fbGlrZXNDb3VudCA9IHRoaXMuX2VsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5lbGVtZW50X19saWtlc1wiKTtcclxuICAgIHRoaXMuX2xpa2VCdXR0b24gPSB0aGlzLl9lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZWxlbWVudF9fYnV0dG9uLWxpa2VcIik7XHJcbiAgICB0aGlzLl9lbGVtZW50TmFtZSA9IHRoaXMuX2VsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5lbGVtZW50X19pbmZvLW5hbWVcIik7XHJcbiAgICB0aGlzLl90cmFzaEJ1dHRvbiA9IHRoaXMuX2VsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5lbGVtZW50X19idXR0b24tdHJhc2hcIik7XHJcbiAgfVxyXG5cclxuICBnZW5lcmF0ZUNhcmQoKSB7XHJcbiAgICB0aGlzLl9lbGVtZW50ID0gdGhpcy5fZ2V0VGVtcGxhdGUoKTtcclxuICAgIHRoaXMuX3NldEV2ZW50TGlzdGVuZXJzKCk7XHJcbiAgICB0aGlzLl9zZXRFbGVtZW50cygpO1xyXG5cclxuICAgIGNvbnN0IGNhcmRQaG90byA9IHRoaXMuX2VsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5lbGVtZW50X19waG90b1wiKTtcclxuICAgIGNhcmRQaG90by5zcmMgPSB0aGlzLl9saW5rO1xyXG4gICAgY2FyZFBob3RvLmFsdCA9IHRoaXMuX25hbWU7XHJcblxyXG4gICAgdGhpcy5fZWxlbWVudE5hbWUudGV4dENvbnRlbnQgPSB0aGlzLl9uYW1lO1xyXG4gICAgdGhpcy5fbGlrZXNDb3VudC50ZXh0Q29udGVudCA9IHRoaXMuX2xpa2VzLmxlbmd0aDtcclxuICAgIHRoaXMuX3NldExpa2VCdXR0b24oKTtcclxuXHJcbiAgICBpZiAodGhpcy5fdXNlcklkID09PSB0aGlzLl9vd25lcklkKSB7XHJcbiAgICAgIHRoaXMuX3RyYXNoQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJidXR0b24tdHJhc2hfdmlzaWJsZVwiKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGhpcy5fZWxlbWVudDtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhcmQ7XHJcbiIsImNsYXNzIEZvcm1WYWxpZGF0b3Ige1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAge1xyXG4gICAgICBpbnB1dFNlbGVjdG9yLFxyXG4gICAgICBzdWJtaXRCdXR0b25TZWxlY3RvcixcclxuICAgICAgaW5hY3RpdmVCdXR0b25DbGFzcyxcclxuICAgICAgaW5wdXRFcnJvckNsYXNzLFxyXG4gICAgICBlcnJvckNsYXNzLFxyXG4gICAgfSxcclxuICAgIHZhbGlkYXRpb25Gb3JtXHJcbiAgKSB7XHJcbiAgICB0aGlzLl9pbnB1dFNlbGVjdG9yID0gaW5wdXRTZWxlY3RvcjtcclxuICAgIHRoaXMuX3N1Ym1pdEJ1dHRvblNlbGVjdG9yID0gc3VibWl0QnV0dG9uU2VsZWN0b3I7XHJcbiAgICB0aGlzLl9pbmFjdGl2ZUJ1dHRvbkNsYXNzID0gaW5hY3RpdmVCdXR0b25DbGFzcztcclxuICAgIHRoaXMuX2lucHV0RXJyb3JDbGFzcyA9IGlucHV0RXJyb3JDbGFzcztcclxuICAgIHRoaXMuX2Vycm9yQ2xhc3MgPSBlcnJvckNsYXNzO1xyXG4gICAgdGhpcy5fdmFsaWRhdGlvbkZvcm0gPSB2YWxpZGF0aW9uRm9ybTtcclxuICAgIHRoaXMuX2J1dHRvbkVsZW1lbnQgPSB0aGlzLl92YWxpZGF0aW9uRm9ybS5xdWVyeVNlbGVjdG9yKFxyXG4gICAgICB0aGlzLl9zdWJtaXRCdXR0b25TZWxlY3RvclxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIC8vINCf0YDQvtCy0LXRgNGP0LXQvCDRh9GC0L4g0YXQvtGC0Y/QsdGLINC+0LTQvdC+INCy0L7Qu9C1INC90LUg0LLQsNC70LjQtNC90L5cclxuICBfaGFzSW52YWxpZElucHV0KGlucHV0TGlzdCkge1xyXG4gICAgcmV0dXJuIGlucHV0TGlzdC5zb21lKChpbnB1dEVsZW1lbnQpID0+IHtcclxuICAgICAgcmV0dXJuICFpbnB1dEVsZW1lbnQudmFsaWRpdHkudmFsaWQ7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8vINCS0LrQu9GO0YfQsNC10YIg0LrQvdC+0L/QutGDIHN1Ym1pdFxyXG4gIF9lbmFibGVTdWJtaXRCdXR0b24oKSB7XHJcbiAgICB0aGlzLl9idXR0b25FbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5faW5hY3RpdmVCdXR0b25DbGFzcyk7XHJcbiAgfVxyXG5cclxuICAvLyDQntGC0LrQu9GO0LDQtdGCINC60L3QvtC/0LrRgyBzdWJtaXRcclxuICBfZGlzYWJsZVN1Ym1pdEJ1dHRvbigpIHtcclxuICAgIHRoaXMuX2J1dHRvbkVsZW1lbnQuY2xhc3NMaXN0LmFkZCh0aGlzLl9pbmFjdGl2ZUJ1dHRvbkNsYXNzKTtcclxuICB9XHJcblxyXG4gIC8vINCf0LXRgNC10LrQu9GO0YfQsNC10Lwg0LTQvtGB0YLRg9C/0L3QvtGB0YLRjCDQutC90L7Qv9C60Lggc3VibWl0XHJcbiAgX3RvZ2dsZUJ1dHRvblN0YXRlKGlucHV0TGlzdCkge1xyXG4gICAgaWYgKHRoaXMuX2hhc0ludmFsaWRJbnB1dChpbnB1dExpc3QpKSB7XHJcbiAgICAgIHRoaXMuX2Rpc2FibGVTdWJtaXRCdXR0b24oKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuX2VuYWJsZVN1Ym1pdEJ1dHRvbigpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8g0J7RgtC+0LHRgNCw0LbQsNC10Lwg0L/QvtC70Y8g0YEg0L7RiNC40LHQutCw0LzQuFxyXG4gIF9zaG93SW5wdXRFcnJvcihpbnB1dEVsZW1lbnQsIGVycm9yTWVzc2FnZSkge1xyXG4gICAgY29uc3QgZXJyb3JFbGVtZW50ID0gdGhpcy5fdmFsaWRhdGlvbkZvcm0ucXVlcnlTZWxlY3RvcihcclxuICAgICAgYCMke2lucHV0RWxlbWVudC5pZH0tZXJyb3JgXHJcbiAgICApO1xyXG4gICAgaW5wdXRFbGVtZW50LmNsYXNzTGlzdC5hZGQodGhpcy5faW5wdXRFcnJvckNsYXNzKTtcclxuICAgIGVycm9yRWxlbWVudC50ZXh0Q29udGVudCA9IGVycm9yTWVzc2FnZTtcclxuICAgIGVycm9yRWxlbWVudC5jbGFzc0xpc3QuYWRkKHRoaXMuX2Vycm9yQ2xhc3MpO1xyXG4gIH1cclxuXHJcbiAgLy8g0KHQutGA0YvQstCw0LXQvCDQv9C+0LvRjyDRgSDQvtGI0LjQsdC60LDQvNC4XHJcbiAgX2hpZGVJbnB1dEVycm9yKGlucHV0RWxlbWVudCkge1xyXG4gICAgY29uc3QgZXJyb3JFbGVtZW50ID0gdGhpcy5fdmFsaWRhdGlvbkZvcm0ucXVlcnlTZWxlY3RvcihcclxuICAgICAgYCMke2lucHV0RWxlbWVudC5pZH0tZXJyb3JgXHJcbiAgICApO1xyXG4gICAgaW5wdXRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5faW5wdXRFcnJvckNsYXNzKTtcclxuICAgIGVycm9yRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuX2Vycm9yQ2xhc3MpO1xyXG4gICAgZXJyb3JFbGVtZW50LnRleHRDb250ZW50ID0gXCJcIjtcclxuICB9XHJcblxyXG4gIC8vINCf0YDQvtCy0LXRgNGP0Lwg0YTQvtGA0LzRgyDQvdCwINCy0LDQu9C40LTQvdC+0YHRgtGMINC/0L7Qu9C10LlcclxuICBfY2hlY2tJbnB1dFZhbGlkaXR5KGlucHV0RWxlbWVudCkge1xyXG4gICAgaWYgKCFpbnB1dEVsZW1lbnQudmFsaWRpdHkudmFsaWQpIHtcclxuICAgICAgdGhpcy5fc2hvd0lucHV0RXJyb3IoaW5wdXRFbGVtZW50LCBpbnB1dEVsZW1lbnQudmFsaWRhdGlvbk1lc3NhZ2UpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5faGlkZUlucHV0RXJyb3IoaW5wdXRFbGVtZW50KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vINCj0YHRgtCw0L3QvtCy0LrQsCDRgdC70YPRiNCw0YLQtdC70LXQuSDRgyDQv9C+0LvQtdC5INCy0LLQvtC00LBcclxuICBfc2V0RXZlbnRMaXN0ZW5lcnMoKSB7XHJcbiAgICBjb25zdCBpbnB1dExpc3QgPSBBcnJheS5mcm9tKFxyXG4gICAgICB0aGlzLl92YWxpZGF0aW9uRm9ybS5xdWVyeVNlbGVjdG9yQWxsKHRoaXMuX2lucHV0U2VsZWN0b3IpXHJcbiAgICApO1xyXG5cclxuICAgIHRoaXMuX3RvZ2dsZUJ1dHRvblN0YXRlKGlucHV0TGlzdCk7XHJcblxyXG4gICAgaW5wdXRMaXN0LmZvckVhY2goKGlucHV0RWxlbWVudCkgPT4ge1xyXG4gICAgICBpbnB1dEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsICgpID0+IHtcclxuICAgICAgICB0aGlzLl9jaGVja0lucHV0VmFsaWRpdHkoaW5wdXRFbGVtZW50KTtcclxuICAgICAgICB0aGlzLl90b2dnbGVCdXR0b25TdGF0ZShpbnB1dExpc3QpO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vINCf0L7RgdC70LUg0YHQsNCx0LzQuNGC0LAg0L7RgtC60Y7Rh9Cw0LXQvCDQutC90L7Qv9C60YMuINCt0YLQviDQvdGD0LbQvdC+INC/0L7RgdC70LUg0LTQvtCx0LDQstC70LXQvdC40LUg0L3QvtCy0L7QuSDQutCw0YLQvtGH0LrQuC5cclxuICAgIHRoaXMuX3ZhbGlkYXRpb25Gb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKCkgPT4ge1xyXG4gICAgICB0aGlzLl9kaXNhYmxlU3VibWl0QnV0dG9uKCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8vINCS0LrQu9GO0YfQsNC10Lwg0LLQsNC70LjQtNCw0YbQuNGOINGE0L7RgNC80YtcclxuICBlbmFibGVWYWxpZGF0aW9uKCkge1xyXG4gICAgdGhpcy5fc2V0RXZlbnRMaXN0ZW5lcnMoKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvcm1WYWxpZGF0b3I7XHJcbiIsImNsYXNzIFBvcHVwIHtcclxuICBjb25zdHJ1Y3Rvcihwb3B1cFNlbGVjdG9yKSB7XHJcbiAgICB0aGlzLl9wb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IocG9wdXBTZWxlY3Rvcik7XHJcbiAgICB0aGlzLl9oYW5kbGVCdXR0b25DbG9zZSA9IHRoaXMuX2hhbmRsZUJ1dHRvbkNsb3NlLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLl9oYW5kbGVFc2NDbG9zZSA9IHRoaXMuX2hhbmRsZUVzY0Nsb3NlLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLl9oYW5kbGVDbG9zZUJ5Q2xpY2tPbk92ZXJsYXkgPSB0aGlzLl9oYW5kbGVDbG9zZUJ5Q2xpY2tPbk92ZXJsYXkuYmluZChcclxuICAgICAgdGhpc1xyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIF9oYW5kbGVFc2NDbG9zZShldnQpIHtcclxuICAgIGlmIChldnQua2V5ID09PSBcIkVzY2FwZVwiKSB7XHJcbiAgICAgIHRoaXMuY2xvc2UoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIF9oYW5kbGVCdXR0b25DbG9zZShldnQpIHtcclxuICAgIGlmIChldnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcInBvcHVwX19idXR0b24tY2xvc2VcIikpIHtcclxuICAgICAgdGhpcy5jbG9zZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgX2hhbmRsZUNsb3NlQnlDbGlja09uT3ZlcmxheShldnQpIHtcclxuICAgIGlmIChldnQudGFyZ2V0ID09PSBldnQuY3VycmVudFRhcmdldCkge1xyXG4gICAgICB0aGlzLmNsb3NlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBfYWRkRXZlbnRMaXN0ZW5lcnMoKSB7XHJcbiAgICB0aGlzLl9wb3B1cC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5faGFuZGxlQnV0dG9uQ2xvc2UpO1xyXG4gICAgdGhpcy5fcG9wdXAuYWRkRXZlbnRMaXN0ZW5lcihcclxuICAgICAgXCJtb3VzZWRvd25cIixcclxuICAgICAgdGhpcy5faGFuZGxlQ2xvc2VCeUNsaWNrT25PdmVybGF5XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgb3BlbigpIHtcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIHRoaXMuX2hhbmRsZUVzY0Nsb3NlKTtcclxuICAgIHRoaXMuX3BvcHVwLmNsYXNzTGlzdC5hZGQoXCJwb3B1cF9vcGVuZWRcIik7XHJcbiAgfVxyXG5cclxuICBjbG9zZSgpIHtcclxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIHRoaXMuX2hhbmRsZUVzY0Nsb3NlKTtcclxuICAgIHRoaXMuX3BvcHVwLmNsYXNzTGlzdC5yZW1vdmUoXCJwb3B1cF9vcGVuZWRcIik7XHJcbiAgfVxyXG5cclxuICBzZXRFdmVudExpc3RlbmVycygpIHtcclxuICAgIHRoaXMuX2FkZEV2ZW50TGlzdGVuZXJzKCk7XHJcbiAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFBvcHVwO1xyXG4iLCJpbXBvcnQgUG9wdXAgZnJvbSBcIi4vUG9wdXAuanNcIjtcclxuXHJcbmNsYXNzIFBvcHVwV2l0aEZvcm0gZXh0ZW5kcyBQb3B1cCB7XHJcbiAgY29uc3RydWN0b3IoZm9ybVN1Ym1pdEhhbmRsZXIsIHBvcHVwU2VsZWN0b3IpIHtcclxuICAgIHN1cGVyKHBvcHVwU2VsZWN0b3IpO1xyXG4gICAgdGhpcy5fZm9ybVN1Ym1pdEhhbmRsZXIgPSBmb3JtU3VibWl0SGFuZGxlcjtcclxuICAgIHRoaXMuX2lucHV0TGlzdCA9IHRoaXMuX3BvcHVwLnF1ZXJ5U2VsZWN0b3JBbGwoXCIucG9wdXBfX2lucHV0XCIpO1xyXG4gICAgdGhpcy5fcG9wdXBGb3JtID0gdGhpcy5fcG9wdXAucXVlcnlTZWxlY3RvcihcIi5wb3B1cF9fZm9ybVwiKTtcclxuICAgIHRoaXMuX2hhbmRsZVN1Ym1pdCA9IHRoaXMuX2hhbmRsZVN1Ym1pdC5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5fYnV0dG9uU3VibWl0ID0gdGhpcy5fcG9wdXAucXVlcnlTZWxlY3RvcihcIi5wb3B1cF9fYnV0dG9uXCIpO1xyXG4gIH1cclxuXHJcbiAgX2dldElucHV0VmFsdWVzKCkge1xyXG4gICAgdGhpcy5faW5wdXRWYWx1ZXMgPSB7fTtcclxuICAgIHRoaXMuX2lucHV0TGlzdC5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgIHRoaXMuX2lucHV0VmFsdWVzW2l0ZW0ubmFtZV0gPSBpdGVtLnZhbHVlO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuX2lucHV0VmFsdWVzO1xyXG4gIH1cclxuXHJcbiAgX2hhbmRsZVN1Ym1pdChldnQpIHtcclxuICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgLy8g0KHQvtGF0YDQsNC90Y/QtdC8INC/0YDQtdC00YvQtNGD0YnQtdC1INC90LDQt9Cy0LDQvdC40LUg0LrQvdC+0L/QutC4INGB0LDQsdC80LjRglxyXG4gICAgY29uc3QgYnV0dG9uU3VibWl0TmFtZSA9IHRoaXMuX2J1dHRvblN1Ym1pdC50ZXh0Q29udGVudDtcclxuXHJcbiAgICBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xyXG4gICAgICB0aGlzLl9idXR0b25TdWJtaXQudGV4dENvbnRlbnQgPSBcItCh0L7RhdGA0LDQvdC10L3QuNC1Li4uXCI7XHJcbiAgICAgIGNvbnN0IGlucHV0VmFsdWVzID0gdGhpcy5fZ2V0SW5wdXRWYWx1ZXMoKTtcclxuICAgICAgcmVzb2x2ZShpbnB1dFZhbHVlcyk7XHJcbiAgICB9KVxyXG4gICAgICAudGhlbigoaW5wdXRWYWx1ZXMpID0+IHtcclxuICAgICAgICAgIFxyXG4gICAgICAgIC8vINCh0YLQsNCy0LjQvCDQsiDQvtGH0LXRgNC10LTRjCDQv9GA0L7QvNC40YEgQXBpINC4INC20LTQtdC8INC10LPQviDQstGL0L/QvtC70L3QtdC90LjRj1xyXG4gICAgICAgIC8vINC00LvRjyDQstC+0LfQstGA0LDRidC10L3QuNGPINC60L3QvtC/0LrQuCDRgdCw0LHQvNC40YIg0Log0L/QtdGA0LLQvtC90LDRh9Cw0LvQvdC+0LzRgyDQstC40LTRg1xyXG4gICAgICAgIGlmICh0aGlzLl9jYXJkSWQpIHtcclxuICAgICAgICAgIHJldHVybiB0aGlzLl9mb3JtU3VibWl0SGFuZGxlcih0aGlzLl9jYXJkSWQsIHRoaXMuX3BhcmVudEVsZW1lbnQpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICByZXR1cm4gdGhpcy5fZm9ybVN1Ym1pdEhhbmRsZXIoaW5wdXRWYWx1ZXMpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhgRXJyb3IgJHtlcnJ9YCk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5maW5hbGx5KChkYXRhKSA9PiB7XHJcbiAgICAgICAgdGhpcy5jbG9zZSgpO1xyXG4gICAgICAgIHRoaXMuX2J1dHRvblN1Ym1pdC50ZXh0Q29udGVudCA9IGJ1dHRvblN1Ym1pdE5hbWU7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgc2V0RXZlbnRMaXN0ZW5lcnMoKSB7XHJcbiAgICBzdXBlci5zZXRFdmVudExpc3RlbmVycygpO1xyXG4gICAgdGhpcy5fcG9wdXAuYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCB0aGlzLl9oYW5kbGVTdWJtaXQpO1xyXG4gIH1cclxuXHJcbiAgb3BlbihjYXJkSWQsIHBhcmVudEVsZW1lbnQpIHtcclxuICAgIHN1cGVyLm9wZW4oKTtcclxuICAgIHRoaXMuX2NhcmRJZCA9IGNhcmRJZDtcclxuICAgIHRoaXMuX3BhcmVudEVsZW1lbnQgPSBwYXJlbnRFbGVtZW50O1xyXG4gIH1cclxuXHJcbiAgY2xvc2UoKSB7XHJcbiAgICBzdXBlci5jbG9zZSgpO1xyXG4gICAgdGhpcy5fcG9wdXBGb3JtLnJlc2V0KCk7XHJcbiAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFBvcHVwV2l0aEZvcm07XHJcbiIsImltcG9ydCBQb3B1cCBmcm9tIFwiLi9Qb3B1cC5qc1wiO1xyXG5cclxuY2xhc3MgUG9wdXBXaXRoSW1hZ2UgZXh0ZW5kcyBQb3B1cCB7XHJcbiAgY29uc3RydWN0b3IocG9wdXBTZWxlY3Rvcikge1xyXG4gICAgc3VwZXIocG9wdXBTZWxlY3Rvcik7XHJcbiAgICB0aGlzLl9lbGVtZW50SW1hZ2UgPSB0aGlzLl9wb3B1cC5xdWVyeVNlbGVjdG9yKFwiLnBvcHVwX19pbWFnZVwiKTtcclxuICAgIHRoaXMuX3Bob3RvQ2FwdGlvbiA9IHRoaXMuX3BvcHVwLnF1ZXJ5U2VsZWN0b3IoXCIucG9wdXBfX2NhcHRpb25cIik7XHJcbiAgfVxyXG5cclxuICBvcGVuKHsgc3JjLCBhbHQgfSkge1xyXG4gICAgdGhpcy5fZWxlbWVudEltYWdlLnNyYyA9IHNyYztcclxuICAgIHRoaXMuX2VsZW1lbnRJbWFnZS5hbHQgPSBhbHQ7XHJcbiAgICB0aGlzLl9waG90b0NhcHRpb24udGV4dENvbnRlbnQgPSBhbHQ7XHJcbiAgICBzdXBlci5vcGVuKCk7XHJcbiAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFBvcHVwV2l0aEltYWdlO1xyXG4iLCJjbGFzcyBTZWN0aW9uIHtcclxuICBjb25zdHJ1Y3Rvcih7IHJlbmRlcmVyIH0sIGNvbnRhaW5lclNlbGVjdG9yKSB7XHJcbiAgICB0aGlzLl9yZW5kZXJlciA9IHJlbmRlcmVyO1xyXG4gICAgdGhpcy5fY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihjb250YWluZXJTZWxlY3Rvcik7XHJcbiAgfVxyXG5cclxuICBhZGRJdGVtKGVsZW1lbnQpIHtcclxuICAgIHRoaXMuX2NvbnRhaW5lci5wcmVwZW5kKGVsZW1lbnQpO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVySXRlbXMoY2FyZHMpIHtcclxuICAgIGNhcmRzLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgdGhpcy5fcmVuZGVyZXIoaXRlbSk7XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgU2VjdGlvbjtcclxuIiwiY2xhc3MgVXNlckluZm8ge1xyXG4gIGNvbnN0cnVjdG9yKHsgbmFtZVNlbGVjdG9yLCBqb2JTZWxlY3RvciwgYXZhdGFyU2VsZWN0b3IgfSkge1xyXG4gICAgdGhpcy5fdXNlck5hbWVTZWxlY3RvciA9IG5hbWVTZWxlY3RvcjtcclxuICAgIHRoaXMuX3VzZXJKb2JTZWxlY3RvciA9IGpvYlNlbGVjdG9yO1xyXG4gICAgdGhpcy5fdXNlckF2YXRhclNlbGVjdG9yID0gYXZhdGFyU2VsZWN0b3I7XHJcbiAgICB0aGlzLl91c2VyTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy5fdXNlck5hbWVTZWxlY3Rvcik7XHJcbiAgICB0aGlzLl91c2VySm9iID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLl91c2VySm9iU2VsZWN0b3IpO1xyXG4gICAgdGhpcy5fdXNlckF2YXRhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy5fdXNlckF2YXRhclNlbGVjdG9yKTtcclxuICB9XHJcblxyXG4gIGdldFVzZXJJbmZvKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbmFtZTogdGhpcy5fdXNlck5hbWUudGV4dENvbnRlbnQsXHJcbiAgICAgIGpvYjogdGhpcy5fdXNlckpvYi50ZXh0Q29udGVudCxcclxuICAgICAgaWQ6IHRoaXMuX2lkLFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHNldFVzZXJJbmZvKHVzZXJOYW1lLCB1c2VySm9iLCBpZCwgdXNlckF2YXRhcikge1xyXG4gICAgdGhpcy5fdXNlck5hbWUudGV4dENvbnRlbnQgPSB1c2VyTmFtZTtcclxuICAgIHRoaXMuX3VzZXJKb2IudGV4dENvbnRlbnQgPSB1c2VySm9iO1xyXG5cclxuICAgIGlmIChpZCkge1xyXG4gICAgICB0aGlzLl9pZCA9IGlkO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh1c2VyQXZhdGFyKSB7XHJcbiAgICAgIHRoaXMuX3VzZXJBdmF0YXIuc3JjID0gdXNlckF2YXRhcjtcclxuICAgICAgdGhpcy5fdXNlckF2YXRhci5hbHQgPSB1c2VyTmFtZTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgVXNlckluZm87XHJcbiIsImltcG9ydCBcIi4vaW5kZXguY3NzXCI7XHJcbmltcG9ydCBDYXJkIGZyb20gXCIuLi9jb21wb25lbnRzL0NhcmQuanNcIjtcclxuaW1wb3J0IEZvcm1WYWxpZGF0b3IgZnJvbSBcIi4uL2NvbXBvbmVudHMvRm9ybVZhbGlkYXRvci5qc1wiO1xyXG5pbXBvcnQgU2VjdGlvbiBmcm9tIFwiLi4vY29tcG9uZW50cy9TZWN0aW9uLmpzXCI7XHJcbmltcG9ydCBQb3B1cFdpdGhJbWFnZSBmcm9tIFwiLi4vY29tcG9uZW50cy9Qb3B1cFdpdGhJbWFnZS5qc1wiO1xyXG5pbXBvcnQgUG9wdXBXaXRoRm9ybSBmcm9tIFwiLi4vY29tcG9uZW50cy9Qb3B1cFdpdGhGb3JtLmpzXCI7XHJcbmltcG9ydCBVc2VySW5mbyBmcm9tIFwiLi4vY29tcG9uZW50cy9Vc2VySW5mby5qc1wiO1xyXG5pbXBvcnQgQXBpIGZyb20gXCIuLi9jb21wb25lbnRzL0FwaS5qc1wiO1xyXG5pbXBvcnQge1xyXG4gIHZhbGlkYXRpb25JdGVtcyxcclxuICBjYXJkVGVtcGxhdGUsXHJcbiAgY2FyZExpc3RTZWxlY3RvcixcclxuICBmb3JtUHJvZmlsZVNlbGVjdG9yLFxyXG4gIGZvcm1Qcm9maWxlQXZhdGFyLFxyXG4gIGZvcm1NZXN0b1NlbGVjdG9yLFxyXG4gIGZvcm1QaG90b1NlbGVjdG9yLFxyXG4gIGZvcm1EZWxldGVDb25maXJtU2VsZWN0b3IsXHJcbiAgbmFtZVNlbGVjdG9yLFxyXG4gIGpvYlNlbGVjdG9yLFxyXG4gIGF2YXRhclNlbGVjdG9yLFxyXG4gIGVkaXRCdXR0b24sXHJcbiAgYWRkQ2FyZEJ1dHRvbixcclxuICBlZGl0QXZhdGFyQnV0dG9uLFxyXG4gIGJ1dHRvbkxpa2VDbGFzcyxcclxuICBuYW1lSW5wdXQsXHJcbiAgam9iSW5wdXQsXHJcbiAgY29ob3J0LFxyXG4gIHRva2VuLFxyXG59IGZyb20gXCIuLi91dGlscy9jb25zdGFudHMuanNcIjtcclxuXHJcbi8vINCY0L3QuNGG0LjQsNC70LjQt9Cw0YbQuNGPIEFQSVxyXG5jb25zdCBhcGkgPSBuZXcgQXBpKHRva2VuLCBjb2hvcnQpO1xyXG5cclxuLy8g0J/QtdGA0LXQvNC10L3QvdCw0Y8g0LTQu9GPINGF0YDQsNC90LXQvdC40Y8gSUQgdXNlcmEg0LTQu9GPINC+0YLQvtCx0YDQsNC20LXQvdC40Y8g0LrQvdC+0L/QutC4INGD0LTQsNC70LXQvdC40Y8g0LrQsNGA0YLQvtGH0LrQuFxyXG5sZXQgdXNlcklkID0gXCJcIjtcclxuXHJcbi8vINCa0L7Qu9Cx0Y3QuiDRg9GB0YLQsNC90L7QstC60Lgg0L3QvtCy0L7Qs9C+INC40LzQtdC90Lgg0Lgg0LTQvtC70LbQvdC+0YHRgtC4INC/0YDQvtGE0LjQu9GPXHJcbmNvbnN0IGhhbmRsZVBvcHVwUHJvZmlsZVN1Ym1pdCA9IChpbnB1dFZhbHVlcykgPT4ge1xyXG4gIHJldHVybiBhcGkudXBkYXRlVXNlckluZm8oaW5wdXRWYWx1ZXMubmFtZSwgaW5wdXRWYWx1ZXMuam9iKS50aGVuKChkYXRhKSA9PiB7XHJcbiAgICB1c2VySW5mby5zZXRVc2VySW5mbyhkYXRhLm5hbWUsIGRhdGEuYWJvdXQpO1xyXG4gIH0pO1xyXG59O1xyXG5cclxuLy8g0JrQvtC70LHRjdC6INGB0L7RhdGA0LDQvdC10L3QuNC1INC90L7QstC+0LPQviDQsNCy0LDRgtCw0YDQsCDQv9C+0LvRjNC30L7QstCw0YLQtdC70Y9cclxuY29uc3QgaGFuZGxlUG9wdXBBdmF0YXJFZGl0ID0gKGlucHV0VmFsdWVzKSA9PiB7XHJcbiAgcmV0dXJuIGFwaS51cGRhdGVBdmF0YXIoaW5wdXRWYWx1ZXMuYXZhdGFyTGluaykudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgdXNlckluZm8uc2V0VXNlckluZm8oZGF0YS5uYW1lLCBkYXRhLmFib3V0LCBkYXRhLl9pZCwgZGF0YS5hdmF0YXIpO1xyXG4gIH0pO1xyXG59O1xyXG5cclxuLy8g0JrQvtC70LHRjdC6INGD0LTQsNC70LXQvdC40Y8g0LrQsNGA0YLQvtGH0LrQuFxyXG5jb25zdCBoYW5kbGVDYXJkRGVsZXRlID0gKGNhcmRJZCwgcGFyZW50RWxlbWVudCkgPT4ge1xyXG4gIHJldHVybiBhcGkuZGVsZXRlQ2FyZChjYXJkSWQpLnRoZW4oKGRhdGEpID0+IHtcclxuICAgIHBhcmVudEVsZW1lbnQucmVtb3ZlKCk7XHJcbiAgICByZXR1cm4gZGF0YTtcclxuICB9KTtcclxufTtcclxuXHJcbi8vINCa0L7Qu9Cx0Y3QuiDQvtGC0LrRgNGL0YLQuNGPINC60LDRgNGC0L7Rh9C60Lgg0LzQtdGB0YLQsCDQv9C+INC60LvQuNC60YMg0L3QsCDQvdC10LVcclxuY29uc3QgaGFuZGxlQ2FyZENsaWNrID0gKGVsZW1lbnRQaG90bykgPT4ge1xyXG4gIHBvcHVwV2l0aEltYWdlLm9wZW4oZWxlbWVudFBob3RvKTtcclxufTtcclxuXHJcbi8vINCa0L7Qu9Cx0Y3QuiDQvtGC0LrRgNGL0YLQuNGPINGE0L7RgNC80Ysg0L/QvtC00YLQstC10YDQttC00LXQvdC40Y8g0YPQtNCw0LvQtdC90LjRjyDRgdC+0LHRgdGC0LLQtdC90L3QvtC5INC60LDRgNGC0L7Rh9C60LhcclxuY29uc3QgaGFuZGxlQ2FyZENsaWNrVHJhc2ggPSAoY2FyZElkLCBwYXJlbnRFbGVtZW50KSA9PiB7XHJcbiAgcG9wdXBEZWxldGVDb25maXJtLm9wZW4oY2FyZElkLCBwYXJlbnRFbGVtZW50KTtcclxufTtcclxuXHJcbi8vINCa0L7Qu9Cx0Y3QuiDQvdCw0LbQsNGC0LjRjyDQvdCwINC60L3QvtC/0LrRgyDQu9Cw0LnQulxyXG5jb25zdCBoYW5kbGVCdXR0b25MaWtlQ2xpY2sgPSAoZXZ0LCBjYXJkSWQpID0+IHtcclxuICBjb25zdCBldmVudFRhcmdldCA9IGV2dC50YXJnZXQ7XHJcbiAgaWYgKGV2ZW50VGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhidXR0b25MaWtlQ2xhc3MpKSB7XHJcbiAgICByZXR1cm4gYXBpLnJlbW92ZUxpa2UoY2FyZElkKTtcclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuIGFwaS5zZXRMaWtlKGNhcmRJZCk7XHJcbiAgfVxyXG59O1xyXG5cclxuLy8g0JrQvtC70LHRjdC6INC00L7QsdCw0LLQu9GP0LXRgiDQvdC+0LLRg9GOINC60LDRgNGC0L7Rh9C60YMg0L3QsCDRhNC+0YDQvNGDXHJcbmNvbnN0IGhhbmRsZVBvcHVwTWVzdG9TdWJtaXQgPSAoaW5wdXRWYWx1ZXMpID0+IHtcclxuICByZXR1cm4gYXBpLmFkZENhcmQoaW5wdXRWYWx1ZXMuY2FyZE5hbWUsIGlucHV0VmFsdWVzLmxpbmspLnRoZW4oKGRhdGEpID0+IHtcclxuICAgIGNvbnN0IG5ld0NhcmQgPSBuZXcgQ2FyZChcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6IGRhdGEubmFtZSxcclxuICAgICAgICBsaW5rOiBkYXRhLmxpbmssXHJcbiAgICAgICAgbGlrZXM6IGRhdGEubGlrZXMsXHJcbiAgICAgICAgaWQ6IGRhdGEuX2lkLFxyXG4gICAgICAgIG93bmVySWQ6IGRhdGEub3duZXIuX2lkLFxyXG4gICAgICB9LFxyXG4gICAgICB1c2VySWQsXHJcbiAgICAgIGNhcmRUZW1wbGF0ZSxcclxuICAgICAgaGFuZGxlQ2FyZENsaWNrLFxyXG4gICAgICBoYW5kbGVDYXJkQ2xpY2tUcmFzaCxcclxuICAgICAgaGFuZGxlQnV0dG9uTGlrZUNsaWNrXHJcbiAgICApO1xyXG4gICAgY29uc3QgY2FyZEVsZW1lbnQgPSBuZXdDYXJkLmdlbmVyYXRlQ2FyZCgpO1xyXG4gICAgY2FyZExpc3QuYWRkSXRlbShjYXJkRWxlbWVudCk7XHJcbiAgfSk7XHJcbn07XHJcblxyXG4vLyDQmtCw0YDRgtC+0YfQutCwINC/0YDQvtGE0LjQu9GPXHJcbmNvbnN0IHVzZXJJbmZvID0gbmV3IFVzZXJJbmZvKHsgbmFtZVNlbGVjdG9yLCBqb2JTZWxlY3RvciwgYXZhdGFyU2VsZWN0b3IgfSk7XHJcblxyXG4vLyDQn9C10YDQstC+0L3QsNGH0LDQu9GM0L3QvtC1INC30LDQv9C+0LvQvdC10L3QuNC1INC/0YDQvtGE0LjQu9GPXHJcbmNvbnN0IHNldFVzZXJJbmZvID0gKHVzZXJEYXRhKSA9PiB7XHJcbiAgY29uc3QgeyBuYW1lLCBhYm91dCwgYXZhdGFyLCBfaWQgfSA9IHVzZXJEYXRhO1xyXG4gIHVzZXJJbmZvLnNldFVzZXJJbmZvKG5hbWUsIGFib3V0LCBfaWQsIGF2YXRhcik7XHJcbiAgdXNlcklkID0gX2lkO1xyXG59O1xyXG5cclxuLy8g0J/QtdGA0LLQvtC90LDRh9Cw0LvRjNC90L7QtSDQt9Cw0L/QvtC70L3QtdC90LjQtSDQutCw0YDRgtC+0YfQtdC6XHJcbmNvbnN0IHNldEluaXRpYWxDYWRzID0gKGluaXRpYWxDYXJkcykgPT4ge1xyXG4gIGNvbnN0IGl0ZW1zID0gaW5pdGlhbENhcmRzLm1hcCgoY2FyZCkgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbmFtZTogY2FyZC5uYW1lLFxyXG4gICAgICBsaW5rOiBjYXJkLmxpbmssXHJcbiAgICAgIGxpa2VzOiBjYXJkLmxpa2VzLFxyXG4gICAgICBpZDogY2FyZC5faWQsXHJcbiAgICAgIG93bmVySWQ6IGNhcmQub3duZXIuX2lkLFxyXG4gICAgfTtcclxuICB9KTtcclxuICBjYXJkTGlzdC5yZW5kZXJJdGVtcyhpdGVtcyk7XHJcbn07XHJcblxyXG4vLyDQodC40L3RhdGA0L7QvdC90L7QtSDQv9C+0LvRg9GH0LXQvdC40LUg0LTQsNC90L3Ri9GFINC/0L7Qu9GM0LfQvtCy0LDRgtC10LvRjyDQuCDQv9C10YDQstC+0L3QsNGH0LDQu9GM0L3Ri9GFINC60LDRgNGC0L7Rh9C10LpcclxuUHJvbWlzZS5hbGwoW2FwaS5nZXRVc2VySW5mbygpLCBhcGkuZ2V0SW5pdGlhbENhcmRzKCldKVxyXG4gIC50aGVuKChbdXNlckRhdGEsIGluaXRpYWxDYXJkc10pID0+IHtcclxuICAgIHNldFVzZXJJbmZvKHVzZXJEYXRhKTtcclxuICAgIHNldEluaXRpYWxDYWRzKGluaXRpYWxDYXJkcyk7XHJcbiAgfSlcclxuICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgY29uc29sZS5sb2coYNCe0YjQuNCx0LrQsDogJHtlcnJ9YCk7XHJcbiAgfSk7XHJcblxyXG4vLyDQn9C+0L/QsNC/INGBINC60LDRgNGC0LjQvdC60L7QuVxyXG5jb25zdCBwb3B1cFdpdGhJbWFnZSA9IG5ldyBQb3B1cFdpdGhJbWFnZShmb3JtUGhvdG9TZWxlY3Rvcik7XHJcbnBvcHVwV2l0aEltYWdlLnNldEV2ZW50TGlzdGVuZXJzKCk7XHJcblxyXG4vLyDQn9C+0L/QsNC/INC40LfQvNC10L3QtdC90LjQtSDQv9GA0L7RhNC40LvRj1xyXG5jb25zdCBwb3B1cEVkaXRQcm9maWxlID0gbmV3IFBvcHVwV2l0aEZvcm0oXHJcbiAgaGFuZGxlUG9wdXBQcm9maWxlU3VibWl0LFxyXG4gIGZvcm1Qcm9maWxlU2VsZWN0b3JcclxuKTtcclxucG9wdXBFZGl0UHJvZmlsZS5zZXRFdmVudExpc3RlbmVycygpO1xyXG5cclxuLy8g0J/QvtC/0LDQvyDQuNC30LzQtdC90LXQvdC40LUg0L/RgNC+0YTQuNC70Y9cclxuY29uc3QgcG9wdXBFZGl0QXZhdGFyID0gbmV3IFBvcHVwV2l0aEZvcm0oXHJcbiAgaGFuZGxlUG9wdXBBdmF0YXJFZGl0LFxyXG4gIGZvcm1Qcm9maWxlQXZhdGFyXHJcbik7XHJcbnBvcHVwRWRpdEF2YXRhci5zZXRFdmVudExpc3RlbmVycygpO1xyXG5cclxuLy8g0J/QvtC/0LDQvyDQv9C+0LTQstC10YDQttC00LXQvdC40LUg0YPQtNCw0LvQtdC90LjRj1xyXG5jb25zdCBwb3B1cERlbGV0ZUNvbmZpcm0gPSBuZXcgUG9wdXBXaXRoRm9ybShcclxuICBoYW5kbGVDYXJkRGVsZXRlLFxyXG4gIGZvcm1EZWxldGVDb25maXJtU2VsZWN0b3JcclxuKTtcclxucG9wdXBEZWxldGVDb25maXJtLnNldEV2ZW50TGlzdGVuZXJzKCk7XHJcblxyXG4vLyDQn9C+0L/QsNC/INC00L7QsdCw0LLQu9C10L3QuNC1INC60LDRgNGC0L7Rh9C60LhcclxuY29uc3QgcG9wdXBOZXdDYXJkID0gbmV3IFBvcHVwV2l0aEZvcm0oXHJcbiAgaGFuZGxlUG9wdXBNZXN0b1N1Ym1pdCxcclxuICBmb3JtTWVzdG9TZWxlY3RvclxyXG4pO1xyXG5wb3B1cE5ld0NhcmQuc2V0RXZlbnRMaXN0ZW5lcnMoKTtcclxuXHJcbi8vINCh0L7Qt9C00LDQtdC8INGB0LXQutGG0LjRjiDRgSDQutCw0YDRgtC+0YfQutCw0LzQuFxyXG5jb25zdCBjYXJkTGlzdCA9IG5ldyBTZWN0aW9uKFxyXG4gIHtcclxuICAgIHJlbmRlcmVyOiAoY2FyZEl0ZW0pID0+IHtcclxuICAgICAgY29uc3QgbmV3Q2FyZCA9IG5ldyBDYXJkKFxyXG4gICAgICAgIGNhcmRJdGVtLFxyXG4gICAgICAgIHVzZXJJZCxcclxuICAgICAgICBjYXJkVGVtcGxhdGUsXHJcbiAgICAgICAgaGFuZGxlQ2FyZENsaWNrLFxyXG4gICAgICAgIGhhbmRsZUNhcmRDbGlja1RyYXNoLFxyXG4gICAgICAgIGhhbmRsZUJ1dHRvbkxpa2VDbGlja1xyXG4gICAgICApO1xyXG4gICAgICBjb25zdCBjYXJkRWxlbWVudCA9IG5ld0NhcmQuZ2VuZXJhdGVDYXJkKCk7XHJcbiAgICAgIGNvbnN0IGNhcmRFbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoY2FyZExpc3RTZWxlY3Rvcik7XHJcbiAgICAgIGNhcmRFbGVtZW50cy5hcHBlbmQoY2FyZEVsZW1lbnQpO1xyXG4gICAgfSxcclxuICB9LFxyXG4gIGNhcmRMaXN0U2VsZWN0b3JcclxuKTtcclxuXHJcbi8vINCe0YLQutGA0YvQstCw0LXRgiDRhNC+0YDQvNGDINC40LfQvNC10L3QtdC90LjRjyDQtNCw0L3QvdGL0YUg0L/RgNC+0YTQuNC70Y9cclxuZWRpdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gIGNvbnN0IHByb2ZpbGVEYXRhID0gdXNlckluZm8uZ2V0VXNlckluZm8oKTtcclxuXHJcbiAgbmFtZUlucHV0LnZhbHVlID0gcHJvZmlsZURhdGEubmFtZTtcclxuICBqb2JJbnB1dC52YWx1ZSA9IHByb2ZpbGVEYXRhLmpvYjtcclxuXHJcbiAgcG9wdXBFZGl0UHJvZmlsZS5vcGVuKCk7XHJcbn0pO1xyXG5cclxuLy8g0J7RgtC60YDRi9Cy0LDQtdGCINGE0L7RgNC80YMg0LTQvtCx0LDQstC70LXQvdC40Y8g0L3QvtCy0L7QuSDQutCw0YDRgtC+0YfQutC4XHJcbmFkZENhcmRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICBwb3B1cE5ld0NhcmQub3BlbigpO1xyXG59KTtcclxuXHJcbi8vINCe0YLQutGA0YvQstCw0LXRgiDRhNC+0YDQvNGDINC40LfQvNC10L3QtdC90LjRjyDQsNCy0LDRgtCw0YDQsCDQv9C+0LvRjNC30L7QstCw0YLQtdC70Y9cclxuZWRpdEF2YXRhckJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gIHBvcHVwRWRpdEF2YXRhci5vcGVuKCk7XHJcbn0pO1xyXG5cclxuLy8g0JLQutC70Y7Rh9Cw0LXRgiDQstCw0LvQuNC00LDRhtC40Y4g0YTQvtGA0LzRiyDQv9GA0L7RhNC40LvRj1xyXG5jb25zdCBwcm9maWxlVmFsaWRhdGlvbiA9IG5ldyBGb3JtVmFsaWRhdG9yKFxyXG4gIHZhbGlkYXRpb25JdGVtcyxcclxuICBkb2N1bWVudC5mb3Jtcy5mb3JtUHJvZmlsZVxyXG4pO1xyXG5wcm9maWxlVmFsaWRhdGlvbi5lbmFibGVWYWxpZGF0aW9uKCk7XHJcblxyXG4vLyDQktC60LvRjtGH0LDQtdGCINCy0LDQu9C40LTQsNGG0LjRjiDRhNC+0YDQvNGLINCy0LLQvtC00LAg0L3QvtCy0L7QuSDQutCw0YDRgtC+0YfQutC4XHJcbmNvbnN0IG5ld0NhcmRWYWxpZGF0aW9uID0gbmV3IEZvcm1WYWxpZGF0b3IoXHJcbiAgdmFsaWRhdGlvbkl0ZW1zLFxyXG4gIGRvY3VtZW50LmZvcm1zLmZvcm1OZXdDYXJkXHJcbik7XHJcbm5ld0NhcmRWYWxpZGF0aW9uLmVuYWJsZVZhbGlkYXRpb24oKTtcclxuXHJcbi8vINCS0LrQu9GO0YfQsNC10YIg0LLQsNC70LjQtNCw0YbQuNGOINGE0L7RgNC80Ysg0LLQstC+0LTQsCDQvdC+0LLQvtC5INC60LDRgNGC0L7Rh9C60LhcclxuY29uc3QgYXZhdGFyVmFsaWRhdGlvbiA9IG5ldyBGb3JtVmFsaWRhdG9yKFxyXG4gIHZhbGlkYXRpb25JdGVtcyxcclxuICBkb2N1bWVudC5mb3Jtcy5mb3JtQXZhdGFyXHJcbik7XHJcbmF2YXRhclZhbGlkYXRpb24uZW5hYmxlVmFsaWRhdGlvbigpO1xyXG4iLCJleHBvcnQgY29uc3QgdmFsaWRhdGlvbkl0ZW1zID0ge1xyXG4gICAgZm9ybVNlbGVjdG9yOiAnLnBvcHVwX19mb3JtJyxcclxuICAgIGlucHV0U2VsZWN0b3I6ICcucG9wdXBfX2lucHV0JyxcclxuICAgIHN1Ym1pdEJ1dHRvblNlbGVjdG9yOiAnLnBvcHVwX19idXR0b24nLFxyXG4gICAgaW5hY3RpdmVCdXR0b25DbGFzczogJ3BvcHVwX19idXR0b25fZGlzYWJsZWQnLFxyXG4gICAgaW5wdXRFcnJvckNsYXNzOiAncG9wdXBfX2lucHV0X3R5cGVfZXJyb3InLFxyXG4gICAgZXJyb3JDbGFzczogJ3BvcHVwX19lcnJvcl92aXNpYmxlJ1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGNhcmRUZW1wbGF0ZSA9ICcjZWxlbWVudC10ZW1wbGF0ZSc7XHJcbmV4cG9ydCBjb25zdCBjYXJkTGlzdFNlbGVjdG9yID0gJy5lbGVtZW50cyc7XHJcbmV4cG9ydCBjb25zdCBmb3JtUHJvZmlsZVNlbGVjdG9yID0gJy5wb3B1cF9mb3JtX3Byb2ZpbGUnO1xyXG5leHBvcnQgY29uc3QgZm9ybVByb2ZpbGVBdmF0YXIgPSAnLnBvcHVwX2Zvcm1fYXZhdGFyJztcclxuZXhwb3J0IGNvbnN0IGZvcm1NZXN0b1NlbGVjdG9yID0gJy5wb3B1cF9mb3JtX21lc3RvJztcclxuZXhwb3J0IGNvbnN0IGZvcm1QaG90b1NlbGVjdG9yID0gJy5wb3B1cF9mb3JtX3Bob3RvJztcclxuZXhwb3J0IGNvbnN0IGZvcm1EZWxldGVDb25maXJtU2VsZWN0b3IgPSAnLnBvcHVwX2Zvcm1fY29uZmlybSc7IFxyXG5leHBvcnQgY29uc3QgbmFtZVNlbGVjdG9yID0gJy5wcm9maWxlX19uYW1lJztcclxuZXhwb3J0IGNvbnN0IGpvYlNlbGVjdG9yID0gJy5wcm9maWxlX19qb2InO1xyXG5leHBvcnQgY29uc3QgYXZhdGFyU2VsZWN0b3IgPSAnLnByb2ZpbGVfX2ltYWdlJztcclxuZXhwb3J0IGNvbnN0IGVkaXRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvZmlsZV9fYnV0dG9uLWVkaXQnKTtcclxuZXhwb3J0IGNvbnN0IGFkZENhcmRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvZmlsZV9fYnV0dG9uLWFkZCcpO1xyXG5leHBvcnQgY29uc3QgZWRpdEF2YXRhckJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9maWxlX19pbWFnZS1jb250YWluZXInKTtcclxuZXhwb3J0IGNvbnN0IGJ1dHRvbkxpa2VDbGFzcyA9ICdlbGVtZW50X19idXR0b24tbGlrZV9zdGF0dXNfbGlrZWQnO1xyXG5leHBvcnQgY29uc3QgdG9rZW4gPSAnOGExNGNlYjMtNzM5Mi00YTQ0LWE2YmItODA4MGI5YWE1NjU3JztcclxuZXhwb3J0IGNvbnN0IGNvaG9ydCA9ICdjb2hvcnQtMTcnO1xyXG5cclxuY29uc3QgcG9wdXBQcm9maWxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihmb3JtUHJvZmlsZVNlbGVjdG9yKTtcclxuZXhwb3J0IGNvbnN0IG5hbWVJbnB1dCA9IHBvcHVwUHJvZmlsZS5xdWVyeVNlbGVjdG9yKCcucG9wdXBfX2lucHV0X2ZpZWxkX25hbWUnKTtcclxuZXhwb3J0IGNvbnN0IGpvYklucHV0ID0gcG9wdXBQcm9maWxlLnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cF9faW5wdXRfZmllbGRfam9iJyk7XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdGlmKF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0pIHtcblx0XHRyZXR1cm4gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZVxuX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL3BhZ2VzL2luZGV4LmpzXCIpO1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgdXNlZCAnZXhwb3J0cycgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxuIl0sInNvdXJjZVJvb3QiOiIifQ==