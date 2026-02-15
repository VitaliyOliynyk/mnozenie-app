/**
 * Definition of an exercise module.
 * 
 * This interface defines the structure of an exercise module that can be
 * dynamically loaded into the application.
 * 
 * @example
 * const mathMultiplication: ExerciseModuleDefinition = {
 *   subjectId: 'math',
 *   exerciseId: 'multiplication',
 *   displayName: 'mnożenie',
 *   subjectDisplayName: 'matematyka',
 *   loadComponent: () => import('./features/exercises/math-multiplication/math-multiplication.component')
 *     .then(m => m.MathMultiplicationComponent)
 * };
 */
export interface ExerciseModuleDefinition {
    /**
     * Unique identifier for the subject (e.g., 'math', 'polish').
     */
    subjectId: string;

    /**
     * Unique identifier for the exercise within the subject (e.g., 'multiplication', 'u-o').
     */
    exerciseId: string;

    /**
     * Display name of the exercise (e.g., 'mnożenie', 'U oraz ó w wyrazach').
     */
    displayName: string;

    /**
     * Display name of the subject (e.g., 'matematyka', 'język polski').
     */
    subjectDisplayName: string;

    /**
     * Function to lazy load the exercise component.
     * 
     * @returns Promise resolving to the component class.
     */
    loadComponent: () => Promise<any>;
}
