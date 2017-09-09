import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultsChargeComponent } from './results-charge.component';

describe('ResultsChargeComponent', () => {
  let component: ResultsChargeComponent;
  let fixture: ComponentFixture<ResultsChargeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultsChargeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultsChargeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
