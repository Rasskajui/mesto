class Card {
  constructor(name, link, likes, id, isMine, cardTemplateSelector, handleCardClick, handleDeleteCardClick) {
    this._name = name;
    this._link = link;
    this._likes = likes;
    this._id = id;
    this._isMine = isMine;
    this._cardTemplateSelector = cardTemplateSelector;
    this._handleCardClick = handleCardClick;
    this._handleDeleteCardClick = handleDeleteCardClick;
  }

  _getTemplate() {
    const cardElement = document
    .querySelector(this._cardTemplateSelector)
    .content
    .querySelector('.gallery__element')
    .cloneNode(true);

    if (!this._isMine) {
      cardElement.removeChild(cardElement.querySelector('.gallery__delete-image-btn'));
    }
    return cardElement;
  }

  _handleLikePress() {
    this._likeBtn.classList.toggle('gallery__image-like-btn_active');
    this._likes += 1;
  }

  deleteCard() {
    this._element.remove();
    this._element = null;
  }

  _setEventListeners() {
    this._image.addEventListener('click', this._handleCardClick);

    this._likeBtn = this._element.querySelector('.gallery__image-like-btn');
    this._likeBtn.addEventListener('click', () => {this._handleLikePress()});

    if (this._isMine){
      this._element
      .querySelector('.gallery__delete-image-btn')
      .addEventListener('click', () => {this._handleDeleteCardClick(this)});
    }
  }

  generateCard() {
    this._element = this._getTemplate();

    this._image = this._element.querySelector('.gallery__image');


    this._element.querySelector('.gallery__image-title').textContent = this._name;
    this._image.src = this._link;
    this._image.alt = this._name;
    this._element.querySelector('.gallery__number-of-likes').textContent = `${this._likes}`;

    this._setEventListeners();

    return this._element;
  }
}

export default Card;
