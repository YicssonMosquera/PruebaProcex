import { TestBed } from '@angular/core/testing';

import { CACHemofiliaService } from './cac-hemofilia.service';

describe('CACHemofiliaService', () => {
  let service: CACHemofiliaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CACHemofiliaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
