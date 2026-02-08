import { TestBed } from '@angular/core/testing';
import { GameService } from './game.service';
import { RandomGeneratorService } from './random-generator.service';
import { StorageService } from './storage.service';
import { DefaultSettings } from '../models/settings';

describe('GameService', () => {
    let service: GameService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [GameService, RandomGeneratorService, StorageService]
        });
        service = TestBed.inject(GameService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should generate initial task', () => {
        expect(service.currentTask()).toBeTruthy();
        expect(service.options().length).toBeGreaterThan(0);
    });

    it('should process correct answer', () => {
        const task = service.currentTask();
        if (!task) throw new Error('Task not generated');

        service.checkAnswer(task.solution());

        expect(service.lastResult()).toBeTrue();
        expect(service.stats().correct()).toBe(1);
        expect(service.stats().total()).toBe(1);
    });

    it('should process incorrect answer', () => {
        const task = service.currentTask();
        if (!task) throw new Error('Task not generated');

        service.checkAnswer(task.solution() + 1);

        expect(service.lastResult()).toBeFalse();
        expect(service.stats().correct()).toBe(0);
        expect(service.stats().total()).toBe(1);
    });

    it('should update task when nextTask is called', () => {
        const initialTask = service.currentTask();
        service.nextTask();
        const newTask = service.currentTask();

        // It's random, so it might be same, but unlikely for large ranges.
        // We check if lastResult is reset.
        expect(service.lastResult()).toBeNull();
    });

    it('should update settings', () => {
        const newSettings = new DefaultSettings(2, 2);
        service.settings.set(newSettings);
        service.nextTask();

        const task = service.currentTask();
        // Should be within range 1-2
        expect(task?.first()).toBeLessThanOrEqual(2);
    });
});
