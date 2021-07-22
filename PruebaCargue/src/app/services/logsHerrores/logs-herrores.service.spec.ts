import { TestBed } from '@angular/core/testing';

import { LogsHerroresService } from './logs-herrores.service';

describe('LogsHerroresService', () => {
  let service: LogsHerroresService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LogsHerroresService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
