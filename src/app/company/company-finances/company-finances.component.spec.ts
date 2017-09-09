import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyFinancesComponent } from './company-finances.component';

describe('CompanyFinancesComponent', () => {
  let component: CompanyFinancesComponent;
  let fixture: ComponentFixture<CompanyFinancesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyFinancesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyFinancesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
