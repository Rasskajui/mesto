export default class Popup {
  constructor(popupSelector) {
    this.popup = document.querySelector(popupSelector);
  }

  _handleEscClose(evt) {
    if (evt.key === 'Escape') {
      this.close();
    }
  }

  _handleOutOfPopupClick(evt) {
    this._content = this.popup.querySelector('.popup__content');
    if (!this._content.contains(evt.target)) {
      this.close();
    }
  }

  open() {
    this.popup.classList.add('popup_opened');
  }

  close() {
    this.popup.classList.remove('popup_opened');
    this.popup.removeEventListener('click', () => {this._handleOutOfPopupClick()});
    document.removeEventListener('keydown', () => {this._handleEscClose()});
  }

  setEventListeners() {
    document.addEventListener('keydown', (evt) => {this._handleEscClose(evt)});
    this.popup.addEventListener('click', (evt) => {this._handleOutOfPopupClick(evt)});
    this._closingBtn = this.popup.querySelector('.popup__close-btn');
    this._closingBtn.addEventListener('click', () => {this.close()});
  }
}
