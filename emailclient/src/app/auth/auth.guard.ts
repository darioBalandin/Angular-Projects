import { inject } from '@angular/core';
import { CanMatchFn, Router, } from '@angular/router';
import { map, skipWhile, take, tap } from 'rxjs';
import { AuthService } from './auth.service';


export const authGuard: CanMatchFn = (route, segments) => {
  const router: Router = new Router();

  //This map converts the value to type boolean or UrlTree which satisfies the return
  //of the for the function. We had an issue because our signedin$ took nulls or booleans
  return inject(AuthService).signedIn$.pipe(
    skipWhile(value => value === null),
    map((value) => !!value),
    take(1),
    tap((authenticated) => {
      if (!authenticated) {
        // router.navigate(['/']);
      }
    })
  );
};
