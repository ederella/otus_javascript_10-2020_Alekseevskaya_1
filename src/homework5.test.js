import {
  getSimpleArray,
  printSumOfArrayElements,
  getDoubleNumbersArray,
  printMaxElement,
  printMinElement,
} from "./homework5";

beforeEach(() => {
  jest.spyOn(console, "log");
});

afterEach(() => {
  jest.clearAllMocks();
});

describe("Homework 5", () => {
  const simpleArray = getSimpleArray();

  describe("Check printSumOfArrayElements", () => {
    it("prints 45", () => {
      printSumOfArrayElements(simpleArray);
      expect(console.log.mock.calls[0][0]).toBe(45);
    });
  });
  describe("Check getDoubleNumbersArray", () => {
    it("creates a new array with doubled elements", () => {
      const ar = getDoubleNumbersArray(simpleArray);
      expect(Array.isArray(ar)).toBeTruthy();
      expect(ar.length).toEqual(simpleArray.length);
      for (let i; i < simpleArray; i++) {
        expect(ar[i]).toEqual(simpleArray[i] * 2);
      }
    });
  });
  describe("Check printMaxElement", () => {
    it("prints max element", () => {
      printMaxElement(simpleArray);
      expect(console.log.mock.calls[0][0]).toBe(9);
    });
  });
  describe("Check printMinElement", () => {
    it("prints min element", () => {
      printMinElement(simpleArray);
      expect(console.log.mock.calls[0][0]).toBe(0);
    });
  });
});
