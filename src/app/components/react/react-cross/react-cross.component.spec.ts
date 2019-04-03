import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactCrossComponent } from './react-cross.component';

describe('ReactCrossComponent', () => {
  let component: ReactCrossComponent;
  let fixture: ComponentFixture<ReactCrossComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactCrossComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactCrossComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
