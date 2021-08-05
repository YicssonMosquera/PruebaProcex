import { TestBed } from '@angular/core/testing';

import { CACCancerServiceService } from './cac-cancer-service.service';

describe('CACCancerServiceService', () => {
  let service: CACCancerServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CACCancerServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
