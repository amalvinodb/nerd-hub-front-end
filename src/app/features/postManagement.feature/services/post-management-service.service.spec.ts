import { TestBed } from '@angular/core/testing';

import { PostManagementServiceService } from './post-management-service.service';

describe('PostManagementServiceService', () => {
  let service: PostManagementServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostManagementServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
