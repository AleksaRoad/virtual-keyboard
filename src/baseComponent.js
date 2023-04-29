export default class BaseComponent {
  constructor(parent, tagName = 'div', className = 'key', textContent = '') {
    const el = document.createElement(tagName);
    el.className = className;
    if (textContent) {
      el.textContent = textContent;
    }
    if (parent) {
      parent.appendChild(el);
    }
    this.element = el;
  }
}
