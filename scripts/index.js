let editBtn = document.querySelector('.profile__edit-btn');
let popup = document.querySelector('.popup');
let closePopupBtn = popup.querySelector('.popup__close-btn');
let popupForm = popup.querySelector('.popup__form');
let popupFormNameField = popupForm.querySelector('input[name="name"]');
let popupFormJobField = popupForm.querySelector('input[name="job"]');
let userName = document.querySelector('.profile__name');
let userJob = document.querySelector('.profile__about');

popupFormNameField.value = userName.textContent;
popupFormJobField.value = userJob.textContent;

editBtn.addEventListener('click', () => {
  popup.classList.add('popup_opened');
});

closePopupBtn.addEventListener('click', () => {
  popup.classList.remove('popup_opened');
})

popupForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  userName.textContent = popupFormNameField.value;
  userJob.textContent = popupFormJobField.value;
  popup.classList.remove('popup_opened');
});
