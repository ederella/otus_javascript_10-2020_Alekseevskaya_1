import { pageLoad, showButton, addParagraphFromInput } from "./homework7";

describe("Homework 7", () => {
  beforeEach(() => {
    document.body.innerHTML = `<div class="div">
    <p class= "text1">Сверстать страницу </p>
    <p class= "text2">На странице должны быть </p>
    <p class= "text3">Напишите скрипт, который </p>
   </div>
   <input class="input"></input>
   <button class="button">Кнопка</button>`;
  });

  describe("Check pageLoad", () => {
    it("makes button hidden", () => {
      pageLoad();
      const btn = document.querySelector(".button");
      expect(btn.hidden === true);
    });
  });

  describe("Check showButton", () => {
    it("shows the button", () => {
      showButton();
      const btn = document.querySelector(".button");
      expect(btn.hidden === false);
    });
  });

  describe("Check addParagraphFromInput", () => {
    it("creates a new paragraph", () => {
      const inp = document.querySelector(".input");
      inp.value = "123";
      const el = document.querySelector(".div");
      const count = el.children.length;
      addParagraphFromInput();
      expect(el.children.length === count + 1);
    });
  });
});
