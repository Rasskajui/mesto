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
    const picturePopup = document.querySelector('.popup_type_open-picture')
    picturePopup.querySelector('.picture__title').textContent = this._name;
    picturePopup.querySelector('.picture__image').src = this._link;
    picturePopup.querySelector('.picture__image').alt = this._name;
    this._openPopup(picturePopup);
  }

  _handleLikePress() {
    this._element
    .querySelector('.gallery__image-like-btn')
    .classList.toggle('gallery__image-like-btn_active');
  }

  _handleDeletePress() {
    this._element.parentNode.removeChild(this._element);
  }

  _setEventListeners() {
    this._element
    .querySelector('.gallery__image')
    .addEventListener('click', () => {this._handleImageClick()});

    this._element
    .querySelector('.gallery__image-like-btn')
    .addEventListener('click', () => {this._handleLikePress()});

    this._element
    .querySelector('.gallery__delete-image-btn')
    .addEventListener('click',() => {this._handleDeletePress()});
  }

  generateCard() {
    this._element = this._getTemplate();

    this._element.querySelector('.gallery__image-title').textContent = this._name;
    this._element.querySelector('.gallery__image').src = this._link;
    this._element.querySelector('.gallery__image').alt = this._name;

    this._setEventListeners();

    return this._element;
  }
}

export default Card;
