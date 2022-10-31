const showError = (input, error, errorMessage, inputErrorClass, errorClass) => {
  input.classList.add(inputErrorClass);
  error.classList.add(errorClass);
  error.textContent = errorMessage;
}

const hideError = (input, error, inputErrorClass, errorClass) => {
  input.classList.remove(inputErrorClass);
  error.classList.remove(errorClass);
  error.textContent = '';
}

const disableSubmitBtn = (buttonElement, inactiveButtonClass) => {
  buttonElement.classList.add(inactiveButtonClass);
  buttonElement.setAttribute('disabled', true);
}

const enableSubmitBtn = (buttonElement, inactiveButtonClass) => {
  buttonElement.classList.remove(inactiveButtonClass);
  buttonElement.removeAttribute('disabled');
}

const isInvalid = (inputs) => {
  return Array.from(inputs).some((input) => !input.validity.valid);
}

const checkButton = (button, inactiveButtonClass, inputs) => {
  if (isInvalid(inputs)) {
    disableSubmitBtn(button, inactiveButtonClass);
  } else {
    enableSubmitBtn(button, inactiveButtonClass);
  }
}

const handleFormInput = (evt, form, inputErrorClass, submitBtn, inactiveButtonClass, formInputs, errorClass) => {
  const input = evt.target;
  const errorElement = form.querySelector(`.input-error-${input.name}`);
  if (!input.validity.valid) {
    showError(input, errorElement, input.validationMessage, inputErrorClass, errorClass);
  } else {
    hideError(input, errorElement, inputErrorClass, errorClass);
  }
  checkButton(submitBtn, inactiveButtonClass, formInputs);
}

const enableValidation = ({formSelector, inputSelector, submitButtonSelector, inactiveButtonClass, inputErrorClass, errorClass}) => {
  const forms = document.querySelectorAll(formSelector);
  Array.from(forms).forEach((form) => {
    const submitBtn = form.querySelector(submitButtonSelector);
    const formInputs = form.querySelectorAll(inputSelector);
    Array.from(formInputs).forEach((formInput) => {
      formInput.addEventListener('input', (evt) => handleFormInput(evt, form, inputErrorClass, submitBtn, inactiveButtonClass, formInputs, errorClass));
    });
  })
}

enableValidation({
  formSelector: '.popup__form',
  inputSelector: '.popup__form-item',
  submitButtonSelector: '.popup__save-btn',
  inactiveButtonClass: 'popup__save-btn_disabled',
  inputErrorClass: 'popup__form-item_invalid',
  errorClass: 'popup__input-error_visible'
});

