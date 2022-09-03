import { DivideAndConquer } from "./divideAndConquer";

const divideAndConquer = new DivideAndConquer();

test("Should return 3", () => {
  expect(divideAndConquer.countItemsOnList([3, 1, 5])).toBe(3);
});

test("Should return 1", () => {
  expect(divideAndConquer.countItemsOnList([3])).toBe(1);
});

test("Should return 0", () => {
  expect(divideAndConquer.countItemsOnList([])).toBe(0);
});

test("Should return 0", () => {
  expect(divideAndConquer.countItemsOnList([3, 1, 5, 1, 2])).toBe(5);
});
