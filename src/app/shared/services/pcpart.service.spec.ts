import { TestBed } from '@angular/core/testing';

import { PcpartService } from './pcpart.service';

describe('PcpartService', () => {
  let service: PcpartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PcpartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
