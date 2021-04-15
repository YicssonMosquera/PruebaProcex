import { TestBed } from '@angular/core/testing';

import { Res4505Service } from './res4505.service';

describe('Res4505Service', () => {
  let service: Res4505Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Res4505Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
