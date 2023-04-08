import { TestBed } from '@angular/core/testing';

import { CommonErrorHandlerService } from './common-error-handler.service';

describe('CommonErrorHandlerService', () => {
  let service: CommonErrorHandlerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommonErrorHandlerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
