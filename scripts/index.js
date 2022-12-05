import Card from './Card.js';
import FormValidator from './FormValidator.js';
import initialCards from './initialCards.js';
import PopupWithForm from './PopupWithForm copy.js';
import PopupWithImage from './PopupWithImage.js';
import UserInfo from './UserInfo.js';

const editionBtn = document.querySelector('.profile__edit-btn');
const openingAddPicPopupBtn = document.querySelector('.profile__add-btn');

const validationObject = {
  formSelector: '.popup__form',
  inputSelector: '.popup__form-item',
  submitButtonSelector: '.popup__save-btn',
  inactiveButtonClass: 'popup__save-btn_disabled',
  inputErrorClass: 'popup__form-item_invalid',
  errorClass: 'popup__input-error_visible'
}

const ProfileEditionPopup = new PopupWithForm('.popup_type_edit-profile', handleEditProfileSubmit);
const addingPicturePopup = new PopupWithForm('.popup_type_add-picture', handleAddPictureSubmit);
const userInfo = new UserInfo('.profile__name', '.profile__about');

const profilePopupFormValidator = new FormValidator(validationObject, ProfileEditionPopup.popup);
const addingPicturePopupFormValidator = new FormValidator(validationObject, addingPicturePopup.popup);

function handleCardClick(link, name) {
  const popupWithImage = new PopupWithImage('.popup_type_open-picture', link, name);
  popupWithImage.open();
  popupWithImage.setEventListeners();
}

const createCard = (cardInfo) => {
  return new Card(cardInfo.name, cardInfo.link, '#card', () => {handleCardClick(cardInfo.link, cardInfo.name)}).generateCard();
}

const addCard = (cardInfo) => {
  document.querySelector('.gallery__list').prepend(createCard(cardInfo));
}

initialCards.forEach((item) => {
  addCard(item);
});

function handleEditProfileSubmit(evt) {
   evt.preventDefault();
   const inputValues = ProfileEditionPopup.getInputValues();
   userInfo.setUserInfo(inputValues[0], inputValues[1]);
   ProfileEditionPopup.close();
}

const openEditPopup = () => {
  const presentUserInfo = userInfo.getUserInfo();
  ProfileEditionPopup.fields[0].value = presentUserInfo.userName;
  ProfileEditionPopup.fields[1].value = presentUserInfo.userInfo;
  ProfileEditionPopup.open();
}

editionBtn.addEventListener('click', openEditPopup);
ProfileEditionPopup.setEventListeners();

profilePopupFormValidator.enableValidation();

function handleAddPictureSubmit(evt) {
  evt.preventDefault();

  const inputValues = addingPicturePopup.getInputValues();

  addCard({
    name: `${inputValues[0]}`,
    link: `${inputValues[1]}`
  });

  evt.target.reset();
  addingPicturePopup.close();
  console.log('handle add pic submit');
}

const handleOpenAddPicturePopup = () => {
  addingPicturePopup.open();
  addingPicturePopupFormValidator.disableSubmitBtn();
}

openingAddPicPopupBtn.addEventListener('click', handleOpenAddPicturePopup);
addingPicturePopup.setEventListeners();
addingPicturePopupFormValidator.enableValidation();
