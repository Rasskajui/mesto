class FormValidator {
  constructor(validationObject, formElement) {
    this._validationObject = validationObject;
    this._formElement = formElement;
  }

  _showError = (errorElement, input) => {
    input.classList.add(this._validationObject.inputErrorClass);
    errorElement.classList.add(this._validationObject.errorClass);
    errorElement.textContent = input.validationMessage;
  }

  _hideError = (errorElement, input) => {
    input.classList.remove(this._validationObject.inputErrorClass);
    errorElement.classList.remove(this._validationObject.errorClass);
    errorElement.textContent = '';
  }

  disableSubmitBtn = () => {
    this._submitBtn.classList.add(this._validationObject.inactiveButtonClass);
    this._submitBtn.setAttribute('disabled', true);
  }

  _enableSubmitBtn = () => {
    this._submitBtn.classList.remove(this._validationObject.inactiveButtonClass);
    this._submitBtn.removeAttribute('disabled');
  }

  _isInvalid = () => {
    return Array.from(this._inputArr).some((input) => !input.validity.valid);
  }

  _checkButton = () => {
    if (this._isInvalid()) {
      this.disableSubmitBtn();
    } else {
      this._enableSubmitBtn();
    }
  }

  _handleFormInput = (evt) => {
    const input = evt.target;
    const errorElement = this._formElement.querySelector(`.input-error-${input.name}`);
    if (!input.validity.valid) {
      this._showError(errorElement, input);
    } else {
      this._hideError(errorElement, input);
    }
    this._checkButton();
  }

  resetValidation() {
    this._checkButton();
    this._inputArr.forEach((inputElement) => {
      const errorElement = this._formElement.querySelector(`.input-error-${inputElement.name}`);
      this._hideError(errorElement, inputElement);
    });
  }

  enableValidation() {
    this._inputArr = Array.from(this._formElement.querySelectorAll(this._validationObject.inputSelector));
    this._submitBtn = this._formElement.querySelector(this._validationObject.submitButtonSelector);
    this._inputArr.forEach((input) => {
      input.addEventListener('input', (evt) => {this._handleFormInput(evt)});
    });
  }

}

export default FormValidator;
