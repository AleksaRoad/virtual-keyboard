import BaseComponent from './baseComponent';

export default class TextArea extends BaseComponent {
  constructor(parent, className = '') {
    super(parent, 'textarea', className);
  }
}
