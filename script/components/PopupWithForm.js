import { Popup } from "./Popup.js";

export class PopupWithForm extends Popup {
  constructor(popupId, submitForm) {
    super(popupId);
    this._form = this._popup.querySelector('.pop-up__form');
    this._submitForm = submitForm;
    this._inputs = this._popup.querySelectorAll('.pop-up__input');
  }
  
  _getInputValues() {
    this._formValues = {};
    this._inputs.forEach(input => {
      this._formValues[input.name] = input.value;
    });
    return this._formValues;
  }

  setInputValues(data) {
    this._inputs.forEach((input) => {
      input.value = data[input.name];
    });
  }

  setEventListener() {
    super.setEventListener();
    this._form.addEventListener('submit', evt => {
      evt.preventDefault();
      const inputList = this._getInputValues();
      this._submitForm(inputList);
    });
  }

  close() {
    super.close();
    this._form.reset();
  }
}