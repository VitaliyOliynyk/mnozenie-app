import { Injectable } from '@angular/core';
import { ExerciseModuleDefinition } from './exercise.interface';

/**
 * Service responsible for managing exercise module registration and loading.
 * 
 * This service maintains a registry of all available exercise modules and
 * provides methods to query and load them dynamically.
 * 
 * @example
 * // Register a module
 * registry.register({
 *   subjectId: 'math',
 *   exerciseId: 'multiplication',
 *   displayName: 'mnożenie',
 *   subjectDisplayName: 'matematyka',
 *   loadComponent: () => import('./features/exercises/math-multiplication/math-multiplication.component')
 * });
 * 
 * // Get all subjects
 * const subjects = registry.subjects();
 * 
 * // Load an exercise
 * const component = await registry.load('math', 'multiplication');
 */
@Injectable({
    providedIn: 'root'
})
export class ExerciseRegistryService {
    private readonly modules: Map<string, ExerciseModuleDefinition> = new Map();

    /**
     * Registers an exercise module.
     * 
     * @param definition - The exercise module definition to register.
     */
    register(definition: ExerciseModuleDefinition): void {
        const key = this.key(definition.subjectId, definition.exerciseId);
        this.modules.set(key, definition);
    }

    /**
     * Returns a list of all unique subjects.
     * 
     * @returns Array of objects containing subjectId and subjectDisplayName.
     */
    subjects(): Array<{ subjectId: string; subjectDisplayName: string }> {
        const map = new Map<string, string>();
        this.modules.forEach(module => {
            map.set(module.subjectId, module.subjectDisplayName);
        });
        return Array.from(map.entries()).map(([subjectId, subjectDisplayName]) => ({
            subjectId,
            subjectDisplayName
        }));
    }

    /**
     * Returns a list of exercises for a given subject.
     * 
     * @param subjectId - The subject identifier.
     * @returns Array of objects containing exerciseId and displayName.
     */
    exercises(subjectId: string): Array<{ exerciseId: string; displayName: string }> {
        const result: Array<{ exerciseId: string; displayName: string }> = [];
        this.modules.forEach(module => {
            if (module.subjectId === subjectId) {
                result.push({
                    exerciseId: module.exerciseId,
                    displayName: module.displayName
                });
            }
        });
        return result;
    }

    /**
     * Loads the component for a given exercise.
     * 
     * @param subjectId - The subject identifier.
     * @param exerciseId - The exercise identifier.
     * @returns Promise resolving to the component class, or null if not found.
     */
    async load(subjectId: string, exerciseId: string): Promise<any> {
        const key = this.key(subjectId, exerciseId);
        const module = this.modules.get(key);
        if (!module) {
            return null;
        }
        return await module.loadComponent();
    }

    /**
     * Returns the default exercise module definition.
     * 
     * @returns The default exercise (matematyka - mnożenie), or null if not registered.
     */
    default(): ExerciseModuleDefinition | null {
        const key = this.key('math', 'multiplication');
        return this.modules.get(key) || null;
    }

    /**
     * Gets the module definition for a specific exercise.
     * 
     * @param subjectId - The subject identifier.
     * @param exerciseId - The exercise identifier.
     * @returns The module definition, or null if not found.
     */
    definition(subjectId: string, exerciseId: string): ExerciseModuleDefinition | null {
        const key = this.key(subjectId, exerciseId);
        return this.modules.get(key) || null;
    }

    private key(subjectId: string, exerciseId: string): string {
        return `${subjectId}:${exerciseId}`;
    }
}
