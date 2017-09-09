import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudiesPerformanceComponent } from './studies-performance.component';

describe('StudiesPerformanceComponent', () => {
  let component: StudiesPerformanceComponent;
  let fixture: ComponentFixture<StudiesPerformanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudiesPerformanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudiesPerformanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
