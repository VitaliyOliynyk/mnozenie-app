import { ChangeDetectionStrategy, Component, output } from '@angular/core';

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

  onDigit(digit: number): void {
    this.keyPress.emit(digit);
  }

  onDelete(): void {
    this.keyPress.emit('DEL');
  }
}
