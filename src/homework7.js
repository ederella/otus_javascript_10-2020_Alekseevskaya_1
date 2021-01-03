/// / Задание 7
/* Сверстать страницу и подключить к ней файл со
скриптом. На странице должны быть три текстовых
параграфа, поле ввода и кнопка. Напишите скрипт,
который будет выполнять следующие условия:
1.Кнопка скрыта, если в поле ввода нет значения.
2.При клике на кнопку добавляется новый параграф,
содержащий текст из поля ввода.
3.*Если параграфов становится больше 5, первый из
них удаляется. */

export function showButton() {
  const btn = document.querySelector(".button");
  btn.hidden = false;
}

export function addParagraphFromInput() {
  const div = document.querySelector(".div");
  const p = document.createElement("p");
  const input = document.querySelector(".input");
  p.innerText = input.value;
  div.append(p);
  input.value = "";
  if (div.children.length > 5) {
    const firstParagraph = div.children[0];
    firstParagraph.remove();
  }
}

export function pageLoad() {
  const btn = document.querySelector(".button");
  const input = document.querySelector(".input");

  btn.hidden = true;
  btn.addEventListener("click", addParagraphFromInput);
  input.addEventListener("input", showButton);
}
