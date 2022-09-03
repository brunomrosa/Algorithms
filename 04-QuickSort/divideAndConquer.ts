/*
 * * Divide and conquer strategy to sum all numbers in an array using recursive a function
 */
export class DivideAndConquer {
  public sumAll(list: number[]): number {
    return list.length == 1 ? list[0] : list[0] + this.sumAll(list.slice(1));
  }

  public countItemsOnList(list: number[]): number {
    return list.length == 0 ? 0 : 1 + this.countItemsOnList(list.splice(1));
  }
}
