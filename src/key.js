import BaseComponent from './baseComponent';

export default class Key extends BaseComponent {
  constructor(parent, className, value, handleInput) {
    super(parent, 'div', className);
    this.value = value;
    this.handleInput = handleInput;
    this.element.textContent = value;
    this.element.onmousedown = () => {
      this.onInput();
    };
  }

  onInput() {
    this.handleInput(this.value);
  }

  handleDown() {
    this.onInput();
  }
}
