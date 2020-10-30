import { TestBed } from '@angular/core/testing';

import { SingledeveloperService } from './singledeveloper.service';

describe('SingledeveloperService', () => {
  let service: SingledeveloperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SingledeveloperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
