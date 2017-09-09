import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyFabricationComponent } from './company-fabrication.component';

describe('CompanyFabricationComponent', () => {
  let component: CompanyFabricationComponent;
  let fixture: ComponentFixture<CompanyFabricationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyFabricationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyFabricationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
