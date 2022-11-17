import Card from './Card.js';
import FormValidator from './FormValidator.js';

const editBtn = document.querySelector('.profile__edit-btn');
const profilePopup = document.querySelector('.popup_type_edit-profile');
const profilePopupForm = profilePopup.querySelector('.popup__form');
const profilePopupFormNameField = profilePopupForm.querySelector('.popup__form-item_el_name');
const profilePopupFormAboutField = profilePopupForm.querySelector('.popup__form-item_el_about');
const userName = document.querySelector('.profile__name');
const userAbout = document.querySelector('.profile__about');

const addBtn = document.querySelector('.profile__add-btn');
const addPicturePopup = document.querySelector('.popup_type_add-picture');
const cardTitle = addPicturePopup.querySelector('.popup__form-item_el_card-name');
const cardImageLink = addPicturePopup.querySelector('.popup__form-item_el_link');
const addPicPopupSubmitBtn = addPicturePopup.querySelector('.popup__save-btn');

const closeButtons = document.querySelectorAll('.popup__close-btn');

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

const validationObject = {
  formSelector: '.popup__form',
  inputSelector: '.popup__form-item',
  submitButtonSelector: '.popup__save-btn',
  inactiveButtonClass: 'popup__save-btn_disabled',
  inputErrorClass: 'popup__form-item_invalid',
  errorClass: 'popup__input-error_visible'
}

const profilePopupFormValidator = new FormValidator(validationObject, profilePopup);
const addPicturePopupFormValidator = new FormValidator(validationObject, addPicturePopup);

closeButtons.forEach((button) => {
  const popup = button.closest('.popup');
  button.addEventListener('click', () => closePopup(popup));
});

const handleOutOfPopupClicking = (evt) => {
  const popupName = evt.currentTarget;
  const popupContent = popupName.querySelector('.popup__content');
  if (!popupContent.contains(evt.target)) {
    closePopup(popupName);
  }
}

const handleEscapePressing = (evt) => {
  if (evt.key === 'Escape') {
    const popupName = document.querySelector('.popup_opened');
    closePopup(popupName);
  }
}

const openPopup = (popupName) => {
  popupName.classList.add('popup_opened');
  popupName.addEventListener('click', handleOutOfPopupClicking);
  document.addEventListener('keydown', handleEscapePressing)
}

const closePopup = (popupName) => {
  popupName.classList.remove('popup_opened');
  popupName.removeEventListener('click', handleOutOfPopupClicking);
  document.removeEventListener('keydown', handleEscapePressing);
}

const addCard = (cardInfo) => {
  const newCard = new Card(cardInfo.name, cardInfo.link, '#card', openPopup).generateCard();
  document.querySelector('.gallery__list').prepend(newCard);
}

initialCards.forEach((item) => {
  addCard(item);
});

const openEditPopup = () => {
  openPopup(profilePopup);
  profilePopupFormNameField.value = userName.textContent;
  profilePopupFormAboutField.value = userAbout.textContent;
}

editBtn.addEventListener('click', openEditPopup);

profilePopupFormValidator.enableValidation();

function editProfileInfo(evt) {
  evt.preventDefault();
  userName.textContent = profilePopupFormNameField.value;
  userAbout.textContent = profilePopupFormAboutField.value;
  closePopup(profilePopup);
}

profilePopupForm.addEventListener('submit', editProfileInfo);

const handleAddPictureSubmit = (evt) => {
  evt.preventDefault();

  addCard({
    name: `${cardTitle.value}`,
    link: `${cardImageLink.value}`
  });

  evt.target.reset();
  closePopup(addPicturePopup);
}

const handleOpenAddPicturePopup = () => {
  openPopup(addPicturePopup);
  addPicturePopupFormValidator.disableSubmitBtn();
}

addBtn.addEventListener('click', handleOpenAddPicturePopup);

addPicturePopupFormValidator.enableValidation();

addPicturePopup.addEventListener('submit', handleAddPictureSubmit);
