import { ChangeDetectionStrategy, Component, effect, input, output, signal } from '@angular/core';
import { DefaultSettings, GameMode, Settings } from '../../../core/models/settings';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SettingsComponent {
  readonly currentSettings = input.required<Settings>();
  readonly save = output<Settings>();
  readonly close = output<void>();

  readonly firstMax = signal(5);
  readonly secondMax = signal(10);
  readonly gameMode = signal(GameMode.Choice);

  readonly GameMode = GameMode; // Expose enum to template

  constructor() {
    effect(() => {
      const s = this.currentSettings();
      // Only update if not modified? Or always reset on open?
      // Assuming this component is destroyed/recreated or input changes on open
      this.firstMax.set(s.maxFirst());
      this.secondMax.set(s.maxSecond());
      this.gameMode.set(s.mode());
    }, { allowSignalWrites: true });
  }

  onSave(): void {
    const newSettings = new DefaultSettings(
      this.firstMax(),
      this.secondMax(),
      this.gameMode()
    );
    this.save.emit(newSettings);
  }
}
