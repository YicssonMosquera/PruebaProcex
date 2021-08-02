import { TestBed } from '@angular/core/testing';

import { OpcionesListasErcService } from './opciones-listas-erc.service';

describe('OpcionesListasErcService', () => {
  let service: OpcionesListasErcService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OpcionesListasErcService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
