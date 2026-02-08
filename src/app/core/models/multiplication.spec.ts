import { Multiplication } from './multiplication';

describe('Multiplication', () => {
    it('calculates correct solution', () => {
        const task = new Multiplication(3, 7);
        expect(task.solution()).toBe(21);
    });

    it('verifies correct answer', () => {
        const task = new Multiplication(4, 5);
        expect(task.check(20)).toBeTrue();
    });

    it('rejects incorrect answer', () => {
        const task = new Multiplication(2, 2);
        expect(task.check(5)).toBeFalse();
    });

    it('returns factors', () => {
        const task = new Multiplication(6, 8);
        expect(task.first()).toBe(6);
        expect(task.second()).toBe(8);
    });
});
