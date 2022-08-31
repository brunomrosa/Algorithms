import { SelectionSort } from "./SelectionSort";

const sort = new SelectionSort();

test("Should order array to [3, 4, 7, 18, 29]", () => {
  const list = [7, 3, 4, 29, 18];

  expect(sort.selectionSort(list)).toEqual([3, 4, 7, 18, 29]);
});

test("Should return the lowest value index", () => {
  const list = [7, 3, 4, 29, 18];

  expect(sort.searchForLowest(list)).toBe(1);
});
