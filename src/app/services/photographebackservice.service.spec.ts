import { TestBed } from '@angular/core/testing';

import { PhotographebackserviceService } from './photographebackservice.service';

describe('PhotographebackserviceService', () => {
  let service: PhotographebackserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PhotographebackserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
