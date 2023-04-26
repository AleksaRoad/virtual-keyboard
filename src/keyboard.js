import './sass/index.scss';
import { objKeyEn, objKeyRu } from './language';
// import { doc } from 'prettier';
document.addEventListener('DOMContentLoaded', function () {
  let state = 'objKeyEn';
  const textArray = [];

  function createTemplate(template, firstClassname, secondClassname, text) {
    const element = document.createElement(template);
    element.className = secondClassname;
    element.classList.add(firstClassname);
    element.setAttribute('data', `${firstClassname}`);
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
  textarea.focus();
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
  function getState() {
    state = localStorage.getItem('state');
    if (state === null) {
      state = 'objKeyEn';
      localStorage.setItem('state', 'objKeyEn');
    }
    let board = {};
    if (state === 'objKeyEn') {
      board = objKeyEn;
    }
    if (state === 'objKeyRu') {
      board = objKeyRu;
    }
    return board;
  }

  createButton(getState());

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
      'Для переключения языка комбинация: CotroltLeft + AltLeft'
    )
  );
  function createButtonCaps(obj) {
    const array = Object.entries(obj).map((x) =>
      keyboard.appendChild(
        createTemplate('button', `${x[0]}`.toLowerCase(), 'word', x[1].CapsLock)
      )
    );
    return array;
  }
  let count = 0;
  function pushCapsLock(activeButton) {
    if (activeButton === 'CapsLock') {
      if (count === 0) {
        keyboard.textContent = '';
        if (state === 'objKeyEn') {
          createButtonCaps(objKeyEn);
        } else if (state === 'objKeyRu') {
          createButtonCaps(objKeyRu);
        }
        count = 1;
      } else {
        count = 0;
        keyboard.textContent = '';
        if (state === 'objKeyEn') {
          createButton(objKeyEn);
        } else if (state === 'objKeyRu') {
          createButton(objKeyRu);
          state = 'objKeyRu';
        }
      }
    }
  }

  let ctrl = false;
  let alt = false;
  document.addEventListener('keydown', (e) => {
    textarea.focus();
    document
      .querySelector(`.keyboard .word.${e.code.toLowerCase()}`)
      .classList.add('active');
    if (e.code === 'ControlLeft') {
      ctrl = true;
    }
    if (e.code === 'AltLeft') {
      alt = true;
    }
    if (ctrl && alt) {
      if (state === 'objKeyEn') {
        keyboard.textContent = '';
        createButton(objKeyRu);
        document
          .querySelector(`.keyboard .word.controlleft`)
          .classList.add('active');
        document
          .querySelector(`.keyboard .word.altleft`)
          .classList.add('active');
        state = 'objKeyRu';
        localStorage.setItem('state', 'objKeyRu');
        console.log(state);
      } else if (state === 'objKeyRu') {
        keyboard.textContent = '';
        createButton(objKeyEn);
        document
          .querySelector(`.keyboard .word.controlleft`)
          .classList.add('active');
        document
          .querySelector(`.keyboard .word.altleft`)
          .classList.add('active');
        state = 'objKeyEn';
        localStorage.setItem('state', 'objKeyEn');
        console.log(state);
      }
    }
    pushCapsLock(e.code);
  });

  document.addEventListener('keyup', (e) => {
    document
      .querySelector(`.keyboard .word.${e.code.toLowerCase()}`)
      .classList.remove('active');
    ctrl = false;
    alt = false;
  });

  document.querySelectorAll('.keyboard .word').forEach((el) => {
    el.addEventListener('click', (e) => {
      document.querySelectorAll('.keyboard .word').forEach((element) => {
        element.classList.remove('active');
      });
      e.target.classList.add('active');
      textarea.value += e.target.textContent;
      textarea.blur();
      e.target.classList.remove('active');
    });
  });
  document.addEventListener('mousedown', (e) => {
    textArray.push(e.target.textContent);
    e.target.classList.add('active');
  });

  document.addEventListener('mouseup', (e) => {
    textarea.focus();
    e.target.classList.remove('active');
    textarea.selectionStart = textarea.selectionEnd;
    textarea.selectionEnd = textArray.length;
    textarea.setSelectionRange(textArray.length, textArray.length);
  });

  document.addEventListener('mouseout', (e) => {
    e.target.classList.remove('active');
  });
});
