import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TaskDisplayComponent } from './task-display.component';
import { Multiplication } from '../../../core/models/multiplication';

describe('TaskDisplayComponent', () => {
  let component: TaskDisplayComponent;
  let fixture: ComponentFixture<TaskDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskDisplayComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(TaskDisplayComponent);
    component = fixture.componentInstance;
    // Provide required input
    fixture.componentRef.setInput('task', new Multiplication(2, 2));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
