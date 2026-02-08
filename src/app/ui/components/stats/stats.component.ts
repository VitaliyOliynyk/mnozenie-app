import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { Stats } from '../../../core/models/stats';

@Component({
  selector: 'app-stats',
  standalone: true,
  imports: [],
  templateUrl: './stats.component.html',
  styleUrl: './stats.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StatsComponent {
  readonly stats = input.required<Stats>();
  readonly reset = output<void>();
}
