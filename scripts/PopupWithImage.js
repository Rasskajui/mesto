import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
  constructor(popupSelector, imageSrc, title) {
    super(popupSelector);
    this._imageSrc = imageSrc;
    this._title = title;
  }

  open() {
    this._imageElement = this._popup.querySelector('.picture__image');
    this._titleElement = this._popup.querySelector('.picture__title');
    this._imageElement.src = this._imageSrc;
    this._titleElement.textContent = this._title;

    super.open();
  }
}
