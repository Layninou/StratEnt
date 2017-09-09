import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudiesMarketComponent } from './studies-market.component';

describe('StudiesMarketComponent', () => {
  let component: StudiesMarketComponent;
  let fixture: ComponentFixture<StudiesMarketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudiesMarketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudiesMarketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
