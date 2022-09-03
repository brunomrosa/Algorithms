import { CalculateFactorial } from "./recursiveFactorial";

const calc = new CalculateFactorial();

test("Factorial 5 should be 120", () => {
  expect(calc.execute(5)).toBe(120);
});

test("Factorial 3 should be 120", () => {
  expect(calc.execute(3)).toBe(6);
});
