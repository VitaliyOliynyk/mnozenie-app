import { PolishUOComponent } from './polish-u-o.component';

/**
 * Loads the PolishUOComponent.
 * 
 * This function is used by the ExerciseRegistryService to lazy load
 * the Polish U/Ó exercise component.
 * 
 * @returns Promise resolving to the PolishUOComponent class.
 */
export function loadComponent(): Promise<any> {
    return Promise.resolve(PolishUOComponent);
}
