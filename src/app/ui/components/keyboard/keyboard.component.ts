import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';

@Component({
  selector: 'app-keyboard',
  standalone: true,
  imports: [],
  templateUrl: './keyboard.component.html',
  styleUrl: './keyboard.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class KeyboardComponent {
  readonly keyPress = output<number | 'DEL'>();
  readonly disabled = input<boolean>(false);

  onDigit(digit: number): void {
    if (!this.disabled()) {
      this.keyPress.emit(digit);
    }
  }

  onDelete(): void {
    if (!this.disabled()) {
      this.keyPress.emit('DEL');
    }
  }
}
