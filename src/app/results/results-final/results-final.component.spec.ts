import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultsFinalComponent } from './results-final.component';

describe('ResultsFinalComponent', () => {
  let component: ResultsFinalComponent;
  let fixture: ComponentFixture<ResultsFinalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultsFinalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultsFinalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
