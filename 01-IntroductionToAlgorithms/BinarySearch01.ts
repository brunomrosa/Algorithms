/*
 * * Binary search only works on ordered lists
 */
export class BinarySearch {
  list: number[];

  public execute(target: number, list) {
    let lowest = 0;
    let higher = list.length - 1;

    while (lowest <= higher) {
      let middle = Math.floor((lowest + higher) / 2);

      const attempt = list[middle];

      if (attempt === target) {
        return middle;
      }
      if (attempt > target) {
        higher = middle - 1;
      } else {
        lowest = middle + 1;
      }
    }

    return null;
  }
}
