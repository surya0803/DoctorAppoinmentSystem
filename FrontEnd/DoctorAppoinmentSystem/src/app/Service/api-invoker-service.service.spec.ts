import { TestBed } from '@angular/core/testing';

import { ApiInvokerServiceService } from './api-invoker-service.service';

describe('ApiInvokerServiceService', () => {
  let service: ApiInvokerServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiInvokerServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
