import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyRemunerationComponent } from './company-remuneration.component';

describe('CompanyRemunerationComponent', () => {
  let component: CompanyRemunerationComponent;
  let fixture: ComponentFixture<CompanyRemunerationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyRemunerationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyRemunerationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
