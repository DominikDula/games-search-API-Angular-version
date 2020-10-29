import { TestBed } from '@angular/core/testing';

import { SinglegameService } from './singlegame.service';

describe('SinglegameService', () => {
  let service: SinglegameService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SinglegameService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
