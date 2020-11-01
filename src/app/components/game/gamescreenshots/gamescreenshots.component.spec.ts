import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamescreenshotsComponent } from './gamescreenshots.component';

describe('GamescreenshotsComponent', () => {
  let component: GamescreenshotsComponent;
  let fixture: ComponentFixture<GamescreenshotsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GamescreenshotsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GamescreenshotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
