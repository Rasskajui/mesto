export default class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
  }

  _handleEscClose(evt) {
    if (evt.key === 'Escape') {
      this.close();
    }
  }

  _handleOutOfPopupClick(evt) {
    this._content = this._popup.querySelector('.popup__content');
    if (!this._content.contains(evt.target)) {
      this.close();
    }
  }

  open() {
    this._popup.classList.add('popup_opened');
    this.setEventListeners();
  }

  close() {
    this._popup.classList.remove('popup_opened');
    this._popup.removeEventListener('click', () => {this._handleOutOfPopupClick()});
    document.removeEventListener('keydown', () => {this._handleEscClose()});
  }

  setEventListeners() {
    document.addEventListener('keydown', (evt) => {this._handleEscClose(evt)});
    this._popup.addEventListener('click', (evt) => {this._handleOutOfPopupClick(evt)});
    this._closingBtn = this._popup.querySelector('.popup__close-btn');
    this._closingBtn.addEventListener('click', () => {this.close()});
  }
}
