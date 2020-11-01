import { TestBed } from '@angular/core/testing';

import { SingletagService } from './singletag.service';

describe('SingletagService', () => {
  let service: SingletagService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SingletagService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
