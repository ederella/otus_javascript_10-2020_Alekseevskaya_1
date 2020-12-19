import {
  printSumAndProduction,
  printTotalLengthOfStrings,
  printSumOfNumbersFromInput,
} from "./homework1";

beforeEach(() => {
  jest.spyOn(console, "log");
});

afterEach(() => {
  jest.clearAllMocks();
});

describe("Homework 1", () => {
  describe("Check printSumAndProduction", () => {
    it("prints 1+2=3; 1*2=2 for 1 and 2", () => {
      printSumAndProduction(1, 2);
      expect(console.log.mock.calls[0][0]).toBe("1+2=3; 1*2=2");
    });
  });
  describe("Check printTotalLengthOfStrings", () => {
    it("prints total=10 for Lambo and Ferra", () => {
      printTotalLengthOfStrings("Lambo", "Ferra");
      expect(console.log.mock.calls[0][0]).toBe("total=10");
    });
  });
  describe("Check printSumOfNumbersFromInput", () => {
    it("prints 6 for 123", () => {
      jest.spyOn(window, "prompt").mockImplementation(() => "123");
      printSumOfNumbersFromInput();
      expect(console.log.mock.calls[0][0]).toBe(6);
    });
  });
});
