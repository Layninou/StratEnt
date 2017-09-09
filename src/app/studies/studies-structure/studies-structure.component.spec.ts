import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudiesStructureComponent } from './studies-structure.component';

describe('StudiesStructureComponent', () => {
  let component: StudiesStructureComponent;
  let fixture: ComponentFixture<StudiesStructureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudiesStructureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudiesStructureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
