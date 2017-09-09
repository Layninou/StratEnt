import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudiesInitializationComponent } from './studies-initialization.component';

describe('StudiesInitializationComponent', () => {
  let component: StudiesInitializationComponent;
  let fixture: ComponentFixture<StudiesInitializationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudiesInitializationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudiesInitializationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
