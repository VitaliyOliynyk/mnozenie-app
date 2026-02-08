import { Injectable, signal, computed } from '@angular/core';
import { RandomGeneratorService } from './random-generator.service';
import { StorageService } from './storage.service';
import { Task } from '../models/task';
import { Stats, SessionStats } from '../models/stats';
import { DefaultSettings, Settings } from '../models/settings';

@Injectable({
    providedIn: 'root'
})
export class GameService {
    /**
     * Current task to solve.
     */
    readonly currentTask = signal<Task | null>(null);

    /**
     * Result of the last immediate attempt.
     * null = waiting for answer.
     * true = correct.
     * false = incorrect.
     */
    readonly lastResult = signal<boolean | null>(null);

    /**
     * Current session statistics.
     */
    readonly stats = signal<SessionStats>(new SessionStats());

    /**
     * Available answer options for selection mode.
     */
    readonly options = signal<number[]>([]);

    /**
     * Current game settings.
     */
    readonly settings = signal<Settings>(new DefaultSettings());

    constructor(
        private readonly generator: RandomGeneratorService,
        private readonly storage: StorageService
    ) {
        this.nextTask();
    }

    /**
     * Generates the next task.
     */
    nextTask(): void {
        this.lastResult.set(null);
        const settings = this.settings();
        const task = this.generator.next(settings);
        this.currentTask.set(task);
        this.options.set(this.generator.generateOptions(task.solution(), settings));
    }

    /**
     * Processes the user's answer.
     */
    checkAnswer(answer: number): void {
        const task = this.currentTask();
        if (!task) {
            return;
        }

        const isCorrect = task.check(answer);
        this.lastResult.set(isCorrect);
        this.stats.update(s => s.withAttempt(isCorrect));

        // Save stats to storage (optional, for history)
        // this.storage.save('stats', JSON.stringify(this.stats()));
    }

    /**
     * Resets the session statistics.
     */
    resetStats(): void {
        this.stats.set(new SessionStats());
    }
}
