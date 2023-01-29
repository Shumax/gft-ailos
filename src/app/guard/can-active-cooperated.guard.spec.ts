import { TestBed } from '@angular/core/testing';

import { CanActiveCooperatedGuard } from './can-active-cooperated.guard';

describe('CanActiveCooperatedGuard', () => {
  let guard: CanActiveCooperatedGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CanActiveCooperatedGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
