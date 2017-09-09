import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductInitializationComponent } from './product-initialization.component';

describe('ProductInitializationComponent', () => {
  let component: ProductInitializationComponent;
  let fixture: ComponentFixture<ProductInitializationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductInitializationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductInitializationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
