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

const picturePopup = document.querySelector('.popup_type_open-picture');
const pictureImage = picturePopup.querySelector('.picture__image');
const pictureTitle = picturePopup.querySelector('.picture__title');

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

const cardTemplate = document.querySelector('#card').content.querySelector('.gallery__element');
const cardList = document.querySelector('.gallery__list');

function createCard(item) {
  const cardElement = cardTemplate.cloneNode(true);
  const cardTitle = cardElement.querySelector('.gallery__image-title');
  const cardImage = cardElement.querySelector('.gallery__image');
  const cardLikeBtn = cardElement.querySelector('.gallery__image-like-btn');
  const cardDeleteBtn = cardElement.querySelector('.gallery__delete-image-btn');

  cardTitle.textContent = item.name;
  cardImage.src = item.link;
  cardImage.alt = item.name;

  cardImage.addEventListener('click', () => viewPicture(cardTitle, cardImage));
  cardLikeBtn.addEventListener('click', () => like(cardLikeBtn));
  cardDeleteBtn.addEventListener('click', () => deleteCard(cardElement));
  return cardElement;
}

const addCard = (card) => {
  const newCard = createCard(card);
  cardList.prepend(newCard);
}

initialCards.forEach(addCard);

const like = (likeBtn) => {
  likeBtn.classList.toggle('gallery__image-like-btn_active');
}

const deleteCard = (card) => {
  cardList.removeChild(card);
}

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

closeButtons.forEach((button) => {
  const popup = button.closest('.popup');
  button.addEventListener('click', () => closePopup(popup));
});

const openEditPopup = () => {
  openPopup(profilePopup);
  profilePopupFormNameField.value = userName.textContent;
  profilePopupFormAboutField.value = userAbout.textContent;
}

editBtn.addEventListener('click', openEditPopup);

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
  disableSubmitBtn(addPicPopupSubmitBtn, 'popup__save-btn_disabled');
}

addBtn.addEventListener('click', handleOpenAddPicturePopup);

addPicturePopup.addEventListener('submit', handleAddPictureSubmit);

const viewPicture = (title, image) => {
  pictureImage.src = image.src;
  pictureImage.alt = image.alt;
  pictureTitle.textContent = title.textContent;
  openPopup(picturePopup);
}
