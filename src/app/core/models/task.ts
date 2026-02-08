/**
 * Represents a learning task to be solved.
 * Usage:
 * const task = ...;
 * if (task.check(15)) { ... }
 */
export interface Task {
  /**
   * Checks if the provided answer is correct.
   */
  check(answer: number): boolean;
  /**
   * Returns the first factor of the multiplication.
   */
  first(): number;
  /**
   * Returns the second factor of the multiplication.
   */
  second(): number;
  /**
   * Returns the correct solution.
   */
  solution(): number;
}
