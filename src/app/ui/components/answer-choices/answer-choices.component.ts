import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';

@Component({
  selector: 'app-answer-choices',
  standalone: true,
  imports: [],
  templateUrl: './answer-choices.component.html',
  styleUrl: './answer-choices.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AnswerChoicesComponent {
  readonly options = input.required<number[]>();
  readonly choice = output<number>();
  readonly correctAnswer = input<number>();
  readonly highlight = input<boolean>(false);
  readonly disabled = input<boolean>(false);

  select(option: number): void {
    if (!this.disabled()) {
      this.choice.emit(option);
    }
  }
}
