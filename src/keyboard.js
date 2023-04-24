import "./sass/index.scss";
import { languageEn, languageRu } from "./language";

function createTemplate(template, classname, text) {
  const element = document.createElement(template);
  element.className = classname;
  element.innerHTML = text;
  return element;
}
const wrapper = createTemplate("div", "wrapper", "");

document.body.appendChild(wrapper);
wrapper.appendChild(createTemplate("h1", "title", "RSS Virtual Keyboard"));

function createButton(language) {
  const array = Object.values(language);
  // console.log(array);
  array.map((word) =>
    wrapper.appendChild(createTemplate("button", "word-en", word))
  );
}

createButton(languageEn);
createButton(languageRu);

// console.log(languageEn, languageRu);
