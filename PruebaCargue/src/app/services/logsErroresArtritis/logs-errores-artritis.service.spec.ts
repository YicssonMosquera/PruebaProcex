import { TestBed } from '@angular/core/testing';

import { LogsErroresArtritisService } from './logs-errores-artritis.service';

describe('LogsErroresArtritisService', () => {
  let service: LogsErroresArtritisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LogsErroresArtritisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
