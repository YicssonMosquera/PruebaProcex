import { TestBed } from '@angular/core/testing';

import { OpcionesListasCancerService } from './opciones-listas-cancer.service';

describe('OpcionesListasCancerService', () => {
  let service: OpcionesListasCancerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OpcionesListasCancerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
