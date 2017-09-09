import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultsStructureComponent } from './results-structure.component';

describe('ResultsStructureComponent', () => {
  let component: ResultsStructureComponent;
  let fixture: ComponentFixture<ResultsStructureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultsStructureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultsStructureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
