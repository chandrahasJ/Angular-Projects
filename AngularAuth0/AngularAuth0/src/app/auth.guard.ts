import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './services/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private route: Router, public _authservice: AuthService) {
        console.log('const');
    }

    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean>|Promise<boolean>|boolean {
        const isAuth = this._authservice.isAuthenticated();
        if ( isAuth ) {
            console.log('isAuth true');
          return true;
        } else {
          console.log('isAuth false');
          this.route.navigate(['/home']);
          return false;
         }
    }
}
