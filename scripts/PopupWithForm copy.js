import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;

    this.fields = this.popup.querySelectorAll('.popup__form-item');

  }

  getInputValues() {
    return Array.from(this.fields).map(item => item.value);
  }

  setEventListeners() {
    this.popup.addEventListener('submit', (evt) => {this._handleFormSubmit(evt)});
    super.setEventListeners();
  }

  close() {
    this.fields.forEach((field) => {field.value = ''});
    super.close();
  }
}
