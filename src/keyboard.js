import './sass/index.scss';
import { objKeyEn, objKeyRu } from './language';

function createTemplate(template, firstClassname, secondClassname, text) {
  const element = document.createElement(template);
  element.className = secondClassname;
  element.classList.add(firstClassname);
  element.innerHTML = text;
  return element;
}
const wrapper = createTemplate('div', 'wrapper', 'wrapper', '');

document.body.appendChild(wrapper);
wrapper.appendChild(
  createTemplate('h1', 'title', 'title', 'RSS Virtual Keyboard')
);
const textarea = wrapper.appendChild(
  createTemplate('textarea', 'textarea', 'textarea', '')
);

// textarea.classList.add('active');
// textarea.setAttribute('cols', '40');
const keyboard = createTemplate('div', 'keyboard', 'keyboard', '');
wrapper.appendChild(keyboard);

function createButton(obj) {
  const array = Object.entries(obj).map((x) =>
    keyboard.appendChild(
      createTemplate('button', `${x[0]}`.toLowerCase(), 'word', x[1].key)
    )
  );
  return array;
}

createButton(objKeyEn);

wrapper.appendChild(
  createTemplate(
    'h3',
    'text',
    'text',
    'Клавиатура создана на операционной системе Windows'
  )
);
wrapper.appendChild(
  createTemplate(
    'h3',
    'text',
    'text',
    'Для переключения языка комбинация: CtrltLeft + AltLeft'
  )
);
const textArray = [''];
document.addEventListener('mousedown', (e) => {
  e.preventDefault();
  textarea.focus();
  if (e.target.classList.contains('word')) {
    e.target.classList.add('active');
  }
  if (e.target.textContent === 'Space') {
    textArray.push(' ');
    textarea.textContent = textArray.join('');
  }
  if (e.target.textContent.length === 1) {
    console.log(textarea.textContent);
    textArray.push(e.target.textContent);
    textarea.textContent = textArray.join('');
  }
  textarea.setSelectionRange(textArray.length, textArray.length);
});

document.addEventListener('mouseup', (e) => {
  e.target.classList.remove('active');

  textarea.selectionStart = textarea.selectionEnd;
  textarea.selectionEnd = textArray.length;
  textarea.setSelectionRange(textArray.length, textArray.length);
  console.log(textArray);
});

document.addEventListener('mouseout', (e) => {
  e.target.classList.remove('active');
});

textarea.focus();

let ctrlalt = [];
let state = 'objKeyEn';
document.addEventListener('keydown', (e) => {
  let actualWord = '';
  if (e.code === 'Space') {
    actualWord = ' ';
  }
  if (e.key.length === 1) {
    e.preventDefault();
    if (state === 'objKeyEn') {
      actualWord = objKeyEn[e.code].key;
    }
    if (state === 'objKeyRu') {
      actualWord = objKeyRu[e.code].key;
    }
    console.log(objKeyEn);
    textArray.push(actualWord);
    textarea.textContent = textArray.join('');
    console.log(textArray);
  }
  if (
    (e.code === 'ControlLeft' && !e.repeat) ||
    (e.code === 'AltLeft' && !e.repeat)
  ) {
    ctrlalt.push(' ');
    console.log(ctrlalt);
  }
  if (ctrlalt.length === 2) {
    keyboard.textContent = '';
    if (state === 'objKeyEn') {
      keyboard.textContent = '';
      createButton(objKeyRu);
      state = 'objKeyRu';
      console.log(state);
    } else if (state === 'objKeyRu') {
      keyboard.textContent = '';
      createButton(objKeyEn);
      state = 'objKeyEn';
      console.log(state);
    }
  }
  textarea.selectionStart = textarea.selectionEnd;
  textarea.selectionEnd = textArray.length;
  textarea.setSelectionRange(textArray.length, textArray.length);
  console.log(e.code);
});

document.addEventListener('keyup', () => {
  ctrlalt = [];
  textarea.selectionStart = textarea.selectionEnd;
  textarea.selectionEnd = textArray.length;
  textarea.setSelectionRange(textArray.length, textArray.length);
});

textarea.onfocus = () => {
  setTimeout(() => {
    textarea.selectionStart = textarea.selectionEnd;
    textarea.selectionEnd = textArray.length;
    textarea.setSelectionRange(textArray.length, textArray.length);
  });
};
