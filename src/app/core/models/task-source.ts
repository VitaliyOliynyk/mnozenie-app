import { Settings } from './settings';
import { Task } from './task';

/**
 * Source of tasks.
 */
export interface TaskSource {
    /**
     * Returns the next task.
     */
    next(settings: Settings): Task;
}
