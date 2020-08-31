const popup = document.querySelector('.popup');
const closeButton = popup.querySelector('.popup__button-close');
const formElement = popup.querySelector('.popup__container');
const nameInput = popup.querySelector('.popup__name');
const jobInput = popup.querySelector('.popup__job');
const editButton = document.querySelector('.profile__button-edit');
const name = document.querySelector('.profile__name');
const job = document.querySelector('.profile__job');

const renderEditProfile = () => {
    popup.classList.toggle('popup_opened');
}

const popupCloseByClickOnOverlay = (e)=>{
    
    if (e.target == e.currentTarget){
        renderEditProfile();
    }
};

editButton.addEventListener('click', function (e) {
    nameInput.value = name.innerText;
    jobInput.value = job.innerText;

    renderEditProfile();
});

closeButton.addEventListener('click', function (e) {
    e.preventDefault();
    renderEditProfile();
});

formElement.addEventListener('submit', function (e) {
    e.preventDefault();

    name.textContent = nameInput.value;
    job.textContent = jobInput.value;

    renderEditProfile();
});

popup.addEventListener('click', popupCloseByClickOnOverlay);

