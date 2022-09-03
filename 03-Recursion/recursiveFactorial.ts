/*
 * * Demonstrating recursive functions to calculate a number factorial
 */
export class CalculateFactorial {
  public execute(target: number): number {
    if (target <= 1) {
      return 1;
    } else {
      return target * this.execute(target - 1);
    }
  }
}
