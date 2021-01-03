import { diff, isWord, pow } from "./homework6";

describe("Homework 6", () => {
  describe("Check diff", () => {
    it("returns 10 for 20 and 30", () => {
      expect(diff(20, 30)).toBe(10);
    });
  });
  describe("Check isWord", () => {
    it("returns true for <apple>", () => {
      expect(isWord("apple")).toBe(true);
    });
    it("returns false for <an apple>", () => {
      expect(isWord("an apple")).toBe(false);
    });
  });
  describe("Check pow", () => {
    it("returns 1 for 2, 0", () => {
      expect(pow(2, 0)).toEqual(1);
    });
    it("returns 8 for 2, 3", () => {
      expect(pow(2, 3)).toEqual(8);
    });
  });
});
