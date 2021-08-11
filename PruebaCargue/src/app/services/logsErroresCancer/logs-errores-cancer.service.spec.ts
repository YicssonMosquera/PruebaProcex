import { TestBed } from '@angular/core/testing';

import { LogsErroresCancerService } from './logs-errores-cancer.service';

describe('LogsErroresCancerService', () => {
  let service: LogsErroresCancerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LogsErroresCancerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
