import { TestBed } from '@angular/core/testing';

import { Util.ServiceService } from './util.service.service';

describe('Util.ServiceService', () => {
  let service: Util.ServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Util.ServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
