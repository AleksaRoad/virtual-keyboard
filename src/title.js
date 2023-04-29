import BaseComponent from './baseComponent';

export default class Title extends BaseComponent {
  constructor(parent, style = '', className = '', textContent = '') {
    super(parent, style, className, textContent);
  }
}
