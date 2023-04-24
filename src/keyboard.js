import "./sass/index.scss";
import { languageEn, languageRu } from "./language";

function createTemplate(template, classname, text, classname2) {
  const element = document.createElement(template);
  element.className = classname2;
  element.classList.add(classname);
  element.innerHTML = text;
  return element;
}
const wrapper = createTemplate("div", "wrapper", "", "wrapper");

document.body.appendChild(wrapper);
wrapper.appendChild(
  createTemplate("h1", "title", "RSS Virtual Keyboard", "title")
);
wrapper.appendChild(createTemplate("textarea", "textarea", "", "textarea"));

const keyboard = createTemplate("div", "keyboard", "", "keyboard");
wrapper.appendChild(keyboard);

function createButton(language) {
  const array = Object.values(language);
  array.map((word) =>
    keyboard.appendChild(
      createTemplate("button", `${word}`.toLowerCase(), word, "word")
    )
  );
  console.log(array);
}
const word = document.getElementsByClassName("word");
console.log(word);
createButton(languageEn);

wrapper.appendChild(
  createTemplate(
    "h3",
    "text",
    "Клавиатура создана на операционной системе Windows",
    "text"
  )
);
wrapper.appendChild(
  createTemplate(
    "h3",
    "text",
    "Для переключения языка комбинация: Shift + Alt",
    "text"
  )
);

console.log(languageEn, languageRu);
