import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanySubmissionComponent } from './company-submission.component';

describe('CompanySubmissionComponent', () => {
  let component: CompanySubmissionComponent;
  let fixture: ComponentFixture<CompanySubmissionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanySubmissionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanySubmissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
