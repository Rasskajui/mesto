import './index.css';
import Card from '../scripts/components/Card.js';
import FormValidator from '../scripts/components/FormValidator.js';
import PopupWithForm from '../scripts/components/PopupWithForm.js';
import PopupWithImage from '../scripts/components/PopupWithImage.js';
import UserInfo from '../scripts/components/UserInfo.js';
import Section from '../scripts/components/Section.js';
import Api from '../scripts/components/Api.js';
import {editionBtn, openingAddPicPopupBtn, validationObject, userName, userAbout, userAvatar} from '../scripts/utils/constants.js'

const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-56',
  headers: {
    authorization: '2f1089fd-d72d-4f9a-94ac-821334db37b8',
    'Content-Type': 'application/json'
  }
});

api.getUserInfo()
.then((userInfo) => {
  userName.textContent = userInfo.name;
  userAbout.textContent = userInfo.about;
  userAvatar.src = userInfo.avatar;
});

api.getCards()
  .then((data) => {
    return data.map((card) => ({name: card.name, link: card.link}));
  })
  .then((cardsInfo) => {
    return new Section(
      {
        items: cardsInfo,
        renderer: (cardInfo) => {
          const newCard = createCard(cardInfo);
          cardSection.addItem(newCard);
        }
      },
      '.gallery__list'
    );
  })
  .then(section => section.renderItems());

const profileEditionPopup = new PopupWithForm('.popup_type_edit-profile', handleEditProfileSubmit);
const addingPicturePopup = new PopupWithForm('.popup_type_add-picture', handleAddPictureSubmit);
const userInfo = new UserInfo('.profile__name', '.profile__about');

const profilePopupFormValidator = new FormValidator(validationObject, profileEditionPopup.popup);
const addingPicturePopupFormValidator = new FormValidator(validationObject, addingPicturePopup.popup);

const createCard = (cardInfo) => {
  return new Card(cardInfo.name, cardInfo.link, '#card', () => {
    handleCardClick(cardInfo.link, cardInfo.name)
  }).generateCard();
}

const renderCard = (cardInfo) => {
  const newCard = createCard(cardInfo);
  cardSection.addItem(newCard);
}

const cardSection = new Section(
  {
    items: [],
    renderer: renderCard
  },
  '.gallery__list'
);

cardSection.renderItems();

const popupWithImage = new PopupWithImage('.popup_type_open-picture');
popupWithImage.setEventListeners();


function handleCardClick(link, name) {
  popupWithImage.open(link, name);
}

function handleEditProfileSubmit(data) {
   userInfo.setUserInfo(data.name, data.about);
   api.updateUserInfo(data.name, data.about);
}

const openEditPopup = () => {
  profileEditionPopup.setInputValues(userInfo.getUserInfo());
  profilePopupFormValidator.resetValidation();
  profileEditionPopup.open();
}

editionBtn.addEventListener('click', openEditPopup);
profileEditionPopup.setEventListeners();

profilePopupFormValidator.enableValidation();

function handleAddPictureSubmit(formData) {
  const newCardInfo = {
    name: formData['picture-name'],
    link: formData['picture-link']
  }
  renderCard(newCardInfo);
  api.addCard(newCardInfo);
}

const handleOpenAddPicturePopup = () => {
  addingPicturePopupFormValidator.resetValidation();
  addingPicturePopup.open();
  addingPicturePopupFormValidator.disableSubmitBtn();
}

openingAddPicPopupBtn.addEventListener('click', handleOpenAddPicturePopup);
addingPicturePopup.setEventListeners();
addingPicturePopupFormValidator.enableValidation();
