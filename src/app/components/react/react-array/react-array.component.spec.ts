import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactArrayComponent } from './react-array.component';

describe('ReactArrayComponent', () => {
  let component: ReactArrayComponent;
  let fixture: ComponentFixture<ReactArrayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactArrayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactArrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
