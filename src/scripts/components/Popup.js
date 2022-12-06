export default class Popup {
  constructor(popupSelector) {
    this.popup = document.querySelector(popupSelector);
    this._handleEscClose = this._handleEscClose.bind(this)
  }

  _handleEscClose(evt) {
    if (evt.key === 'Escape') {
      this.close();
    }
  }

  _handleOutOfPopupClick(evt) {
    if (this.popup === evt.target) {
      this.close();
    }
  }

  open() {
    this.popup.classList.add('popup_opened');
    document.addEventListener('keydown', this._handleEscClose);
  }

  close() {
    this.popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', this._handleEscClose);
  }

  setEventListeners() {
    this.popup.addEventListener('click', (evt) => {this._handleOutOfPopupClick(evt)});
    this._closingBtn = this.popup.querySelector('.popup__close-btn');
    this._closingBtn.addEventListener('click', () => {this.close()});
  }
}
