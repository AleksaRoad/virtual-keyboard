import './sass/index.scss';
import { objKeyEN, objKeyRu } from './language';

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
wrapper.appendChild(createTemplate('textarea', 'textarea', 'textarea', ''));

const keyboard = createTemplate('div', 'keyboard', 'keyboard', '');
wrapper.appendChild(keyboard);

function createButton(obj) {
  const array = Object.entries(obj).map((x) =>
    keyboard.appendChild(
      createTemplate('button', `${x[0]}`.toLowerCase(), 'word', x[1].key)
    )
  );
  return array;
  // console.log(array);
}

createButton(objKeyRu);

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
    'Для переключения языка комбинация: Shift + Alt'
  )
);

document.addEventListener('mousedown', (e) => {
  e.target.classList.add('active');
  if (e.target.textContent.length <= 1) {
    console.log(e.target.textContent);
  }
});
document.addEventListener('mouseup', (e) => {
  e.target.classList.remove('active');
});

console.log(objKeyEN, objKeyRu);

console.log('');
