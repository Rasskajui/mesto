class Card {
  constructor(name, link, cardTemplateSelector, openPopup) {
    this._name = name;
    this._link = link;
    this._cardTemplateSelector = cardTemplateSelector;
    this._openPopup = openPopup;
  }

  _getTemplate() {
    const cardElement = document
    .querySelector(this._cardTemplateSelector)
    .content
    .querySelector('.gallery__element')
    .cloneNode(true);

    return cardElement;
  }

  _handleImageClick() {
    const picturePopup = document.querySelector('.popup_type_open-picture');
    const picturePopupImage = picturePopup.querySelector('.picture__image');

    picturePopup.querySelector('.picture__title').textContent = this._name;
    picturePopupImage.src = this._link;
    picturePopupImage.alt = this._name;

    this._openPopup(picturePopup);
  }

  _handleLikePress() {
    this._likeBtn.classList.toggle('gallery__image-like-btn_active');
  }

  _handleDeletePress() {
    this._element.parentNode.removeChild(this._element);
    this._element = null;
  }

  _setEventListeners() {
    this._element
    .querySelector('.gallery__image')
    .addEventListener('click', () => {this._handleImageClick()});

    this._likeBtn = this._element.querySelector('.gallery__image-like-btn');
    this._likeBtn.addEventListener('click', () => {this._handleLikePress()});

    this._element
    .querySelector('.gallery__delete-image-btn')
    .addEventListener('click',() => {this._handleDeletePress()});
  }

  generateCard() {
    this._element = this._getTemplate();

    const cardImage =  this._element.querySelector('.gallery__image')

    this._element.querySelector('.gallery__image-title').textContent = this._name;
    cardImage.src = this._link;
    cardImage.alt = this._name;

    this._setEventListeners();

    return this._element;
  }
}

export default Card;
