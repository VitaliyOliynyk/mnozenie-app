import { Component, ViewContainerRef, ViewChild, OnInit, inject, signal } from '@angular/core';
import { HeaderComponent } from './layout/header/header.component';
import { ExerciseSidebarComponent, ExerciseSelection } from './layout/exercise-sidebar/exercise-sidebar.component';
import { ExerciseRegistryService } from './core/exercise-registry.service';
import { loadComponent as loadMathMultiplication } from './features/exercises/math-multiplication/math-multiplication.module';
import { loadComponent as loadPolishUO } from './features/exercises/polish-u-o/polish-u-o.module';

/**
 * Root component of the application.
 * 
 * This component manages the dynamic loading of exercise modules and
 * provides the main layout with header and sidebar.
 */
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, ExerciseSidebarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  @ViewChild('exerciseHost', { read: ViewContainerRef }) exerciseHost!: ViewContainerRef;

  private readonly registry = inject(ExerciseRegistryService);

  readonly sidebarOpen = signal(false);
  readonly currentSubject = signal('');
  readonly currentExercise = signal('');

  /**
   * Initializes the component and registers exercise modules.
   */
  ngOnInit(): void {
    this.registerModules();
    this.loadDefaultExercise();
  }

  /**
   * Registers all available exercise modules.
   */
  private registerModules(): void {
    this.registry.register({
      subjectId: 'math',
      exerciseId: 'multiplication',
      displayName: 'mnożenie',
      subjectDisplayName: 'matematyka',
      loadComponent: loadMathMultiplication
    });

    this.registry.register({
      subjectId: 'polish',
      exerciseId: 'u-o',
      displayName: 'U oraz ó w wyrazach',
      subjectDisplayName: 'język polski',
      loadComponent: loadPolishUO
    });
  }

  /**
   * Loads the default exercise (matematyka - mnożenie).
   */
  private async loadDefaultExercise(): Promise<void> {
    const defaultModule = this.registry.default();
    if (defaultModule) {
      await this.loadExercise(defaultModule.subjectId, defaultModule.exerciseId);
    }
  }

  /**
   * Loads an exercise dynamically.
   */
  async loadExercise(subjectId: string, exerciseId: string): Promise<void> {
    const definition = this.registry.definition(subjectId, exerciseId);
    if (!definition) {
      return;
    }

    this.exerciseHost.clear();

    const component = await this.registry.load(subjectId, exerciseId);
    if (component) {
      this.exerciseHost.createComponent(component);
      this.currentSubject.set(definition.subjectDisplayName);
      this.currentExercise.set(definition.displayName);
    }
  }

  /**
   * Toggles sidebar visibility.
   */
  toggleSidebar(): void {
    this.sidebarOpen.update(v => !v);
  }

  /**
   * Closes the sidebar.
   */
  closeSidebar(): void {
    this.sidebarOpen.set(false);
  }

  /**
   * Handles exercise selection from sidebar.
   */
  async onExerciseSelected(selection: ExerciseSelection): Promise<void> {
    this.closeSidebar();
    await this.loadExercise(selection.subjectId, selection.exerciseId);
  }
}
