import { DivideAndConquer } from "./divideAndConquer";

const divideAndConquer = new DivideAndConquer();

test("Should return 5", () => {
  expect(divideAndConquer.maxNumberOnList([3, 1, 5])).toBe(5);
});

test("Should return 3", () => {
  expect(divideAndConquer.maxNumberOnList([3])).toBe(3);
});

test("Should return 0", () => {
  expect(divideAndConquer.maxNumberOnList([])).toBe(0);
});

test("Should return 20", () => {
  expect(divideAndConquer.maxNumberOnList([3, 1, 5, 1, 2, 20])).toBe(20);
});
