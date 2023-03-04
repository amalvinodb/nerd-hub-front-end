import { TestBed } from '@angular/core/testing';

import { RouterLogoutGuard } from './router-logout.guard';

describe('RouterLogoutGuard', () => {
  let guard: RouterLogoutGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(RouterLogoutGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
