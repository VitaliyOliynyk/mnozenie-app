import { ChangeDetectionStrategy, Component, effect, inject, signal } from '@angular/core';
import { GameService } from '../../../core/services/game.service';
import { TaskDisplayComponent } from '../../components/task-display/task-display.component';
import { AnswerChoicesComponent } from '../../components/answer-choices/answer-choices.component';
import { AnswerInputComponent } from '../../components/answer-input/answer-input.component';
import { StatsComponent } from '../../components/stats/stats.component';
import { SettingsComponent } from '../../components/settings/settings.component';
import { Settings, GameMode } from '../../../core/models/settings';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [
    TaskDisplayComponent,
    AnswerChoicesComponent,
    AnswerInputComponent,
    StatsComponent,
    SettingsComponent,
  ],
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GameComponent {
  readonly game = inject(GameService);
  readonly showSettings = signal(false);
  readonly GameMode = GameMode;

  readonly feedbackState = signal<'idle' | 'result' | 'correction'>('idle');

  constructor() {
    effect(() => {
      const result = this.game.lastResult();

      if (result === true) {
        // Correct answer: Show result briefly, then next
        this.feedbackState.set('result');
        setTimeout(() => {
          this.game.nextTask();
          this.feedbackState.set('idle');
        }, 1000);
      } else if (result === false) {
        // Incorrect answer: Show result (1s) -> Correction (1s) -> Next
        this.feedbackState.set('result');
        setTimeout(() => {
          this.feedbackState.set('correction');
          setTimeout(() => {
            this.game.nextTask();
            this.feedbackState.set('idle');
          }, 1000);
        }, 1000);
      }
    }, { allowSignalWrites: true }); // Enable signal writes in effect
  }

  toggleSettings(): void {
    this.showSettings.update(v => !v);
  }

  onSettingsSave(settings: Settings): void {
    this.game.settings.set(settings);
    this.game.resetStats();
    this.game.nextTask();
    this.showSettings.set(false);
  }
}
