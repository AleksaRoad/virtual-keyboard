import BaseComponent from './baseComponent';
import KeyBoard from './keyboard';
import TextArea from './textarea';
import Title from './title';

export default class App extends BaseComponent {
  constructor(parent, tagName = 'div', className = '') {
    super(parent, tagName, className);
    this.title = new Title(this.element, 'h1', 'title', 'RSS Virtual Keyboard');
    this.textarea = new TextArea(this.element, 'textarea');
    this.keyboard = new KeyBoard(this.element, 'keyboard', (item) => {
      this.textarea.element.value += item;
    });
    this.caret = 0;
    this.keyboard.backspace = () => {
      this.handleDelBackspace(0);
    };
    this.keyboard.tab = () => {
      this.textarea.element.value += '\t';
    };
    this.keyboard.del = () => {
      this.handleDelBackspace(1);
    };
    this.keyboard.enter = () => {
      this.textarea.element.value += '\n';
    };
    this.keyboard.language = () => {};
    document.addEventListener('keydown', (e) => {
      e.preventDefault();
      if ((e.ctrlKey && e.code) === 'AltLeft') {
        this.keyboard.language = () => {
          this.keyboard.handleDown(e.code);
          console.log(e.ctrlKey, e.code);
        };
      }
      this.keyboard.handleDown(e.code);
    });
    this.keyboard.keys.Delete.element.addEventListener('click', () => {
      this.textarea.element.focus();
    });
    this.keyboard.keys.Backspace.element.addEventListener('click', () => {
      this.textarea.element.focus();
    });
    this.keyboard.space = () => {
      this.textarea.element.value += ' ';
    };
    this.title = new Title(
      this.element,
      'h3',
      'title',
      'Клавиатура создана на операционной системе Windows'
    );
    this.title = new Title(
      this.element,
      'h3',
      'title',
      'Переключение клавиш: ControlLeft + AltLeft'
    );
  }

  handleDelBackspace(direction) {
    const { value } = this.textarea.element;
    this.caret =
      direction > 0
        ? this.textarea.element.selectionStart
        : this.textarea.element.selectionStart - 1;
    const stringStart = value.slice(0, this.caret);
    const stringEnd =
      direction > 0
        ? value.slice(this.textarea.element.selectionStart + 1)
        : value.slice(this.textarea.element.selectionStart);
    this.textarea.element.value = stringStart + stringEnd;
    this.textarea.element.focus();
    this.textarea.element.selectionEnd = this.caret;
  }
}
