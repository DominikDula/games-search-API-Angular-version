import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleplatformComponent } from './singleplatform.component';

describe('SingleplatformComponent', () => {
  let component: SingleplatformComponent;
  let fixture: ComponentFixture<SingleplatformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleplatformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleplatformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
