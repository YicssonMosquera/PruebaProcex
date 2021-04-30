import { TestBed } from '@angular/core/testing';

import { HemofiliaService } from './hemofilia.service';

describe('HemofiliaService', () => {
  let service: HemofiliaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HemofiliaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
