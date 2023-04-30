import BaseComponent from './baseComponent';
import KeyBoard from './keyboard';
import TextArea from './textarea';
import { objKeyEn, objKeyRu } from './language';

export default class App extends BaseComponent {
  constructor(parent, tagName = 'div', className = '') {
    super({ parent, tagName, className });
    this.caret = 0;
    this.langId = 0;
    this.langs = [objKeyEn, objKeyRu];
    this.apptitle = new BaseComponent({
      parent: this.element,
      tagName: 'h1',
      className: 'title',
      textContent: 'RSS Virtual Keyboard',
    });
    this.textarea = new TextArea({
      parent: this.element,
      className: 'textarea',
    });
    this.keyboard = new KeyBoard({
      parent: this.element,
      className: 'keyboard',
      handleInput: (item) => {
        this.textarea.addText(item);
      },
      state: objKeyEn,
    });

    this.keyboard.backspace = () => {
      this.handleDelBackspace(0);
    };
    this.keyboard.tab = () => {
      this.textarea.addText('\t');
    };
    this.keyboard.capslock = () => {
      this.keyboard.setLanguageAndRegister(this.langs[this.langId], true);
    };
    this.keyboard.del = () => {
      this.handleDelBackspace(1);
    };
    this.keyboard.enter = () => {
      this.textarea.addText('\n');
    };
    this.keyboard.language = () => {
      this.langId = (this.langId + 1) % this.langs.length;
      this.keyboard.setLanguageAndRegister(this.langs[this.langId], false);
    };
    this.keyboard.shift = () => {
      this.keyboard.setAlternativeRegister(this.langs[this.langId]);
    };
    this.keyboard.alt = () => {};
    document.addEventListener('keydown', (e) => {
      e.preventDefault();
      if (e.code === 'AltLeft' && e.ctrlKey && !e.repeat) {
        this.keyboard.language();
      }
      this.keyboard.handleDown(e.code);
    });
    document.addEventListener('keyup', (e) => {
      e.preventDefault();
      this.keyboard.handleUp(e.code);
    });
    this.keyboard.keys.Delete.element.addEventListener('click', () => {
      this.textarea.setFocus();
    });
    this.keyboard.keys.Backspace.element.addEventListener('click', () => {
      this.textarea.setFocus();
    });
    this.keyboard.space = () => {
      this.textarea.addText(' ');
    };
    this.descriptiontitle = new BaseComponent({
      parent: this.element,
      tagName: 'h3',
      className: 'title',
      textContent: 'The keyboard is based on the Windows operating system',
    });
    this.manualtitle = new BaseComponent({
      parent: this.element,
      tagName: 'h3',
      className: 'title',
      textContent: 'Language switching: ctrlleft + altleft or key Ru/En',
    });
  }

  handleDelBackspace(direction) {
    this.caret = this.textarea.getCaret(direction);
    const stringStart = this.textarea.getStringStart(this.caret);
    const stringEnd = this.textarea.getStringEnd(direction);
    this.textarea.setText(stringStart + stringEnd);
    this.textarea.setFocus();
    this.textarea.setSelectionEnd(this.caret);
  }
}
