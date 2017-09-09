import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyClearingComponent } from './company-clearing.component';

describe('CompanyClearingComponent', () => {
  let component: CompanyClearingComponent;
  let fixture: ComponentFixture<CompanyClearingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyClearingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyClearingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
