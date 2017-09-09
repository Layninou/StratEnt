import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameInitializationComponent } from './game-initialization.component';

describe('GameInitializationComponent', () => {
  let component: GameInitializationComponent;
  let fixture: ComponentFixture<GameInitializationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameInitializationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameInitializationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
