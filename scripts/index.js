const editBtn = document.querySelector('.profile__edit-btn');
const popup = document.querySelector('.popup_type_edit-profile');
const closePopupBtn = popup.querySelector('.popup__close-btn');
const popupForm = popup.querySelector('.popup__form');
const popupFormNameField = popupForm.querySelector('.popup__form-item_el_name');
const popupFormAboutField = popupForm.querySelector('.popup__form-item_el_about');
const userName = document.querySelector('.profile__name');
const userAbout = document.querySelector('.profile__about');

const addBtn = document.querySelector('.profile__add-btn');
const addPicturePopup = document.querySelector('.popup_type_add-picture');
const closeAddPicturePopupBtn = addPicturePopup.querySelector('.popup__close-btn');

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

const addCard = (card) => {
  const newCard = cardTemplate.cloneNode(true);
  const cardTitle = newCard.querySelector('.gallery__image-title');
  const cardImage = newCard.querySelector('.gallery__image');
  const cardLikeBtn = newCard.querySelector('.gallery__image-like-btn');
  const cardDeleteBtn = newCard.querySelector('.gallery__delete-image-btn');

  cardTitle.textContent = card.name;
  cardImage.src = card.link;
  cardImage.alt = card.name;

  cardImage.addEventListener('click', () => viewPicture(cardTitle, cardImage));
  cardLikeBtn.addEventListener('click', () => like(cardLikeBtn));
  cardDeleteBtn.addEventListener('click', () => deleteCard(newCard));

  cardList.prepend(newCard);
}

initialCards.forEach(addCard);

const like = (likeBtn) => {
  likeBtn.classList.toggle('gallery__image-like-btn_active');
}

const deleteCard = (card) => {
  cardList.removeChild(card);
}

function openPopup() {
  popup.classList.add('popup_opened');
  popupFormNameField.value = userName.textContent;
  popupFormAboutField.value = userAbout.textContent;
}

function closePopup() {
  popup.classList.remove('popup_opened');
}

editBtn.addEventListener('click', openPopup);

closePopupBtn.addEventListener('click', closePopup);

function editProfileInfo(evt) {
  evt.preventDefault();
  userName.textContent = popupFormNameField.value;
  userAbout.textContent = popupFormAboutField.value;
  closePopup();
}

popupForm.addEventListener('submit', editProfileInfo);

const openAddPicturePopup = () => {
  addPicturePopup.classList.add('popup_opened');
};

const closeAddPicturePopup = () => {
  addPicturePopup.classList.remove('popup_opened');
};

const handleAddPictureSubmit = (evt) => {
  evt.preventDefault();

  const cardTitle = addPicturePopup.querySelector('.popup__form-item_el_card-name');
  const cardImageLink = addPicturePopup.querySelector('.popup__form-item_el_link');

  addCard({
    name: `${cardTitle.value}`,
    link: `${cardImageLink.value}`
  });

  cardTitle.value = '';
  cardImageLink.value = '';

  closeAddPicturePopup();
}

addBtn.addEventListener('click', openAddPicturePopup);
closeAddPicturePopupBtn.addEventListener('click', closeAddPicturePopup);

addPicturePopup.addEventListener('submit', handleAddPictureSubmit);

const openPicture = (pic) => {
  pic.classList.add('popup_opened');
}

const closePicture = (pic) => {
  pic.classList.remove('popup_opened');
}

const viewPicture = (title, image) => {
  const pictureTemplate = document.querySelector('#picture').content.querySelector('.popup_type_open-picture');
  const picture = pictureTemplate.cloneNode(true);

  const pictureImage = picture.querySelector('.picture__image');
  const pictureTitle = picture.querySelector('.picture__title');
  const pictureCloseBtn = picture.querySelector('.picture__close-btn');

  pictureImage.src = image.src;
  pictureImage.alt = image.alt;
  pictureTitle.textContent = title.textContent;

  const page = document.querySelector('.page');
  page.append(picture);

  const timeoutOpen = window.setTimeout(openPicture, 0, picture);

  pictureCloseBtn.addEventListener('click',() => {
    closePicture(picture);
    const timeoutRemove = setTimeout(() => {page.removeChild(picture);}, 300);
  });
}
