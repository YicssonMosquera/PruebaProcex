import { TestBed } from '@angular/core/testing';

import { OpcionesListaService } from './opciones-lista.service';

describe('OpcionesListaService', () => {
  let service: OpcionesListaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OpcionesListaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
