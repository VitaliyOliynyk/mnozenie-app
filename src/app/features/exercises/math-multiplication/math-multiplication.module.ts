import { MathMultiplicationComponent } from './math-multiplication.component';

/**
 * Loads the MathMultiplicationComponent.
 * 
 * This function is used by the ExerciseRegistryService to lazy load
 * the multiplication exercise component.
 * 
 * @returns Promise resolving to the MathMultiplicationComponent class.
 */
export function loadComponent(): Promise<any> {
    return Promise.resolve(MathMultiplicationComponent);
}
