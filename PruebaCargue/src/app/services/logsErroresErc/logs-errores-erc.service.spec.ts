import { TestBed } from '@angular/core/testing';

import { LogsErroresErcService } from './logs-errores-erc.service';

describe('LogsErroresErcService', () => {
  let service: LogsErroresErcService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LogsErroresErcService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
