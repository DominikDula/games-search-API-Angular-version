import { TestBed } from '@angular/core/testing';

import { HomegamesService } from './homegames.service';

describe('HomegamesService', () => {
  let service: HomegamesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HomegamesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
