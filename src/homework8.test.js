import {
  printDayNameByDateFromInput,
  printMinutesFromStartOfToday,
  getYongestUser,
} from "./homework8";

class MockDate extends Date {
  constructor() {
    const d = super("2020-12-16");
    d.setHours(0, 55);
    return d;
  }
}
describe("Homework 8", () => {
  beforeEach(() => {
    jest.spyOn(console, "log");
  });

  describe("Check printDayNameByDateFromInput", () => {
    jest.spyOn(window, "prompt").mockImplementation(() => "04.12.2020");
    jest.spyOn(Date.prototype, "getDay").mockReturnValue(5);
    it("calls getDay", () => {
      printDayNameByDateFromInput();
      expect(Date.prototype.getDay).toHaveBeenCalled();
    });
    it("calls returns пятница", () => {
      printDayNameByDateFromInput();
      expect(console.log.mock.calls[0][0]).toBe("пятница");
    });
  });
  describe("Check printMinutesFromStartOfToday", () => {
    it("returns 55 for 00:55", () => {
      global.Date = MockDate;
      printMinutesFromStartOfToday();
      expect(console.log.mock.calls[0][0]).toBe(55);
    });
  });

  describe("Check getYongestUser", () => {
    it("returns 04.12.1992 for 24.01.1986 and 04.12.1992", () => {
      expect(getYongestUser("24.01.1986", "04.12.1992")).toEqual("04.12.1992");
    });
  });
});
