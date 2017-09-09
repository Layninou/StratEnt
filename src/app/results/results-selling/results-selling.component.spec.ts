import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultsSellingComponent } from './results-selling.component';

describe('ResultsSellingComponent', () => {
  let component: ResultsSellingComponent;
  let fixture: ComponentFixture<ResultsSellingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultsSellingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultsSellingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
