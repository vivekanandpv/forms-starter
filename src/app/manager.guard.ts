import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthenticatedGuard } from './authenticated.guard';
import { RestService } from './rest.service';

@Injectable({
  providedIn: 'root',
})
export class ManagerGuard implements CanActivate {
  constructor(
    private restService: RestService,
    private router: Router,
    private authenticatedGuard: AuthenticatedGuard
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.restService.authStatus$.pipe(
      map((v) => {
        if (!v) {
          this.router.navigate(['/forms/login']);
          return false;
        } else {
          if (v.roles && v.roles.indexOf('manager') !== -1) {
            return true;
          } else {
            this.router.navigate(['/forms/unauthorized']);
            return false;
          }
        }
      })
    );
  }
}
