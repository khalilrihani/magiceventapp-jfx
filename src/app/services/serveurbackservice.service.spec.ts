import { TestBed } from '@angular/core/testing';

import { ServeurbackserviceService } from './serveurbackservice.service';

describe('ServeurbackserviceService', () => {
  let service: ServeurbackserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServeurbackserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
