import './index.css';
import Card from '../scripts/components/Card.js';
import FormValidator from '../scripts/components/FormValidator.js';
import PopupWithForm from '../scripts/components/PopupWithForm.js';
import PopupWithImage from '../scripts/components/PopupWithImage.js';
import PopupConfirm from '../scripts/components/PopupConfirm';
import UserInfo from '../scripts/components/UserInfo.js';
import Section from '../scripts/components/Section.js';
import Api from '../scripts/components/Api.js';
import {editionBtn, openingAddPicPopupBtn, openingAvatarPopupBtn, validationObject, userAvatar} from '../scripts/utils/constants.js'

const profileEditionPopup = new PopupWithForm('.popup_type_edit-profile', handleEditProfileSubmit);
const addingPicturePopup = new PopupWithForm('.popup_type_add-picture', handleAddPictureSubmit);

const deletingCardPopup = new PopupConfirm('.popup_type_delete-card', handleDeleteCardSubmit);
deletingCardPopup.setEventListeners();

const updatingAvatarPopup = new PopupWithForm('.popup_type_change-avatar', handleUpdateAvatarSubmit);
updatingAvatarPopup.setEventListeners();

const userInfo = new UserInfo('.profile__name', '.profile__about');

const profilePopupFormValidator = new FormValidator(validationObject, profileEditionPopup.popup);
const addingPicturePopupFormValidator = new FormValidator(validationObject, addingPicturePopup.popup);
const updatingAvatarPopupFormValidator = new FormValidator(validationObject, updatingAvatarPopup.popup);
updatingAvatarPopupFormValidator.enableValidation();

const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-56',
  headers: {
    authorization: '2f1089fd-d72d-4f9a-94ac-821334db37b8',
    'Content-Type': 'application/json'
  }
});

const data = {};

api.getUserInfo()
.then((user) => {
  userInfo.setUserInfo(`${user.name}`, `${user.about}`);
  userAvatar.src = user.avatar;
  data.userId = user._id;
  data.user = user;
})
.catch((err) => {
  console.log(`Ошибка: ${err}`);
});

api.getCards()
  .then((data) => {
    return data.map((card) => ({
      name: card.name,
      link: card.link,
      likes: card.likes,
      ownerId: card.owner._id,
      id: card._id,
    }));
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
  .then(section => section.renderItems())
  .catch((err) => {
    console.log(`Ошибка: ${err}`);
  });

const createCard = (cardInfo) => {
  const card = new Card(
    cardInfo.name,
    cardInfo.link,
    cardInfo.id,
    cardInfo.likes,
    cardInfo.ownerId === data.userId,
    data.userId,
    '#card',
    () => {handleCardClick(cardInfo.link, cardInfo.name)},
    () => {deletingCardPopup.open(card)},
    (isLiked) => {
      if (!isLiked) {
        api.likeCard(cardInfo.id)
        .then((data) => {
          card.updateLikes(data.likes);
        })
        .catch((err) => {
          console.log(`Ошибка: ${err}`);
        });
      } else {
        api.removeLike(cardInfo.id)
        .then((data) => {
          card.updateLikes(data.likes);
        })
        .catch((err) => {
          console.log(`Ошибка: ${err}`);
        });
      }
    }
    )
    return card.generateCard();
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

function handleDeleteCardSubmit(card) {
  card.deleteCard();
  api.deleteCard(card.id);
}

function handleEditProfileSubmit(data) {
  profileEditionPopup.renderLoading(true);
  userInfo.setUserInfo(data.name, data.about);
  api.updateUserInfo(data.name, data.about).finally(() => {
    profileEditionPopup.renderLoading(false);
  });;
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
  addingPicturePopup.renderLoading(true);
  const newCardInfo = {
    name: formData['picture-name'],
    link: formData['picture-link'],
  }
  api.addCard(newCardInfo)
  .then(res => res.json())
  .then(res => {
    return createCard({
      name: res.name,
      link: res.link,
      likes: res.likes,
      ownerId: data.userId,
      id: res._id,
    });
  })
  .then(card => {
    cardSection.addItem(card);
  })
  .finally(() => {
    addingPicturePopup.renderLoading(false);
  })
  .catch((err) => {
    console.log(`Ошибка: ${err}`);
  });
}

const handleOpenAddPicturePopup = () => {
  addingPicturePopupFormValidator.resetValidation();
  addingPicturePopup.open();
  addingPicturePopupFormValidator.disableSubmitBtn();
}

openingAddPicPopupBtn.addEventListener('click', handleOpenAddPicturePopup);
addingPicturePopup.setEventListeners();
addingPicturePopupFormValidator.enableValidation();

function handleUpdateAvatarSubmit(data) {
  updatingAvatarPopup.renderLoading(true);
  userAvatar.src = data.avatar;
  api.updateAvatar(data.avatar).finally(() => {
    updatingAvatarPopup.renderLoading(false);
  });
}

openingAvatarPopupBtn.addEventListener('click', () => {
  updatingAvatarPopupFormValidator.resetValidation();
  updatingAvatarPopup.open();
});
