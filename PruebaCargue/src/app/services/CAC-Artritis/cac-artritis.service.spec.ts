import { TestBed } from '@angular/core/testing';

import { CACArtritisService } from './cac-artritis.service';

describe('CACArtritisService', () => {
  let service: CACArtritisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CACArtritisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
