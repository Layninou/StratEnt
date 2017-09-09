import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComptabilityComponent } from './comptability.component';

describe('ComptabilityComponent', () => {
  let component: ComptabilityComponent;
  let fixture: ComponentFixture<ComptabilityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComptabilityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComptabilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
