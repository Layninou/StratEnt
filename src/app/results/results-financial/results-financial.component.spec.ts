import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultsFinancialComponent } from './results-financial.component';

describe('ResultsFinancialComponent', () => {
  let component: ResultsFinancialComponent;
  let fixture: ComponentFixture<ResultsFinancialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultsFinancialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultsFinancialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
