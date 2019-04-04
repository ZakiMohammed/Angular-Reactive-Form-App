import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactChangeValidationComponent } from './react-change-validation.component';

describe('ReactChangeValidationComponent', () => {
  let component: ReactChangeValidationComponent;
  let fixture: ComponentFixture<ReactChangeValidationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactChangeValidationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactChangeValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
