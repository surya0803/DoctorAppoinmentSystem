import { TestBed } from '@angular/core/testing';

import { CommonpropertiesService } from './commonproperties.service';

describe('CommonpropertiesService', () => {
  let service: CommonpropertiesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommonpropertiesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
