import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Task } from '../../../core/models/task';

@Component({
  selector: 'app-task-display',
  standalone: true,
  imports: [],
  templateUrl: './task-display.component.html',
  styleUrl: './task-display.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TaskDisplayComponent {
  readonly task = input.required<Task>();
  readonly userAnswer = input<string>('');
}
