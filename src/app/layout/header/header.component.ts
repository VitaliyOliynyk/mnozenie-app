import { Component, Input, Output, EventEmitter } from '@angular/core';

/**
 * Header component displaying current subject and exercise information.
 * 
 * This component shows the currently selected subject and exercise,
 * along with a menu button to open the exercise selection sidebar.
 */
@Component({
    selector: 'app-header',
    standalone: true,
    imports: [],
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss'
})
export class HeaderComponent {
    /**
     * Display name of the current subject.
     */
    @Input() subjectDisplayName: string = '';

    /**
     * Display name of the current exercise.
     */
    @Input() exerciseDisplayName: string = '';

    /**
     * Event emitted when the menu button is clicked.
     */
    @Output() menuClick = new EventEmitter<void>();

    /**
     * Handles menu button click.
     */
    onMenuClick(): void {
        this.menuClick.emit();
    }
}
