import { TestBed } from '@angular/core/testing';

import { FidusService } from './fidus.service';

describe('FidusService', () => {
  let service: FidusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FidusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
