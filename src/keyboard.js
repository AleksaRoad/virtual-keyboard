import BaseComponent from './baseComponent';
import Key from './key';
import { objKeyEn } from './language';

export default class KeyBoard extends BaseComponent {
  constructor(parent, className, handleInput) {
    super(parent, 'div', className);
    this.language = null;
    this.backspace = null;
    this.tab = null;
    this.del = null;
    this.capslock = null;
    this.enter = null;
    this.shift = null;
    this.ctrl = null;
    this.alt = null;
    this.space = null;
    this.keys = {};
    Object.entries(objKeyEn).forEach((x) => {
      let btn = null;
      const keycode = x[0];

      switch (keycode) {
        case 'Backspace':
          btn = new Key(this.element, 'backspace', x[1].key, () => {
            this.backspace();
          });
          break;
        case 'Tab':
          btn = new Key(this.element, 'tab', x[1].key, () => {
            this.tab();
          });
          break;
        case 'Delete':
          btn = new Key(this.element, 'del', x[1].key, () => {
            this.del();
          });
          break;
        case 'CapsLock':
          btn = new Key(this.element, 'capslock', x[1].key, () => {
            this.capslock();
          });
          break;
        case 'Enter':
          btn = new Key(this.element, 'enter', x[1].key, () => {
            this.enter();
          });
          break;
        case 'ShiftLeft':
          btn = new Key(this.element, 'shift', x[1].key, () => {
            this.shift();
          });
          break;
        case 'ShiftRight':
          btn = new Key(this.element, 'shift', x[1].key, () => {
            this.shift();
          });
          break;
        case 'ControlRight':
          btn = new Key(this.element, 'ctrl', x[1].key, () => {
            this.language();
          });
          break;
        case 'Language':
          btn = new Key(this.element, 'language', x[1].key, () => {
            this.languageSwitch();
          });
          break;
        case 'AltLeft':
          btn = new Key(this.element, 'alt', x[1].key, () => {
            this.alt();
          });
          break;
        case 'Space':
          btn = new Key(this.element, 'space', x[1].key, () => {
            this.space();
          });
          break;
        case 'AltRight':
          btn = new Key(this.element, 'alt', x[1].key, () => {
            this.alt();
          });
          break;
        case 'ControlLeft':
          btn = new Key(this.element, 'ctrl', x[1].key, () => {
            this.language();
          });
          break;
        default:
          btn = new Key(this.element, 'key', x[1].key, (item) => {
            handleInput(item);
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
    }
  }
}
