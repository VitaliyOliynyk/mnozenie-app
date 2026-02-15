import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Reusable feedback banner component.
 * 
 * This component displays feedback messages (correct/wrong) with animations
 * and appropriate styling. It is used across different exercise modules.
 * 
 * @example
 * <app-feedback-banner 
 *   [type]="'correct'" 
 *   [show]="true">
 * </app-feedback-banner>
 */
@Component({
    selector: 'app-feedback-banner',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './feedback-banner.component.html',
    styleUrl: './feedback-banner.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class FeedbackBannerComponent {
    /**
     * Type of feedback to display.
     */
    @Input() type: 'correct' | 'wrong' | null = null;

    /**
     * Whether to show the banner.
     */
    @Input() show = false;
}
