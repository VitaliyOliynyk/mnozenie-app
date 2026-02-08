import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AnswerChoicesComponent } from './answer-choices.component';

describe('AnswerChoicesComponent', () => {
  let component: AnswerChoicesComponent;
  let fixture: ComponentFixture<AnswerChoicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnswerChoicesComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(AnswerChoicesComponent);
    component = fixture.componentInstance;
    // Provide required input
    fixture.componentRef.setInput('options', [1, 2, 3, 4]);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
