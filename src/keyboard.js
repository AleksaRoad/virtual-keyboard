import BaseComponent from './baseComponent';
import Key from './key';
import KeyCapsLock from './keyCapsLock';

export default class KeyBoard extends BaseComponent {
  constructor({ parent, className, handleInput, state }) {
    super({ parent, className });
    this.language = null;
    this.backspace = null;
    this.tab = null;
    this.del = null;
    this.capslock = null;
    this.enter = null;
    this.ctrl = null;
    this.alt = null;
    this.space = null;
    this.shift = null;
    this.keys = {};
    this.isCaps = false;
    Object.entries(state).forEach((x) => {
      let btn = null;
      const keycode = x[0];

      switch (keycode) {
        case 'Backspace':
          btn = new Key({
            parent: this.element,
            className: 'backspace',
            value: x[1].key,
            handleInput: () => {
              this.backspace();
            },
          });
          break;
        case 'Tab':
          btn = new Key({
            parent: this.element,
            className: 'tab',
            value: x[1].key,
            handleInput: () => {
              this.tab();
            },
          });
          break;
        case 'Delete':
          btn = new Key({
            parent: this.element,
            className: 'del',
            value: x[1].key,
            handleInput: () => {
              this.del();
            },
          });
          break;
        case 'CapsLock':
          btn = new KeyCapsLock({
            parent: this.element,
            className: 'capslock',
            value: x[1].key,
            handleInput: () => {
              this.capslock();
            },
          });
          btn.element.onmouseup = null;
          break;
        case 'Enter':
          btn = new Key({
            parent: this.element,
            className: 'enter',
            value: x[1].key,
            handleInput: () => {
              this.enter();
            },
          });
          break;
        case 'ShiftLeft':
          btn = new Key({
            parent: this.element,
            className: 'shift',
            value: x[1].key,
            handleInput: () => {
              this.shift();
            },
          });
          break;
        case 'ShiftRight':
          btn = new Key({
            parent: this.element,
            className: 'shift',
            value: x[1].key,
            handleInput: () => {
              this.shift();
            },
          });
          break;
        case 'ControlRight':
          btn = new Key({
            parent: this.element,
            className: 'ctrl',
            value: x[1].key,
            handleInput: () => {
              this.language();
            },
          });
          break;
        case 'Language':
          btn = new Key({
            parent: this.element,
            className: 'language',
            value: x[1].key,
            handleInput: () => {
              this.language();
            },
          });
          break;
        case 'AltLeft':
          btn = new Key({
            parent: this.element,
            className: 'alt',
            value: x[1].key,
            handleInput: () => {
              this.alt();
            },
          });
          break;
        case 'Space':
          btn = new Key({
            parent: this.element,
            className: 'space',
            value: x[1].key,
            handleInput: () => {
              this.space();
            },
          });
          break;
        case 'AltRight':
          btn = new Key({
            parent: this.element,
            className: 'alt',
            value: x[1].key,
            handleInput: () => {
              this.alt();
            },
          });
          break;
        case 'ControlLeft':
          btn = new Key({
            parent: this.element,
            className: 'ctrl',
            value: x[1].key,
            handleInput: () => {},
          });
          break;
        default:
          btn = new Key({
            parent: this.element,
            className: 'key',
            value: x[1].key,
            handleInput: (item) => {
              handleInput(item);
            },
          });
          break;
      }
      this.keys[keycode] = btn;
    });
  }

  handleDown(keycode) {
    const current = this.keys[keycode];
    if (current) {
      current.handleDown();
      current.addActive();
    }
  }

  handleUp(keycode) {
    const current = this.keys[keycode];
    if (current) {
      if (keycode === 'CapsLock') {
        if (this.isCaps) {
          return;
        }
      }
      if (keycode === 'ShiftLeft') {
        console.log(Object.values(this.keys));
        Object.values(this.keys).forEach((key) => {
          key.setValue(key.prevValue);
        });
      }
      current.removeActive();
    }
  }

  setLanguageAndRegister(state, register) {
    if (register) this.isCaps = !this.isCaps;
    Object.entries(state).forEach(([key, value]) => {
      this.keys[key].setValue(this.isCaps ? value.CapsLock : value.key);
    });
  }

  setAlternativeRegister(state) {
    Object.entries(state).forEach(([key, value]) => {
      this.keys[key].setPrevValue(this.keys[key].value);
      this.keys[key].setValue(value.shiftkey);
    });
  }
}
