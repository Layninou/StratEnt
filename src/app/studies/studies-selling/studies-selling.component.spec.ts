import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudiesSellingComponent } from './studies-selling.component';

describe('StudiesSellingComponent', () => {
  let component: StudiesSellingComponent;
  let fixture: ComponentFixture<StudiesSellingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudiesSellingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudiesSellingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
