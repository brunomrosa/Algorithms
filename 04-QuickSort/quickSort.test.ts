import { DivideAndConquer } from "./divideAndConquer";

const quickSort = new DivideAndConquer();

test("Should sort array", () => {
  expect(quickSort.quickSort([3, 1, 5])).toEqual([1, 3, 5]);
});

test("Should sort array", () => {
  expect(quickSort.quickSort([3, 1, 5, 9, 2])).toEqual([1, 2, 3, 5, 9]);
});

test("Should sort array", () => {
  expect(quickSort.quickSort([10])).toEqual([10]);
});
