import { Injectable } from '@angular/core';
import { Task } from '../models/task';
import { TaskSource } from '../models/task-source';
import { Multiplication } from '../models/multiplication';
// Ideally we would inject Settings via token, but for simplicity we use the default implementation as a provider
// or we can use providedIn root on the class itself.
// We will just create a new instance if not provided, or let DI handle it.
// For this simple app, hardcoded limits in DefaultSettings are fine, but we will access them via instance.
import { DefaultSettings, Settings } from '../models/settings';

@Injectable({
    providedIn: 'root'
})
export class RandomGeneratorService implements TaskSource {
    /**
     * Generates next random task.
     */
    next(settings: Settings): Task {
        const a = this.random(settings.maxFirst());
        const b = this.random(settings.maxSecond());
        return new Multiplication(a, b);
    }

    /**
     * Generates answer options (1 correct + 3 wrong).
     */
    generateOptions(correct: number, settings: Settings): number[] {
        const options = new Set<number>();
        options.add(correct);

        while (options.size < 4) {
            // Logic for distractors: can be random or close to correct
            // For simplicity: random 1-50
            const distractor = this.random(settings.maxFirst() * settings.maxSecond());
            if (distractor !== correct) {
                options.add(distractor);
            }
        }

        return Array.from(options).sort(() => Math.random() - 0.5);
    }

    private random(max: number): number {
        return Math.floor(Math.random() * max) + 1;
    }
}
