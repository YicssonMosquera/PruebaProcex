import { TestBed } from '@angular/core/testing';

import { LogsHerroresCancerService } from './logs-herrores-cancer.service';

describe('LogsHerroresCancerService', () => {
  let service: LogsHerroresCancerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LogsHerroresCancerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
