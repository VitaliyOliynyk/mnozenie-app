import { Component, Input, Output, EventEmitter, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { ExerciseRegistryService } from '../../core/exercise-registry.service';

/**
 * Exercise selection event data.
 */
export interface ExerciseSelection {
    subjectId: string;
    exerciseId: string;
}

/**
 * Sidebar component for selecting exercises.
 * 
 * This component displays a list of subjects and their exercises,
 * allowing users to switch between different exercises.
 */
@Component({
    selector: 'app-exercise-sidebar',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './exercise-sidebar.component.html',
    styleUrl: './exercise-sidebar.component.scss',
    animations: [
        trigger('slideIn', [
            state('closed', style({
                transform: 'translateX(-100%)'
            })),
            state('open', style({
                transform: 'translateX(0)'
            })),
            transition('closed <=> open', [
                animate('300ms cubic-bezier(0.4, 0.0, 0.2, 1)')
            ])
        ]),
        trigger('fadeIn', [
            state('closed', style({
                opacity: 0,
                visibility: 'hidden'
            })),
            state('open', style({
                opacity: 1,
                visibility: 'visible'
            })),
            transition('closed <=> open', [
                animate('300ms ease-in-out')
            ])
        ])
    ]
})
export class ExerciseSidebarComponent {
    private readonly registry = inject(ExerciseRegistryService);

    /**
     * Whether the sidebar is open.
     */
    @Input() isOpen: boolean = false;

    /**
     * Event emitted when the sidebar should close.
     */
    @Output() close = new EventEmitter<void>();

    /**
     * Event emitted when an exercise is selected.
     */
    @Output() exerciseSelected = new EventEmitter<ExerciseSelection>();

    /**
     * Currently expanded subject ID.
     */
    readonly expandedSubject = signal<string | null>(null);

    /**
     * Gets all available subjects.
     */
    get subjects() {
        return this.registry.subjects();
    }

    /**
     * Gets exercises for a specific subject.
     */
    exercises(subjectId: string) {
        return this.registry.exercises(subjectId);
    }

    /**
     * Toggles subject expansion.
     */
    toggleSubject(subjectId: string): void {
        if (this.expandedSubject() === subjectId) {
            this.expandedSubject.set(null);
        } else {
            this.expandedSubject.set(subjectId);
        }
    }

    /**
     * Checks if a subject is expanded.
     */
    isExpanded(subjectId: string): boolean {
        return this.expandedSubject() === subjectId;
    }

    /**
     * Handles exercise selection.
     */
    selectExercise(subjectId: string, exerciseId: string): void {
        this.exerciseSelected.emit({ subjectId, exerciseId });
    }

    /**
     * Handles overlay click to close sidebar.
     */
    onOverlayClick(): void {
        this.close.emit();
    }

    /**
     * Prevents event propagation.
     */
    onSidebarClick(event: Event): void {
        event.stopPropagation();
    }
}
