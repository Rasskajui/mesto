let editBtn = document.querySelector('.profile__edit-btn');
let popup = document.querySelector('.popup');
let closePopupBtn = popup.querySelector('.popup__close-btn');
let popupForm = popup.querySelector('.popup__form');
let popupFormNameField = popupForm.querySelector('.popup__form-item_el_name');
let popupFormAboutField = popupForm.querySelector('.popup__form-item_el_about');
let userName = document.querySelector('.profile__name');
let userAbout = document.querySelector('.profile__about');

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
