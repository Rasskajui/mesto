class Card {
  constructor(name, link, cardTemplateSelector, handleCardClick) {
    this._name = name;
    this._link = link;
    this._cardTemplateSelector = cardTemplateSelector;
    this._handleCardClick = handleCardClick;
  }

  _getTemplate() {
    const cardElement = document
    .querySelector(this._cardTemplateSelector)
    .content
    .querySelector('.gallery__element')
    .cloneNode(true);

    return cardElement;
  }

  _handleLikePress() {
    this._likeBtn.classList.toggle('gallery__image-like-btn_active');
  }

  _handleDeletePress() {
    this._element.remove();
    this._element = null;
  }

  _setEventListeners() {
    this._image.addEventListener('click', this._handleCardClick);

    this._likeBtn = this._element.querySelector('.gallery__image-like-btn');
    this._likeBtn.addEventListener('click', () => {this._handleLikePress()});

    this._element
    .querySelector('.gallery__delete-image-btn')
    .addEventListener('click',() => {this._handleDeletePress()});
  }

  generateCard() {
    this._element = this._getTemplate();

    this._image = this._element.querySelector('.gallery__image');


    this._element.querySelector('.gallery__image-title').textContent = this._name;
    this._image.src = this._link;
    this._image.alt = this._name;

    this._setEventListeners();

    return this._element;
  }
}

export default Card;
