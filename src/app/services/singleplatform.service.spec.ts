import { TestBed } from '@angular/core/testing';

import { SingleplatformService } from './singleplatform.service';

describe('SingleplatformService', () => {
  let service: SingleplatformService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SingleplatformService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
