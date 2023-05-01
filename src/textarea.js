import BaseComponent from './baseComponent';

export default class TextArea extends BaseComponent {
  constructor({ parent, className = '' }) {
    super({ parent, tagName: 'textarea', className });
  }

  setText(value) {
    this.element.value = value;
  }

  addText(value) {
    this.element.setRangeText(
      value,
      this.element.selectionStart,
      this.element.selectionEnd,
      'end'
    );
    this.setFocus();
  }

  setFocus() {
    this.element.focus();
  }

  setSelectionEnd(value) {
    this.element.selectionEnd = value;
  }

  getCaret(direction) {
    return this.element.selectionStart - (direction > 0 ? 0 : 1);
  }

  getStringStart(value) {
    return this.element.value.slice(0, value);
  }

  getStringEnd(direction) {
    return this.element.value.slice(
      this.element.selectionStart + (direction > 0 ? 1 : 0)
    );
  }
}
