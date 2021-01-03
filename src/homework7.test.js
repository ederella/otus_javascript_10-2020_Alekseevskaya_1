import { pageLoad, showButton, addParagraphFromInput } from "./homework7";

describe("Homework 7", () => {
  let btn;
  let inp;
  let el;
  beforeEach(() => {
    document.body.innerHTML = `<div class="div">
    <p class= "text1">Сверстать страницу </p>
    <p class= "text2">На странице должны быть </p>
    <p class= "text3">Напишите скрипт, который </p>
   </div>
   <input class="input"></input>
   <button class="button">Кнопка</button>`;
    btn = document.querySelector(".button");
    inp = document.querySelector(".input");
    el = document.querySelector(".div");
  });

  describe("Check pageLoad", () => {
    it("makes button hidden", () => {
      pageLoad();
      expect(btn.hidden === true);
    });
  });

  describe("Check showButton", () => {
    it("shows the button", () => {
      showButton();
      expect(btn.hidden === false);
    });
  });

  describe("Check addParagraphFromInput", () => {
    it("creates a new paragraph", () => {
      inp.value = "123";
      const count = el.children.length;
      addParagraphFromInput();
      expect(el.children.length === count + 1);
    });
  });

  describe("Check showButton call on events", () => {
    it("calls shows the button on input text", () => {
      const event = new window.Event("input");
      inp.dispatchEvent(event);
      expect(btn.hidden === false);
    });
  });

  describe("Check addParagraphFromInput call on events", () => {
    it("calls addParagraphFromInput on button click", () => {
      const event = new window.Event("click");
      const count = el.children.length;
      btn.dispatchEvent(event);
      expect(el.children.length === count + 1);
    });
  });
});
