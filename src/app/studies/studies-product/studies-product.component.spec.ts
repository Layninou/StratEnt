import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudiesProductComponent } from './studies-product.component';

describe('StudiesProductComponent', () => {
  let component: StudiesProductComponent;
  let fixture: ComponentFixture<StudiesProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudiesProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudiesProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
