import { inject } from "@angular/core";
import { CanActivateFn, Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { Observable, of } from "rxjs";
import { isLoggedIn } from "./auth.selector";
import { take, tap } from "rxjs/operators";

export const authGuard: CanActivateFn = (route, state): Observable<boolean> => {
  const store = inject(Store);
  const router = inject(Router);

  return store.select(isLoggedIn).pipe(
    take(1),
    tap(loggedIn => {
      if (!loggedIn) {
        router.navigateByUrl('login');
      }
    })
  );
};
