import { DivideAndConquer } from "./divideAndConquer";

const divideAndConquer = new DivideAndConquer();

test("Should return 1", () => {
  expect(divideAndConquer.binarySearch([1, 3, 5], 3)).toBe(1);
});

test("Should return 2", () => {
  expect(
    divideAndConquer.binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3)
  ).toBe(2);
});

test("Should return 0", () => {
  expect(
    divideAndConquer.binarySearch([18, 22, 38, 41, 59, 62, 70, 81, 90, 120], 18)
  ).toBe(0);
});

test("Should return undefined", () => {
  expect(
    divideAndConquer.binarySearch([18, 22, 38, 41, 59, 62, 70, 81, 90, 120], 19)
  ).toBe(undefined);
});

test("Should return undefined", () => {
  expect(divideAndConquer.binarySearch([], 18)).toBe(undefined);
});
