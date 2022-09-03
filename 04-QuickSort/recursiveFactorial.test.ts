import { DivideAndConquer } from "./divideAndConquer";

const divideAndConquer = new DivideAndConquer();

test("Should return 9", () => {
  expect(divideAndConquer.sumAll([3, 1, 5])).toBe(9);
});

test("Should return 26", () => {
  expect(divideAndConquer.sumAll([3, 1, 5, 9, 1, 5, 2])).toBe(26);
});

test("Arrays with only one number should return it", () => {
  expect(divideAndConquer.sumAll([10])).toBe(10);
});
