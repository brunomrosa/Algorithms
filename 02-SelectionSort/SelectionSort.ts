/*
 * * Ordering lists to use Binary Search
 */
export class SelectionSort {
  public searchForLowest(list: number[]) {
    let lowest = list[0];
    let lowestIndex: number = 0;

    for (let index in list) {
      if (list[index] < lowest) {
        lowest = list[index];
        lowestIndex = parseInt(index);
      }
    }

    return lowestIndex;
  }

  public selectionSort(list: number[]) {
    const newList: number[] = [];

    let length = list.length;

    while (length--) {
      // while length != 0
      const lowest = this.searchForLowest(list);
      newList.push(list.splice(lowest, 1)[0]);
    }

    return newList;
  }
}
