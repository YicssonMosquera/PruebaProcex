import { TestBed } from '@angular/core/testing';

import { CuentaErcService } from './cuenta-erc.service';

describe('CuentaErcService', () => {
  let service: CuentaErcService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CuentaErcService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
