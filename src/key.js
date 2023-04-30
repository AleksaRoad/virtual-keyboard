import BaseComponent from './baseComponent';

export default class Key extends BaseComponent {
  constructor({ parent, className, value, handleInput }) {
    super({ parent, className });
    this.prevValue = null;
    this.value = value;
    this.handleInput = handleInput;
    this.element.textContent = value;
    this.element.onmousedown = () => {
      this.#onInput();
      this.addActive();
    };
    this.element.onmouseup = () => {
      this.removeActive();
    };
    this.element.onmouseout = () => {
      this.removeActive();
    };
  }

  #onInput() {
    this.handleInput(this.value);
  }

  handleDown() {
    this.#onInput();
  }

  addActive() {
    this.element.classList.add('active');
  }

  removeActive() {
    this.element.classList.remove('active');
  }

  setValue(value) {
    this.value = value;
    this.element.textContent = value;
  }

  setPrevValue(value) {
    this.prevValue = value;
  }
}
