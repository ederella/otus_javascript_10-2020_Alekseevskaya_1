import { getStringTypeByInput } from "./homework10";

describe("Homework 9", () => {
  describe("Check getStringTypeByInput", () => {
    it("returns <date> for 24.12.2020", () => {
      jest.spyOn(window, "prompt").mockImplementation(() => "24.12.2020");
      expect(getStringTypeByInput()).toBe("date");
    });
    it("returns <email> for info@yandex.ru", () => {
      jest.spyOn(window, "prompt").mockImplementation(() => "info@yandex.ru");
      expect(getStringTypeByInput()).toBe("email");
    });
    it("returns <phone> for +7(926)123-45-67", () => {
      jest.spyOn(window, "prompt").mockImplementation(() => "+7(926)123-45-67");
      expect(getStringTypeByInput()).toBe("phone");
    });
    it("returns <not found> for abrakadabra111!", () => {
      jest.spyOn(window, "prompt").mockImplementation(() => "abrakadabra111!");
      expect(getStringTypeByInput()).toBe("not found");
    });
  });
});
