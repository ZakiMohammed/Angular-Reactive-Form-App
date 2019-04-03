import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactChangeComponent } from './react-change.component';

describe('ReactChangeComponent', () => {
  let component: ReactChangeComponent;
  let fixture: ComponentFixture<ReactChangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactChangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
