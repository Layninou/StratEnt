import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoliticsInitializationComponent } from './politics-initialization.component';

describe('PoliticsInitializationComponent', () => {
  let component: PoliticsInitializationComponent;
  let fixture: ComponentFixture<PoliticsInitializationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoliticsInitializationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoliticsInitializationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
