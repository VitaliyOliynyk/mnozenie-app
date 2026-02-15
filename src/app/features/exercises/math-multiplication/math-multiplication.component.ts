import { ChangeDetectionStrategy, Component, effect, inject, signal } from '@angular/core';
import { GameService } from '../../../core/services/game.service';
import { TaskDisplayComponent } from '../../../ui/components/task-display/task-display.component';
import { AnswerChoicesComponent } from '../../../ui/components/answer-choices/answer-choices.component';
import { AnswerInputComponent } from '../../../ui/components/answer-input/answer-input.component';
import { StatsComponent } from '../../../ui/components/stats/stats.component';
import { SettingsComponent } from '../../../ui/components/settings/settings.component';
import { FeedbackBannerComponent } from '../../../ui/common/components/feedback-banner/feedback-banner.component';
import { Settings, GameMode } from '../../../core/models/settings';

/**
 * Component for the multiplication exercise.
 * 
 * This component implements the multiplication practice exercise, allowing
 * users to practice multiplication tables with configurable settings.
 */
@Component({
    selector: 'app-math-multiplication',
    standalone: true,
    imports: [
        TaskDisplayComponent,
        AnswerChoicesComponent,
        AnswerInputComponent,
        StatsComponent,
        SettingsComponent,
        FeedbackBannerComponent,
    ],
    templateUrl: './math-multiplication.component.html',
    styleUrl: './math-multiplication.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MathMultiplicationComponent {
    readonly game = inject(GameService);
    readonly showSettings = signal(false);
    readonly GameMode = GameMode;

    readonly feedbackState = signal<'idle' | 'result' | 'correction'>('idle');
    readonly currentInputValue = signal<string>('');

    constructor() {
        effect(() => {
            const result = this.game.lastResult();

            if (result === true) {
                this.feedbackState.set('result');
                this.currentInputValue.set('');
                setTimeout(() => {
                    this.game.nextTask();
                    this.feedbackState.set('idle');
                }, 1000);
            } else if (result === false) {
                this.feedbackState.set('result');
                this.currentInputValue.set('');
                setTimeout(() => {
                    this.feedbackState.set('correction');
                    setTimeout(() => {
                        this.game.nextTask();
                        this.feedbackState.set('idle');
                    }, 1000);
                }, 1000);
            }
        }, { allowSignalWrites: true });
    }

    /**
     * Toggles the settings panel visibility.
     */
    toggleSettings(): void {
        this.showSettings.update(v => !v);
    }

    /**
     * Handles settings save event.
     */
    onSettingsSave(settings: Settings): void {
        this.game.settings.set(settings);
        this.game.resetStats();
        this.game.nextTask();
        this.showSettings.set(false);
    }

    /**
     * Updates current input value.
     */
    onInputValueChange(value: string): void {
        this.currentInputValue.set(value);
    }
}
