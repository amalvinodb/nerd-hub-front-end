import { TestBed } from '@angular/core/testing';

import { RouterLoginGuard } from './router-login.guard';

describe('RouterLoginGuard', () => {
  let guard: RouterLoginGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(RouterLoginGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
