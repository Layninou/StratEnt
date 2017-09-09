import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyMarketingComponent } from './company-marketing.component';

describe('CompanyMarketingComponent', () => {
  let component: CompanyMarketingComponent;
  let fixture: ComponentFixture<CompanyMarketingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyMarketingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyMarketingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
