import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyMachineryComponent } from './company-machinery.component';

describe('CompanyMachineryComponent', () => {
  let component: CompanyMachineryComponent;
  let fixture: ComponentFixture<CompanyMachineryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyMachineryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyMachineryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
