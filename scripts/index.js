const popup = document.querySelector('.popup');
const closeButton = popup.querySelector('.popup__button-close');
const formElement = popup.querySelector('.popup__container');
const nameInput = popup.querySelector('.popup__input_field_name');
const jobInput = popup.querySelector('.popup__input_field_job');
const editButton = document.querySelector('.profile__button-edit');
const name = document.querySelector('.profile__name');
const job = document.querySelector('.profile__job');

const renderEditProfile = function () {
    popup.classList.toggle('popup_opened');
};

const popupCloseByClickOnOverlay = function (e) {
    if (e.target == e.currentTarget) {
        renderEditProfile();
    }
};

const closeButtonOnClick = function (){
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

popup.addEventListener('click', popupCloseByClickOnOverlay);
editButton.addEventListener('click', editButtonOnClick);
closeButton.addEventListener('click', closeButtonOnClick);
formElement.addEventListener('submit', popupSubmit);