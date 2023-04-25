import "./sass/index.scss";
import { objKeyEN, objKeyRu } from "./language";

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

function createButton(obj) {
  const array = Object.entries(obj).map((x) =>
    keyboard.appendChild(
      createTemplate("button", `${x[0]}`.toLowerCase(), x[1].key, "word")
    )
  );
  return array;
  // console.log(array);
}

createButton(objKeyRu);

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

document.addEventListener("mousedown", (e) => {
  e.target.classList.add("active");
});
document.addEventListener("mouseup", (e) => {
  e.target.classList.remove("active");
});

console.log(objKeyEN, objKeyRu);
