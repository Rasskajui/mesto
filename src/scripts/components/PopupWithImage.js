import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._imageElement = this.popup.querySelector('.picture__image');
    this._titleElement = this.popup.querySelector('.picture__title');
  }

  open(imageSrc, title) {
    this._imageElement.src = imageSrc;
    this._imageElement.alt = title;
    this._titleElement.textContent = title;
    super.open();
  }
}
