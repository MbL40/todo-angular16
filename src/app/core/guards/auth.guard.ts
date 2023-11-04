import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';

export const authGuard: CanActivateFn = () => {
  const user = JSON.parse(localStorage.getItem('user')!);
  if (!user) return false;
  return true;
};
