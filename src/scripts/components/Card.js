class Card {
  constructor(name, link, id, likes, isMine, userId, cardTemplateSelector, handleCardClick, handleDeleteCardClick, handleLikePress) {
    this._name = name;
    this._link = link;
    this._likes = likes;
    this.id = id;
    this._isMine = isMine;
    this._cardTemplateSelector = cardTemplateSelector;
    this._handleCardClick = handleCardClick;
    this._handleDeleteCardClick = handleDeleteCardClick;

    this._userId = userId;
    this._handleLikePress = handleLikePress;
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

  isLiked() {
    return this._likes.some((like) => like._id === this._userId);
  }

  _updateLikesView() {
    this._likesCounter.textContent = this._likes.length;
    this._likeBtn.classList.toggle('gallery__image-like-btn_active', this.isLiked());
  }

  updateLikes(likes) {
    this._likes = likes;
    this._updateLikesView();
  }

  deleteCard() {
    this._element.remove();
    this._element = null;
  }

  _setEventListeners() {
    this._image.addEventListener('click', this._handleCardClick);
    this._likeBtn.addEventListener('click', () => {this._handleLikePress(this.isLiked())});

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

    this._likesCounter = this._element.querySelector('.gallery__number-of-likes');
    this._likeBtn = this._element.querySelector('.gallery__image-like-btn');

    this._updateLikesView();

    this._setEventListeners();

    return this._element;
  }
}

export default Card;
