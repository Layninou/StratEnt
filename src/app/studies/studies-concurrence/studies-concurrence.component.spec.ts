import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudiesConcurrenceComponent } from './studies-concurrence.component';

describe('StudiesConcurrenceComponent', () => {
  let component: StudiesConcurrenceComponent;
  let fixture: ComponentFixture<StudiesConcurrenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudiesConcurrenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudiesConcurrenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
