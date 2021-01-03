import { defineTriangle, printCircleInfo, solveEquation } from "./homework9";

describe("Homework 9", () => {
  beforeEach(() => {
    jest.spyOn(console, "log");
  });

  describe("Check defineTriangle", () => {
    it("returns true for 3,4,5", () => {
      expect(defineTriangle(3, 4, 5)).toBe(true);
    });
    it("returns true for 5,4,3", () => {
      expect(defineTriangle(5, 4, 3)).toBe(true);
    });
    it("returns false for 1,2,3", () => {
      expect(defineTriangle(1, 2, 3)).toBe(false);
    });
    describe("Check printCircleInfo", () => {
      it(`prints <Circle length: 62.83> 
	  and <Circle square: 314.16> for input 10`, () => {
        jest.spyOn(window, "prompt").mockImplementation(() => "10");
        printCircleInfo();
        expect(console.log.mock.calls[0][0]).toBe("Circle length: 62.83");
        expect(console.log.mock.calls[1][0]).toBe("Circle square: 314.16");
      });
    });
    describe("Check solveEquation", () => {
      it("prints no solution message for 1 2 3", () => {
        jest.spyOn(window, "prompt").mockImplementation(() => "1 2 3");
        solveEquation();
        expect(console.log.mock.calls[0][0]).toBe(
          "1x^2 + 2x + 3 = 0; no solution in the set of real numbers"
        );
      });
      it("prints x1 = -0.4, x2 = -1 for 5 7 2", () => {
        jest.spyOn(window, "prompt").mockImplementation(() => "5 7 2");
        solveEquation();
        expect(console.log.mock.calls[0][0]).toBe(
          "5x^2 + 7x + 2 = 0; x1 = -0.4, x2 = -1"
        );
      });
    });
  });
});
