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
    this.state = state;
    this.keys = {};
    this.keysSpecial = {};
    this.isCaps = false;
    Object.entries(state).forEach((x) => {
      let btn = null;
      const [keycode, value] = x;

      switch (keycode) {
        case 'Backspace':
          btn = this.createSpecialKey('backspace', value.key, () => {
            this.backspace();
          });
          this.keysSpecial[keycode] = btn;
          break;
        case 'Tab':
          btn = this.createSpecialKey('tab', value.key, () => {
            this.tab();
          });
          this.keysSpecial[keycode] = btn;
          break;
        case 'Delete':
          btn = this.createSpecialKey('del', value.key, () => {
            this.del();
          });
          this.keysSpecial[keycode] = btn;
          break;
        case 'CapsLock':
          btn = new KeyCapsLock({
            parent: this.element,
            className: 'capslock',
            value: value.key,
            handleInput: () => {
              this.capslock();
            },
          });
          btn.element.onmouseup = null;
          this.keysSpecial[keycode] = btn;
          break;
        case 'Enter':
          btn = this.createSpecialKey('enter', value.key, () => {
            this.enter();
          });
          this.keysSpecial[keycode] = btn;
          break;
        case 'ShiftLeft':
          btn = this.createSpecialKey('shift', value.key, () => {
            this.shift();
          });
          this.keysSpecial[keycode] = btn;
          btn.element.onmouseup = () => {
            this.setAlternativeRegister(this.state, false);
          };
          break;
        case 'ShiftRight':
          btn = this.createSpecialKey('shift', value.key, () => {
            this.shift();
          });
          this.keysSpecial[keycode] = btn;
          btn.element.onmouseup = () => {
            this.setAlternativeRegister(this.state, false);
          };
          break;
        case 'ControlRight':
          btn = this.createSpecialKey('ctrl', value.key, () => {
            this.ctrl();
          });
          this.keysSpecial[keycode] = btn;
          break;
        case 'Language':
          btn = this.createSpecialKey('language', value.key, () => {
            this.language();
          });
          this.keys[keycode] = btn;
          break;
        case 'AltLeft':
          btn = this.createSpecialKey('alt', value.key, () => {
            this.alt();
          });
          this.keysSpecial[keycode] = btn;
          break;
        case 'Space':
          btn = this.createSpecialKey('space', value.key, () => {
            this.space();
          });
          this.keysSpecial[keycode] = btn;
          break;
        case 'AltRight':
          btn = this.createSpecialKey('alt', value.key, () => {
            this.alt();
          });
          this.keysSpecial[keycode] = btn;
          break;
        case 'ControlLeft':
          btn = this.createSpecialKey('ctrl', value.key, () => {});
          this.keysSpecial[keycode] = btn;
          break;
        default:
          btn = this.createSpecialKey('key', value.key, (item) => {
            handleInput(item);
          });
          this.keys[keycode] = btn;
          break;
      }
    });
  }

  handleDown(keycode) {
    const current = this.keys[keycode] || this.keysSpecial[keycode];
    if (current) {
      current.handleDown();
      current.addActive();
    }
  }

  handleUp(keycode) {
    const current = this.keys[keycode] || this.keysSpecial[keycode];
    if (current) {
      if (keycode === 'CapsLock' && this.isCaps) {
        return;
      }
      if (keycode === 'ShiftLeft') {
        this.setAlternativeRegister(this.state, false);
      }
      current.removeActive();
    }
  }

  setLanguageAndRegister(state, register) {
    this.state = state;
    if (register) this.isCaps = !this.isCaps;
    Object.entries(state).forEach(([key, value]) => {
      this.keys[key]?.setValue(
        this.isCaps ? value.key.toUpperCase() : value.key
      );
    });
  }

  setAlternativeRegister(state, register = true) {
    Object.entries(state).forEach(([key, value]) => {
      const result = register ? value.shiftkey : null;
      let capsResult;
      if (register) {
        if (this.isCaps) {
          capsResult = value.key;
        } else {
          capsResult = value.key.toUpperCase();
        }
      } else if (this.isCaps) {
        capsResult = value.key.toUpperCase();
      } else {
        capsResult = value.key;
      }

      this.keys[key]?.setValue(result ?? capsResult);
    });
  }

  createSpecialKey(className, value, handleInput) {
    return new Key({
      parent: this.element,
      className,
      value,
      handleInput,
    });
  }
}
