/*
 * * Divide and conquer strategy to sum all numbers in an array using recursive a function
 * * Also methods to count all items in a list and to find the number with the max value
 * * And by last a method to do binary search with recursive structure
 */
export class DivideAndConquer {
  public sumAll(list: number[]): number {
    return list.length == 1 ? list[0] : list[0] + this.sumAll(list.slice(1));
  }

  public countItemsOnList(list: number[]): number {
    return list.length == 0 ? 0 : 1 + this.countItemsOnList(list.slice(1));
  }

  public maxNumberOnList(list: number[], max = 0): number {
    return list.length == 0
      ? max
      : this.maxNumberOnList(list.slice(1), list[0] > max ? list[0] : max);
  }

  public binarySearch(list: number[], target: number): number | undefined {
    if (list.length === 0) return undefined;

    const lowest = 0;
    const higher = list.length;

    let middle = Math.floor((lowest + higher) / 2);
    let attempt = list[middle];

    if (target == attempt) return middle;

    if (attempt > target) {
      return this.binarySearch(list.splice(0, (list.length - 1) / 2), target);
    } else {
      return this.binarySearch(
        list.splice(
          Math.floor((list.length - 1) / 2),
          Math.floor((list.length - 1) / 2)
        ),
        target
      );
    }
  }
}
