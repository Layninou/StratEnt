import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultsProductionsComponent } from './results-productions.component';

describe('ResultsProductionsComponent', () => {
  let component: ResultsProductionsComponent;
  let fixture: ComponentFixture<ResultsProductionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultsProductionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultsProductionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
