import { TestBed } from '@angular/core/testing';
import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  RouterStateSnapshot,
} from '@angular/router';

import { authGuard } from './auth.guard';

describe('authGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) =>
    TestBed.runInInjectionContext(() => authGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });

  it('should sign in success', () => {
    const user = {
      appName: '[DEFAULT]',
      createdAt: '1697484633263',
      displayName: 'Ivan Leon',
      email: 'herleon98@gmail.com',
    };


    const setItemSpy = spyOn(localStorage, 'setItem');
    setItemSpy.withArgs('user', JSON.stringify(user));

    const route: any = {} as any;
    const state: any = {} as any;
    const result = authGuard(route, state);

    expect(result).toBe(false);

    setItemSpy.and.callThrough();
  });
});
