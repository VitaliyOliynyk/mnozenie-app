import { ChangeDetectionStrategy, Component, input, output, signal } from '@angular/core';
import { KeyboardComponent } from '../keyboard/keyboard.component';

@Component({
  selector: 'app-answer-input',
  standalone: true,
  imports: [KeyboardComponent],
  templateUrl: './answer-input.component.html',
  styleUrl: './answer-input.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AnswerInputComponent {
  readonly answer = output<number>();
  readonly valueChange = output<string>();
  readonly value = signal<string>('');
  readonly disabled = input<boolean>(false);

  onKey(key: number | 'DEL'): void {
    if (this.disabled()) return;
    if (key === 'DEL') {
      this.value.update(v => v.slice(0, -1));
    } else if (this.value().length < 3) {
      this.value.update(v => v + key);
    }
    this.valueChange.emit(this.value());
  }

  submit(): void {
    if (this.disabled()) return;
    const val = this.value();
    if (val) {
      this.answer.emit(parseInt(val, 10));
      this.value.set('');
      this.valueChange.emit('');
    }
  }
}
