

import { CanActivateFn, Router } from '@angular/router';
import { Inject, inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  let _Router = Inject(Router)

  if (localStorage.getItem('eToken') !== null) {
    return true;
  } else {
    _Router.navigate(['/login']);
    return false;
  }
};
