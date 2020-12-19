import {
  createUserAndSetAgeFromInput,
  createAdmin,
  createVariablesFromFields,
} from "./homework4";

beforeEach(() => {
  jest.spyOn(console, "log");
});

afterEach(() => {
  jest.clearAllMocks();
});

describe("Homework 4", () => {
  describe("Check createUserAndSetAgeFromInput", () => {
    it("creates user, age 45, name John", () => {
      jest.spyOn(window, "prompt").mockImplementation(() => "45");
      const o = createUserAndSetAgeFromInput();
      expect(typeof o).toBe("object");
      expect(o.age).toBe("45");
      expect(o.name).toBe("John");
    });
  });
  describe("Check createAdmin", () => {
    it("creates admin as copy of user with and admin role", () => {
      const user = {};
      const admin = createAdmin(user);
      expect(admin.role).toBe("admin");
      delete admin.role;
      expect(admin).toEqual(user);
    });
  });
  describe("Check createVariablesFromFields", () => {
    it("creates variables", () => {
      const admin = { name: "John", age: 45, role: "admin" };
      createVariablesFromFields(admin);
      expect(console.log.mock.calls[0][0]).toBe("John");
      expect(console.log.mock.calls[1][0]).toBe(45);
      expect(console.log.mock.calls[2][0]).toBe("admin");
    });
  });
});
