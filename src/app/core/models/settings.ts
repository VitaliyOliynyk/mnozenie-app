/**
 * Represents application settings.
 */
export enum GameMode {
    Choice = 'CHOICE',
    Input = 'INPUT'
}

/**
 * Represents application settings.
 */
export interface Settings {
    /**
     * Returns the maximum value for the first factor.
     */
    maxFirst(): number;
    /**
     * Returns the maximum value for the second factor.
     */
    maxSecond(): number;
    /**
     * Returns the current game mode.
     */
    mode(): GameMode;
}

/**
 * Default application settings.
 */
export class DefaultSettings implements Settings {
    constructor(
        private readonly first: number = 5,
        private readonly second: number = 10,
        private readonly gameMode: GameMode = GameMode.Choice
    ) { }

    maxFirst(): number {
        return this.first;
    }

    maxSecond(): number {
        return this.second;
    }

    mode(): GameMode {
        return this.gameMode;
    }
}
