/*
 * * Divide and conquer strategy to sum all numbers in an array using recursive a function
 * * Also methods to count all items in a list and to find the number with the max value
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
}
