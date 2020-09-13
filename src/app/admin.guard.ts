import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';
import { RestService } from './rest.service';
import { map, tap } from 'rxjs/operators';
import { AuthenticatedGuard } from './authenticated.guard';

@Injectable()
export class AdminGuard implements CanActivate {
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
          this.router.navigate(['/forms/login'], {
            queryParams: {
              returnUrl: state.url,
            },
          });
          return false;
        } else {
          if (v.roles && v.roles.indexOf('admin') !== -1) {
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
