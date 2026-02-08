import { Task } from './task';

/**
 * Represents a specific multiplication problem.
 * Usage:
 * const math = new Multiplication(3, 7);
 * math.solution(); // 21
 */
export class Multiplication implements Task {
    /**
     * Ctor.
     */
    constructor(
        private readonly a: number,
        private readonly b: number
    ) { }

    /**
     * Checks the answer.
     */
    check(answer: number): boolean {
        return this.solution() === answer;
    }

    /**
     * Returns first factor.
     */
    first(): number {
        return this.a;
    }

    /**
     * Returns second factor.
     */
    second(): number {
        return this.b;
    }

    /**
     * Calculates solution.
     */
    solution(): number {
        return this.a * this.b;
    }
}
