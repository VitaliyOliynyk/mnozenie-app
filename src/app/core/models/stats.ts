/**
 * Represents game statistics.
 */
export interface Stats {
    /**
     * Returns total number of attempts.
     */
    total(): number;
    /**
     * Returns number of correct answers.
     */
    correct(): number;
    /**
     * Returns success rate as a percentage (0-100).
     */
    rate(): number;
}

/**
 * Mutable session statistics.
 * (Note: Mutable for simplicity in this context, but encapsulated)
 */
export class SessionStats implements Stats {
    constructor(
        private readonly _total: number = 0,
        private readonly _correct: number = 0
    ) { }

    total(): number {
        return this._total;
    }

    correct(): number {
        return this._correct;
    }

    rate(): number {
        if (this._total === 0) {
            return 0;
        }
        return Math.round((this._correct / this._total) * 100);
    }

    /**
     * Returns new stats with added attempt.
     */
    withAttempt(isCorrect: boolean): SessionStats {
        return new SessionStats(
            this._total + 1,
            this._correct + (isCorrect ? 1 : 0)
        );
    }
}
