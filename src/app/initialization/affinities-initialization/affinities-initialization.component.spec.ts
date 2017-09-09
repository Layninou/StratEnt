import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AffinitiesInitializationComponent } from './affinities-initialization.component';

describe('AffinitiesInitializationComponent', () => {
  let component: AffinitiesInitializationComponent;
  let fixture: ComponentFixture<AffinitiesInitializationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AffinitiesInitializationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AffinitiesInitializationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
