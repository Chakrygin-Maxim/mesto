const popup = document.querySelector('.popup');
const closeButton = popup.querySelector('.popup__button-close');
const formElement = popup.querySelector('.popup__container');
const nameInput = popup.querySelector('.popup__input_field_name');
const jobInput = popup.querySelector('.popup__input_field_job');
const editButton = document.querySelector('.profile__button-edit');
const name = document.querySelector('.profile__name');
const job = document.querySelector('.profile__job');
const cardsElements = document.querySelector('.elements');

const initialCards = [
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

const renderEditProfile = function () {
    popup.classList.toggle('popup_opened');
};

const popupCloseByClickOnOverlay = function (e) {
    if (e.target == e.currentTarget) {
        renderEditProfile();
    }
};

const closeButtonOnClick = function () {
    renderEditProfile();
}

const editButtonOnClick = function () {
    nameInput.value = name.innerText;
    jobInput.value = job.innerText;

    renderEditProfile();
};

const popupSubmit = function (e) {
    e.preventDefault();

    name.textContent = nameInput.value;
    job.textContent = jobInput.value;

    renderEditProfile();
};

const addCards = function (cardLink, name) {

    const cardTemplate = document.querySelector('#element-template').content;
    const cardElement = cardTemplate.cloneNode(true);

    const cardPhoto = cardElement.querySelector('.element__photo');
    cardPhoto.src = cardLink;
    cardPhoto.alt = name;

    cardElement.querySelector('.element__info-name').textContent = name;

    const likeButton = cardElement.querySelector('.element__button-like');
    likeButton.addEventListener('click', evt => {
        const eventTarget = evt.target;
        eventTarget.classList.toggle('element__button-like_status_liked');
    });

    const delButton = cardElement.querySelector('.element__button-trash');
    delButton.addEventListener('click', evt => {
        evt.target.parentElement.remove();
    })

    cardsElements.append(cardElement);

};

popup.addEventListener('click', popupCloseByClickOnOverlay);
editButton.addEventListener('click', editButtonOnClick);
closeButton.addEventListener('click', closeButtonOnClick);
formElement.addEventListener('submit', popupSubmit);

initialCards.forEach(card => addCards(card.link, card.name));