import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyInitializationComponent } from './company-initialization.component';

describe('CompanyInitializationComponent', () => {
  let component: CompanyInitializationComponent;
  let fixture: ComponentFixture<CompanyInitializationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyInitializationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyInitializationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
