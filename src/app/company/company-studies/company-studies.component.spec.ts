import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyStudiesComponent } from './company-studies.component';

describe('CompanyStudiesComponent', () => {
  let component: CompanyStudiesComponent;
  let fixture: ComponentFixture<CompanyStudiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyStudiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyStudiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
