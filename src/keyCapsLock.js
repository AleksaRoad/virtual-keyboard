import Key from './key';

export default class KeyCapsLock extends Key {
  constructor({ parent, className, value, handleInput }) {
    super({ parent, className, value, handleInput });
    this.element.onclick = () => {
      this.element.classList.toggle('active');
    };
    this.element.onmousedown = () => {
      handleInput(this.value);
    };
    this.element.onmouseout = null;
  }
}
