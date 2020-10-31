import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingletemplateComponent } from './singletemplate.component';

describe('SingletemplateComponent', () => {
  let component: SingletemplateComponent;
  let fixture: ComponentFixture<SingletemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingletemplateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingletemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
