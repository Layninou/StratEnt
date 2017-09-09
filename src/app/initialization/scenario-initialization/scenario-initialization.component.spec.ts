import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScenarioInitializationComponent } from './scenario-initialization.component';

describe('ScenarioInitializationComponent', () => {
  let component: ScenarioInitializationComponent;
  let fixture: ComponentFixture<ScenarioInitializationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScenarioInitializationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScenarioInitializationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
