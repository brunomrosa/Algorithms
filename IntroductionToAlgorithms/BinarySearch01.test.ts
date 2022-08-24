import { BinarySearch } from "./BinarySearch01";

const search = new BinarySearch();

test("Value 3 should return index 1", () => {
  const list = [1, 3, 5, 7];

  expect(search.execute(3, list)).toBe(1);
});

test("Value 5 should return index 2", () => {
  const list = [1, 3, 5, 7];

  expect(search.execute(5, list)).toBe(2);
});
test("Value 9 should return null", () => {
  const list = [1, 3, 5, 7];

  expect(search.execute(9, list)).toBe(null);
});
