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

  select(option: number): void {
    this.choice.emit(option);
  }
}
