import { Study } from "../src/moduleA";

const name = "test";
const age = 22
const testInfo = { name, age };

describe("Study", () => {
  test("should be defined", () => {
    expect(Study).toBeDefined();
  });
  test("should return name", () => {
    expect(new Study(testInfo).getName()).toBe(name);
  });
  test("should return age", () => {
    expect(new Study(testInfo).getAge()).toBe(age);
  });
  test("should return info", () => {
    expect(new Study(testInfo).getInfo()).toBe(`${name} is ${age} years old`);
  });
});
