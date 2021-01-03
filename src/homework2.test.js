import {
  printMax,
  printMonthNameByNumberFromInput,
  printWhetherCircleFitInToSquare,
} from "./homework2";

describe("Homework 2", () => {
  beforeEach(() => {
    jest.spyOn(console, "log");
  });

  describe("Check printMax", () => {
    it("prints max among 1 and 2", () => {
      printMax(1, 2);
      expect(console.log.mock.calls[0][0]).toBe(2);
    });
  });
  describe("Check printMonthNameByNumberFromInput", () => {
    it("prints март for 3", () => {
      jest.spyOn(window, "prompt").mockImplementation(() => "3");
      printMonthNameByNumberFromInput();
      expect(console.log.mock.calls[0][0]).toBe("март");
    });

    it("prints нет такого месяца for 30", () => {
      jest.spyOn(window, "prompt").mockImplementation(() => "30");
      printMonthNameByNumberFromInput();
      expect(console.log.mock.calls[0][0]).toBe("нет такого месяца");
    });
  });
  describe("Check printWhetherCircleFitInToSquare", () => {
    it("prints Поместится for 1 and 10", () => {
      printWhetherCircleFitInToSquare(1, 10);
      expect(console.log.mock.calls[0][0]).toBe("Поместится");
    });
    it("prints Не поместится for 10 and 10", () => {
      printWhetherCircleFitInToSquare(10, 10);
      expect(console.log.mock.calls[0][0]).toBe("Не поместится");
    });
  });
});
