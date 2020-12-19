import {
  printSumOfIntegerBetween50And100,
  printMultiplicationTable,
  printAverageOfPositiveOddNumsLessThanInput,
} from "./homework3";

describe("Homework 3", () => {
  beforeEach(() => {
    jest.spyOn(console, "log");
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
  describe("Check printSumOfIntegerBetween50And100", () => {
    it("prints 3825", () => {
      printSumOfIntegerBetween50And100();
      expect(console.log.mock.calls[0][0]).toBe(3825);
    });
  });
  describe("Check printMultiplicationTable", () => {
    it("prints multiplication table for 7", () => {
      printMultiplicationTable();
      expect(console.log.mock.calls[0][0]).toBe("7*0=0");
      expect(console.log.mock.calls[1][0]).toBe("7*1=7");
      expect(console.log.mock.calls[2][0]).toBe("7*2=14");
      expect(console.log.mock.calls[3][0]).toBe("7*3=21");
      expect(console.log.mock.calls[4][0]).toBe("7*4=28");
      expect(console.log.mock.calls[5][0]).toBe("7*5=35");
      expect(console.log.mock.calls[6][0]).toBe("7*6=42");
      expect(console.log.mock.calls[7][0]).toBe("7*7=49");
      expect(console.log.mock.calls[8][0]).toBe("7*8=56");
      expect(console.log.mock.calls[9][0]).toBe("7*9=63");
    });
  });
  describe("Check printAverageOfPositiveOddNumsLessThanInput", () => {
    it("prints 5 for 10", () => {
      jest.spyOn(window, "prompt").mockImplementation(() => "10");
      printAverageOfPositiveOddNumsLessThanInput();
      expect(console.log.mock.calls[0][0]).toBe(5);
    });
  });
});
