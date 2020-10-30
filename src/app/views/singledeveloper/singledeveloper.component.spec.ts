import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingledeveloperComponent } from './singledeveloper.component';

describe('SingledeveloperComponent', () => {
  let component: SingledeveloperComponent;
  let fixture: ComponentFixture<SingledeveloperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingledeveloperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingledeveloperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
