import Popup from "./Popup";

class PopupConfirm extends Popup {
  constructor(popupSelector, handleSubmit) {
    super(popupSelector);
    this._button = this.popup.querySelector('.popup__save-btn');
    this._handleSubmit = handleSubmit;
  }

  open(card) {
    super.open();
    this._card = card;
  }

  setEventListeners() {
    super.setEventListeners();
    this._button.addEventListener('click', () => {
      this._handleSubmit(this._card);
      this.close();
    })
  }
}

export default PopupConfirm;
