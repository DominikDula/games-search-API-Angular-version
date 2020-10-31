import { TestBed } from '@angular/core/testing';

import { SinglegenreService } from './singlegenre.service';

describe('SinglegenreService', () => {
  let service: SinglegenreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SinglegenreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
